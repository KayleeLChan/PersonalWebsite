import React, { useState } from 'react';
import LandingParallax from '../components/landingparallax'

function Home() {
    const [atBottom, setAtBottom] = useState(false);
    const triggerBottom = () => {
        console.log(atBottom);
        setAtBottom(true);
    };

    return (
        <>
            <LandingParallax triggerBottom={triggerBottom} />
            <p className={`bouncing-text ${atBottom ? 'fade-out' : ''}`}>
                Scroll Down <span className="bi bi-arrow-down" />
            </p>
        </>
    );
}

export default Home;