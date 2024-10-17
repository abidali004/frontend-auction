import React, { useEffect, useRef } from 'react';

const ScrollTracker = () => {
    const scrollYRef = useRef(0);

    const handleScroll = () => {
        scrollYRef.current = window.scrollY;
        console.log('Scroll Position:', scrollYRef.current);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <h1>Scroll down to see the effect</h1>
            <div style={{ height: '200vh', background: '#f0f0f0' }}>
                <p>Scroll down to see the scroll position in the console.</p>
            </div>
        </div>
    );
};

export default ScrollTracker;
