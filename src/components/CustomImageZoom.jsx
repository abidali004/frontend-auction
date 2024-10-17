import React, { useState } from 'react';
import '../App';

const CustomImageZoom = () => {
    const [zoom, setZoom] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        console.log("clientY", e.clientY)
        console.log("clientX", e.clientX)
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setPosition({ x, y });
    };

    return (
        <div
            className="image-container"
            onMouseEnter={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
            onMouseMove={handleMouseMove}
        >
            <img
                src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"

                className={`image ${zoom ? 'zoom' : ''}`}
                style={{
                    transformOrigin: `${position.x}% ${position.y}%`,
                    transform: zoom ? 'scale(2)' : 'scale(1)',
                }}
            />
        </div>
    );
};

export default CustomImageZoom;
