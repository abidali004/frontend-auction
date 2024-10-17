// SmoothScroll.jsx
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Import Locomotive Scroll CSS
import '../App.css'

const SmoothScroll = () => {
    const scrollRef = useRef(null); // Create a ref to the scroll container

    useEffect(() => {
        // Initialize Locomotive Scroll
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true, // Enable smooth scrolling
            multiplier: 1, // Scroll speed multiplier
        });

        return () => {
            if (scroll) scroll.destroy(); // Clean up on unmount
        };
    }, []);

    return (
        <div data-scroll-container ref={scrollRef}>
            <section data-scroll-section>
                <h1 data-scroll data-scroll-speed="3" className='text-black'>Smooth Scroll Heading</h1>
                <p data-scroll data-scroll-speed="1">
                    This text scrolls at a different speed.
                </p>
            </section>
            <section data-scroll-section>
                <h2 data-scroll data-scroll-speed="2">Another Section</h2>
                <p>
                    More content to test scrolling...
                </p>
            </section>
            hello
        </div>
    );
};

export default SmoothScroll;
