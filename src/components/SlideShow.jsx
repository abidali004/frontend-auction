import React, { useState } from "react";

const Slideshow = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    const images = [
        {
            url: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
        },
        {
            url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",

        },

    ];

    const thumbnails = [
        { url: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg", },
        { url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", },

    ];

    const plusSlides = (n) => {
        setSlideIndex((prevIndex) => {
            let newIndex = prevIndex + n;
            if (newIndex > images.length) newIndex = 1;
            if (newIndex < 1) newIndex = images.length;
            return newIndex;
        });
    };

    const currentSlide = (n) => {
        setSlideIndex(n);
    };

    return (
        <div className="container mx-auto">
            <h2 className="text-center text-2xl font-bold mb-6">Slideshow Gallery</h2>
            <div className="relative">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`mySlides ${index + 1 === slideIndex ? "block" : "hidden"}`}
                    >
                        <div className="numbertext absolute top-0 left-0 bg-gray-800 text-white px-2 py-1">
                            {index + 1} / {images.length}
                        </div>
                        <img src={image.url} alt={image.alt} className="w-full object-cover" />
                    </div>
                ))}

                <a
                    className="prev absolute top-[40%] left-0 text-white font-bold p-3 cursor-pointer"
                    onClick={() => plusSlides(-1)}
                >
                    ❮
                </a>
                <a
                    className="next absolute top-[40%] right-0 text-white font-bold p-3 cursor-pointer"
                    onClick={() => plusSlides(1)}
                >
                    ❯
                </a>

                <div className="caption-container text-center bg-gray-800 text-white py-2">
                    <p id="caption">{images[slideIndex - 1].alt}</p>
                </div>
            </div>

            <div className="row flex justify-center mt-4">
                {thumbnails.map((thumb, index) => (
                    <div className="column mx-1" key={index}>
                        <img
                            className={`demo cursor w-[100px] h-[100px] object-cover ${index + 1 === slideIndex ? "opacity-100" : "opacity-60"}`}
                            src={thumb.url}
                            alt={thumb.alt}
                            onClick={() => currentSlide(index + 1)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;
