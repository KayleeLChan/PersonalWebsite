import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Button from 'react-bootstrap/Button';

const ExploreGrid = ({triggerBottom}) => {
    const [exploreRef, exploreView] = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0, // Set the threshold for when the element is considered in view
    });

    useEffect(() => {
        if (exploreView) {
            triggerBottom();
        }
    }, [exploreView])

    return (
        <div className="h-100 w-100 p-3 d-flex flex-column justify-content-evenly align-items-center" ref={exploreRef}>
            <h1 className="mt-3">Explore my site!</h1>
            <div className="explore-grid">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <p>If you'd like to see more of my projects, check out</p>
                    <Button variant="outline-light-pink" href="experience">my experience!</Button>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <p>Wanna know more about me and my journey? Learn more</p>
                    <Button variant="outline-light-pink" href="about-me">about me!</Button>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <p>How about deep dives into my thought processes? It's all documented here in</p>
                    <Button variant="outline-light-pink" href="blog">my blog!</Button>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <p>Want to reach out and keep in touch? Feel free to</p>
                    <Button variant="outline-light-pink" href="contact">contact me!</Button>
                </div>
            </div>
        </div>
    );
}

export default ExploreGrid;
