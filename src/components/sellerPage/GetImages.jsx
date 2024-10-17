import React from 'react';
import addPhotos from '../../images/staticImages/addPhotos.png';

const GetImages = ({ handleImages, isImages, deleteImage }) => {
    console.log("render");
    return (
        <div className='w-full flex items-center justify-center my-5 p-5'>
            <div className="w-full md:w-2/3 border-5 border-dashed border-zinc-400 h-auto flex flex-col rounded-xl p-4 bg-white shadow-md">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4 items-center auto-rows-min">
                    {[...Array(10)].map((_, index) => (
                        <div
                            key={index}
                            className={`relative flex items-center justify-center border-2 border-zinc-300 rounded-lg group gap-1 overflow-hidden 
                            ${index === 0 ? 'row-span-2 col-span-2 h-[12rem] w-[12rem] md:h-[16rem] md:w-[16rem]' : 'h-[6rem] w-[6rem] md:h-[8rem] md:w-[8rem]'}`}
                        >
                            {isImages.length > index ? (
                                <>
                                    <img
                                        src={isImages[index].preview}
                                        alt={`Uploaded Image ${index + 1}`}
                                        className="absolute inset-0 w-full h-full object-cover hover:opacity-75 transition-opacity"
                                    />
                                    {index === 0 && (
                                        <div className="absolute top-0 left-0 bg-blue-600 text-white text-xs px-2 py-1 rounded-br-md">
                                            Main Image
                                        </div>
                                    )}
                                    <span
                                        onClick={() => deleteImage(index)}
                                        className='absolute z-10 top-0 right-0 cursor-pointer text-red-600 hover:text-red-800 transition-colors'>❌</span>
                                </>
                            ) : (
                                <>
                                    <input
                                        type="file"
                                        name="photo"
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                        onChange={handleImages}
                                    />
                                    <img
                                        src={addPhotos}
                                        alt="Add Photos"
                                        className="w-1/3 h-1/3 object-cover opacity-50 group-hover:opacity-100 transition-opacity"
                                    />
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GetImages;
