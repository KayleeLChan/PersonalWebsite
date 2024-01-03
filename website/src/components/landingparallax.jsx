import React, { useEffect, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useInView } from 'react-intersection-observer';
import ExploreGrid from '../components/exploregrid'
import Popup from './popup';

const LandingParallax = ({triggerBottom}) => {
    const [firstRef, firstInView] = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0, // Set the threshold for when the element is considered in view
    });

    const [secondRef, secondInView] = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0, // Set the threshold for when the element is considered in view
    });

    const [thirdRef, thirdInView] = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0, // Set the threshold for when the element is considered in view
    });

    const [fourthRef, fourthInView] = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0, // Set the threshold for when the element is considered in view
    });

    const [fifthRef, fifthInView] = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0, // Set the threshold for when the element is considered in view
    });

    const [isImgOutOfView, setIsImgOutOfView] = useState(false);

    useEffect(() => {
        if (!firstInView || !secondInView || !thirdInView || !fourthInView || !fifthInView) {
            setIsImgOutOfView(true);
        }
        else {
            setIsImgOutOfView(false);
        }

    }, [firstInView, secondInView, thirdInView, fourthInView, fifthInView]);

    return (
        <Parallax pages={18} className="parallax">
            <ParallaxLayer
                offset={0}
                sticky={{ start: 0, end: 14.5 }}
                className="avatar bg-primary-black"
            >
                <div>
                    <img src="/Avatar.svg" width="300" height="300" alt="Kaylee Chan pixel avatar" />
                </div>
                {isImgOutOfView && <Popup />}
            </ParallaxLayer>
            <ParallaxLayer
                offset={0.1}
                sticky={{ start: 0.1, end: 1.5 }}
                className="item"
            >
                <img src="/Binary.svg" width="300" height="300" alt="Binary code" />
            </ParallaxLayer>
            <ParallaxLayer
                offset={1}
                sticky={{ start: 1, end: 2 }}
                speed={2.3}
                style={{ top: "310px" }}
            >
                <p className="p-3 text-center">Hello world! I’m Kaylee Chan, an aspiring game developer and avid programmer. Thanks for dropping by!</p>
            </ParallaxLayer>
            <ParallaxLayer
                offset={3}
                sticky={{ start: 3, end: 4.5 }}
                className="item"
            >
                <img src="/UofT.svg" width="300" height="300" alt="University of Toronto logo" ref={firstRef} />
            </ParallaxLayer>
            <ParallaxLayer
                offset={3.5}
                sticky={{ start: 3.5, end: 5 }}
                speed={2.3}
                style={{ top: "310px" }}
            >
                <p className="p-3 text-center">I am currently a third year student at the University of Toronto, studying a specialist in Computer Science and certificate in business fundamentals.</p>
            </ParallaxLayer>
            <ParallaxLayer
                offset={5.5}
                sticky={{ start: 6, end: 7.5 }}
                className="item"
            >
                <img src="/Art.svg" width="300" height="300" alt="Paint palette" ref={secondRef} />
            </ParallaxLayer>
            <ParallaxLayer
                offset={6.5}
                sticky={{ start: 6.5, end: 8 }}
                speed={2.3}
                style={{ top: "310px" }}
            >
                <p className="p-3 text-center">As someone who loves the fine arts, I like to be as creative as possible to make experiences people can enjoy and I can be proud of!</p>
            </ParallaxLayer>
            <ParallaxLayer
                offset={8.3}
                sticky={{ start: 9, end: 10.5 }}
                className="item"
            >
                <img src="/Game.svg" width="300" height="300" alt="Game element from Ascent and Seed You Later" ref={thirdRef} />
            </ParallaxLayer>
            <ParallaxLayer
                offset={9.5}
                sticky={{ start: 9.5, end: 11 }}
                speed={2.3}
                style={{ top: "310px" }}
            >
                <p className="p-3 text-center">Some examples are games I’ve worked on, such as Ascent and Seed You Later.</p>
            </ParallaxLayer>
            <ParallaxLayer
                offset={7}
                sticky={{ start: 12, end: 13.5 }}
                className="item"
            >
                <img src="/Questrade.svg" width="300" height="300" alt="Questrade logo" ref={fourthRef} />
            </ParallaxLayer>
            <ParallaxLayer
                offset={12.5}
                sticky={{ start: 12.5, end: 14 }}
                speed={2.3}
                style={{ top: "310px" }}
            >
                <p className="p-3 text-center">I also take my creativity and problem-solving into my internships, like at Questrade.</p>
            </ParallaxLayer>
            <ParallaxLayer
                offset={15.5}
                sticky={{ start: 15.5, end: 16 }}
            >
                <div className="d-flex flex-column justify-content-center align-items-center p-3">
                    <img src="/Smile.svg" width="300" height="300" alt="Kaylee Chan pixel avatar smiling" ref={fifthRef} />
                    <h2 className="mt-5 fs-3">Thank you for visting!</h2>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
                offset={15.8}
                factor={2}
                speed={0.3}
            >
                <div className="h-50 w-75 bg-dark-pink rounded-3">
                </div>
            </ParallaxLayer>
            <ParallaxLayer
                offset={17}
            >
                <ExploreGrid triggerBottom={triggerBottom} />
            </ParallaxLayer>
        </Parallax>
    );
}

export default LandingParallax;
