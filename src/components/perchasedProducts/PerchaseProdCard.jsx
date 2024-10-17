// import React, { useState } from 'react';
// import { MdMessage, MdCall, MdMoreVert, MdSend, MdAttachFile } from 'react-icons/md';
// import { FaArrowLeft, FaSmile } from 'react-icons/fa';

// const PurchasedProdCard = ({ product }) => {
//     const [showChat, setShowChat] = useState(false); // State for toggling chatbox modal

//     const handleChatToggle = () => {
//         setShowChat(!showChat); // Toggle chat modal visibility
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-2">
//             <div className="max-w-6xl p-6 bg-white rounded-lg shadow-lg flex flex-col lg:flex-row relative">
//                 {/* Product Image Section */}
//                 <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
//                     <img
//                         src={`http://localhost:5000/uploads/${product.images[0]}`}
//                         alt={product.title}
//                         className="rounded-lg object-cover w-full h-auto"
//                     />
//                     {/* Thumbnails */}
//                     <div className="flex justify-center mt-4 space-x-4 border-2 border-red-500">
//                         {product.images.map((img, index) => (
//                             <div key={index}>
//                                 <img
//                                     src={`http://localhost:5000/uploads/${img}`}
//                                     alt="imag"
//                                     className="w-20 h-20 rounded-lg border border-gray-300"
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Product Details Section */}
//                 <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
//                     <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
//                     <div className="flex items-center space-x-2 text-gray-600 mb-2">
//                         <span>⭐ (4.9)</span>
//                         <span className="text-sm">9.2K Reviews</span>
//                     </div>
//                     <div className="flex items-center space-x-4 mb-4">
//                         <span className="text-gray-400 line-through">${product.startPrice}</span>
//                         <span className="text-4xl text-green-600 font-bold">${product.startPrice}</span>
//                     </div>
//                     <p className="text-gray-600 mb-4">
//                         {product.description}...
//                         <a href="#" className="text-blue-500"> Read more</a>
//                     </p>

//                     <div className="mb-6">
//                         <h3 className="text-lg font-semibold mb-2">3 Colors Available</h3>
//                         <div className="flex space-x-4">
//                             <button className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-gray-300"></button>
//                             <button className="w-8 h-8 rounded-full bg-black border-2 border-gray-300"></button>
//                             <button className="w-8 h-8 rounded-full bg-gray-400 border-2 border-gray-300"></button>
//                         </div>
//                     </div>

//                     <div className="flex space-x-4">
//                         <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
//                             Buy Now
//                         </button>
//                         <button className="border-2 border-black text-black px-6 py-2 rounded-lg hover:bg-gray-200">
//                             Add to Cart
//                         </button>
//                     </div>

//                     {/* Updated Message Icon */}
//                     <button
//                         className="absolute top-4 right-4 text-gray-500 hover:text-blue-500"
//                         onClick={handleChatToggle}
//                     >
//                         <MdMessage size={24} />
//                     </button>
//                 </div>
//             </div>

//             {/* Chatbox Modal */}
//             {showChat && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-center">
//                     <div className="bg-white w-full lg:w-1/3 h-screen p-6 rounded-l-lg shadow-lg relative">
//                         {/* Chat Header */}
//                         <div className="flex items-center justify-between mb-4">
//                             <div className="flex items-center">
//                                 <FaArrowLeft className="mr-3 text-gray-600" size={20} />
//                                 <div className="flex flex-col">
//                                     <h3 className="text-lg font-semibold">Jonathan Patterson</h3>
//                                     <span className="text-sm text-green-500">Online</span>
//                                 </div>
//                             </div>
//                             <div className="flex space-x-3">
//                                 <MdCall className="text-gray-600" size={20} />
//                                 <MdMoreVert className="text-gray-600" size={20} />
//                             </div>
//                         </div>

//                         {/* Chat Messages */}
//                         <div className="flex-1 overflow-y-auto mb-4">
//                             <div className="mb-4">
//                                 <div className="bg-green-200 p-3 rounded-lg text-right">
//                                     Glad I ran into you today to cooperate
//                                     <span className="block text-xs text-gray-500 mt-1">8:30</span>
//                                 </div>
//                             </div>
//                             <div className="mb-4">
//                                 <div className="bg-gray-200 p-3 rounded-lg text-left">
//                                     I'm happy too, I hope we work well together
//                                     <span className="block text-xs text-gray-500 mt-1">8:30</span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Chat Input */}
//                         <div className="flex items-center p-2 bg-gray-100 rounded-lg">
//                             <FaSmile className="text-gray-600 mr-3" size={24} />
//                             <input
//                                 type="text"
//                                 placeholder="@reallygreatsite"
//                                 className="flex-1 px-4 py-2 rounded-lg bg-white border border-gray-300"
//                             />
//                             <MdAttachFile className="text-gray-600 ml-3" size={24} />
//                             <MdSend className="text-blue-500 ml-3" size={24} />
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default PurchasedProdCard;

import React, { useState, useRef, useEffect } from 'react';
import { MdMessage } from 'react-icons/md';
import ChatBox from './ChatBox';
import ScrollTracker from './ScrollTracker';

const PurchasedProdCard = ({ product }) => {
    const [showChat, setShowChat] = useState(false);

    const handleChatToggle = () => {
        setShowChat((prev) => !prev);
    };
    console.log("re render")
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-2">
            <div className="max-w-6xl p-6 bg-white rounded-lg shadow-lg flex flex-col lg:flex-row relative">
                <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
                    <img
                        src={`http://localhost:5000/uploads/${product.images[0]}`}
                        alt={product.title}
                        className="rounded-lg object-cover w-full h-auto"
                    />
                    <div className="flex justify-center mt-4 space-x-4 border-2 border-red-500">
                        {product.images.map((img, index) => (
                            <div key={index}>
                                <img
                                    src={`http://localhost:5000/uploads/${img}`}
                                    alt="imag"
                                    className="w-20 h-20 rounded-lg border border-gray-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
                    <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
                    <div className="flex items-center space-x-2 text-gray-600 mb-2">
                        <span>⭐ (4.9)</span>
                        <span className="text-sm">9.2K Reviews</span>
                    </div>
                    <div className="flex items-center space-x-4 mb-4">
                        <span className="text-gray-400 line-through">${product.startPrice}</span>
                        <span className="text-4xl text-green-600 font-bold">${product.startPrice}</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                        {product.description}...
                        <a href="#" className="text-blue-500"> Read more</a>
                    </p>

                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">3 Colors Available</h3>
                        <div className="flex space-x-4">
                            <button className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-gray-300"></button>
                            <button className="w-8 h-8 rounded-full bg-black border-2 border-gray-300"></button>
                            <button className="w-8 h-8 rounded-full bg-gray-400 border-2 border-gray-300"></button>
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
                            Buy Now
                        </button>
                        <button className="border-2 border-black text-black px-6 py-2 rounded-lg hover:bg-gray-200">
                            Add to Cart
                        </button>
                    </div>

                    <button
                        className="absolute top-4 right-4 text-gray-500 hover:text-blue-500"
                        onClick={handleChatToggle}
                    >
                        <MdMessage size={24} />
                    </button>
                </div>
            </div>

            <ChatBox
                showChat={showChat}
                handleChatToggle={handleChatToggle}
                product={product}
            />

        </div>
    );
};

export default PurchasedProdCard;

