import React, { useState } from 'react';
import LandingParallax from '../components/landingParallax'
import { Analytics } from "@vercel/analytics/react"

function Home() {
    // Boolean for whether to show scroll prompt or not
    const [atBottom, setAtBottom] = useState(false);
    const triggerBottom = () => {
        setAtBottom(true);
    };

    return (
        <>
            <LandingParallax triggerBottom={triggerBottom} />
            <p className={`bouncing-text ${atBottom ? 'fade-out' : ''}`}>
                Scroll Down <span className="bi bi-arrow-down" />
            </p>
            <Analytics />
        </>
    );
}

export default Home;