// import { motion } from 'framer-motion';
// import axios from 'axios'
// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeBackgroundImage } from '../data/redux/removeBackgroundSlice';

// const CurrentBid = () => {
//     const [isParentAnimationComplete, setIsParentAnimationComplete] = useState(false);
//     const [proceding, setProceding] = useState()
//     const [input, setInput] = useState()
//     const dispatch = useDispatch();
//     const image = useSelector((state) => state.remove.image)



//     const handelImage = (e) => {
//         e.preventDefault();
//         setInput(e.target.file[0])

//     }


//     const submitForm = async (e) => {
//         e.preventDefault();
//         const file = new FormData();
//         file.append("image", input)
//         file.append('size', 'auto');

//         const response = await axios.post('https://api.remove.bg/v1.0/removebg', file, {

//             headers: {
//                 'X-Api-Key': 'JFMPVJnxsA2ubaLdWVE3iYPr',
//                 'Content-Type': 'multipart/form-data'
//             },
//             responseType: 'blob',
//         });
//         dispatch(removeBackgroundImage(response.data));


//     }
//     if (image) {
//         const imagUrl = URL.createObjectURL(image)
//         setProceding(imagUrl)
//     }


//     return (
//         <motion.div
//             initial={{ x: "100%", opacity: 0 }}
//             animate={{ x: "0%", opacity: 1 }}
//             transition={{
//                 duration: 1.5,
//                 ease: [0.16, 1, 0.3, 1],
//             }}
//             onAnimationComplete={() => setIsParentAnimationComplete(true)}
//             className=' h-[600px] w-[500px] border-2 border-black ml-[40%]'
//         >
//             <div className="w-[95%] h-[88%] border-2 border-yellow-500 bg-[url('../src/images/gavel3.jpg')] bg-cover bg-center flex items-center justify-center relative ">
//                 {isParentAnimationComplete && (
//                     <motion.div
//                         initial={{ x: "30%", opacity: 0 }}
//                         animate={{ x: "-40%", opacity: 1 }}
//                         transition={{
//                             duration: 1.5,
//                             ease: [0.16, 1, 0.3, 1],
//                         }}
//                         className="relative w-[400px] h-[500px] border-2 border-white overflow-hidden"
//                     >
//                         <img
//                             src={proceding}
//                             alt="car"
//                             className="w-full h-full object-cover object-center"
//                         />
//                     </motion.div>
//                 )}
//             </div>
//             <div className="">
//                 <form >
//                     <label>
//                         <input type="file" onChange={handelImage} />
//                     </label>
//                     <button onClick={submitForm}>submit form</button>
//                 </form>
//             </div>
//             Hello from
//         </motion.div>
//     );
// };

// export default CurrentBid;

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBackgroundImage } from '../data/redux/removeBackgroundSlice';
import axios from 'axios';

const CurrentBid = () => {
    const [isParentAnimationComplete, setIsParentAnimationComplete] = useState(false);
    const [file, setFile] = useState(null);
    const [proceding, setProceding] = useState(null);
    console.log("file", file)
    const dispatch = useDispatch();
    const image = useSelector((state) => state.remove.image);

    const handleImage = (e) => {
        e.preventDefault();
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const submitForm = async (e) => {
        e.preventDefault();
        if (!file) return;

        const formData = new FormData();
        formData.append('image_file', file);
        formData.append('size', 'auto');
        console.log(formData)
        try {

            const response = await axios.post('https://api.remove.bg/v1.0/removebg', formData, {
                headers: {
                    'X-Api-Key': 'JFMPVJnxsA2ubaLdWVE3iYPr',
                    'Content-Type': 'multipart/form-data',
                },
                responseType: 'blob',
            });
            console.log('responsed')
            // dispatch(removeBackgroundImage(response.data));
            const imageUrl = URL.createObjectURL(response.data);
            setProceding(imageUrl)


        } catch (error) {
            console.error('Error removing background:', error);
        }
    };


    dispatch(removeBackgroundImage(proceding))
    return (
        <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{
                duration: 1.5,
                ease: [0.16, 1, 0.3, 1],
            }}
            onAnimationComplete={() => setIsParentAnimationComplete(true)}
            className='h-[400px] w-[300px] border-2 border-black ml-[40%]'
        >
            <div className=" relative w-[95%] h-[88%] border-2 border-yellow-500 bg-[url('../src/images/gavel3.jpg')] bg-cover bg-center flex items-center justify-center ">
                {isParentAnimationComplete && (
                    <motion.div
                        initial={{ x: "30%", opacity: 0 }}
                        animate={{ x: "0%", opacity: 1 }}
                        transition={{
                            duration: 1.5,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="absolute  w-[200px] h-[300px] border-3 border-white"
                    >
                        {proceding && <img
                            src={proceding}
                            alt="Processed"
                            className="inset-0  Class bg-inherit w-[400px] h-[500px]"
                        />}

                        {/* <p className="text-white">{image}</p> */}

                    </motion.div>
                )}
            </div>
            <div>

                <form onSubmit={submitForm}>
                    <label>
                        <input type="file" onChange={handleImage} />
                    </label>
                    <button type="submit">Submit Form</button>
                </form>
            </div>
            Hello from

        </motion.div>
    );
};

export default CurrentBid;

