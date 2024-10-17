import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaSmile } from 'react-icons/fa';
import { MdCall, MdMoreVert, MdAttachFile, MdSend } from 'react-icons/md';
import io from 'socket.io-client';
import Cookies from 'js-cookie';
import { toast, ToastContainer } from 'react-toastify';
import CompanyDropDown from '../CompanyDropDown';
import { clearMessage } from '@/api/authentication';

let socket;

const ChatBox = ({ showChat, handleChatToggle, product }) => {
    const userId = Cookies.get('userId');
    console.log("product id whoe come from parent", product?._id)
    const [message, setMessage] = useState('');
    const [allMessages, setAllMessages] = useState([]);
    const options = [
        { id: 0, value: "clear chat" },
    ];
    const lastMessage = useRef();
    useEffect(() => {
        lastMessage.current?.scrollIntoView({ behaviour: 'smooth' })
    }, [allMessages])


    useEffect(() => {
        const productId = product?._id;
        if (userId) {
            socket = io('http://localhost:5000');


            socket.emit('joinChat', { userId, productId });
            socket.on('message', ({ fromUserId, message, productId, isFromSelf }) => {
                setAllMessages((prevMessages) => [
                    ...prevMessages,
                    { message, fromUserId, productId, isFromSelf }
                ]);
            });
        } else {
            toast.error("please login")
        }

        return () => {
            socket.off('message');
        };
    }, [userId]);
    console.log("product id ", allMessages[0]?.productId)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            const newMessage = {
                fromUserId: userId,
                message,
                productId: product?._id,
                isFromSelf: userId,
            };
            console.log("seller", product?.selleer)
            console.log("user id ", userId)

            socket.emit('new message', {
                message,
                fromUserId: userId,
                toUserId: product?.seller === userId ? product?.buyer : product?.seller,
                productId: product?._id,
            });
            setAllMessages((prevMessages) => [...prevMessages, newMessage]);

            setMessage('');
        }
    };
    console.log("allMessages", allMessages)

    const handleClick = async (chat) => {
        if (!userId) {
            toast.error("please login")
            return;
        }

        if (chat === "clear chat") {
            await clearMessage(userId, product._id)
            toast.success("chat clear successfully")
            setAllMessages([]);
        } else {
            toast.success({ chat })
            console.log("error clear chat")
        }
    }
    return (
        showChat && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-center z-10">
                <div className="bg-white w-full lg:w-1/3 p-6 h-screen rounded-l-lg shadow-lg relative">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <FaArrowLeft className="mr-3 text-gray-600" size={20} onClick={handleChatToggle} />
                            <div className="flex flex-col">
                                <h3 className="text-lg font-semibold">Jonathan Patterson</h3>
                                <span className="text-sm text-green-500">Online</span>
                            </div>
                        </div>
                        <div className="flex space-x-3">
                            <MdCall className="text-gray-600" size={20} />
                            {/* <MdMoreVert className="text-gray-600" size={20} /> */}
                            <CompanyDropDown options={options} handleClick={handleClick} />
                        </div>
                    </div>
                    <div className="flex flex-col items-end overflow-y-auto mb-4 h-[70%]">
                        {allMessages.map((msg, index) => (
                            msg.productId === product?._id && (
                                <div key={index} className={`mb-4 w-[100%] flex flex-col ${msg.isFromSelf ? 'items-end' : 'items-start'}`}>
                                    <div ref={lastMessage} className={`rounded-lg p-2 w-[60%] ${msg.isFromSelf ? 'bg-green-200' : 'bg-gray-200'}`}>
                                        {msg.message}
                                        <span className="block text-xs text-gray-500 mt-1">
                                            {/* {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} */}
                                        </span>
                                    </div>
                                </div>
                            )

                        ))}
                    </div>
                    <form className="flex items-center p-2 bg-gray-100 rounded-lg" onSubmit={handleSubmit}>
                        <FaSmile className="text-gray-600 mr-3" size={24} />
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="flex-1 px-4 py-2 rounded-lg bg-white border border-gray-300"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <MdAttachFile className="text-gray-600 ml-3" size={24} />
                        <button type="submit" className="ml-3">
                            <MdSend className="text-blue-500" size={24} />
                        </button>
                    </form>


                </div>
                <ToastContainer />

            </div>
        )
    );
};

export default ChatBox;
