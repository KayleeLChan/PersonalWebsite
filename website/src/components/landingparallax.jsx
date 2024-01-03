import React, { useEffect, useState, useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import ExploreGrid from './exploreGrid'
import Popup from './popup';

const LandingParallax = ({ triggerBottom }) => {
    // References to each layer containing an item, and whether it's been seen or not
    const introduction = useRef();
    const [introductionSeen, setIntroductionSeen] = useState(false);

    const education = useRef();
    const [educationSeen, setEducationSeen] = useState(false);

    const interests = useRef();
    const [interestsSeen, setInterestsSeen] = useState(false);

    const games = useRef();
    const [gamesSeen, setGamesSeen] = useState(false);

    const work = useRef();
    const [workSeen, setWorkSeen] = useState(false);

    const refsArray = [
        { ref: introduction, seenState: introductionSeen, setSeen: setIntroductionSeen },
        { ref: education, seenState: educationSeen, setSeen: setEducationSeen },
        { ref: interests, seenState: interestsSeen, setSeen: setInterestsSeen },
        { ref: games, seenState: gamesSeen, setSeen: setGamesSeen },
        { ref: work, seenState: workSeen, setSeen: setWorkSeen },
    ];

    const explore = useRef();

    const [showPopup, setShowPopup] = useState(false);

    const handleScroll = () => {
        // For each unseen item, show popup then set to seen
        refsArray.forEach(({ ref, seenState, setSeen }) => {
            if (ref.current && !seenState && ref.current.isSticky) {
                setShowPopup(true);
                setSeen(true);
            }
        });

        // If the last page is reached, then remove scroll prompt
        if (explore.current && explore.current.isSticky) {
            triggerBottom();
        }
    };

    // Target parallax container, then track its scroll to trigger animations
    useEffect(() => {
        const container = document.querySelector('.parallax')
        container.addEventListener('scroll', handleScroll)
        return () => {
            container.removeEventListener('scroll', handleScroll)
        }
    }, [])

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
                {showPopup && (<Popup />)}
            </ParallaxLayer>
            <ParallaxLayer
                offset={0.5}
                sticky={{ start: 0.5, end: 1.5 }}
                className="item"
                id="introduction"
                ref={introduction}
            >
                <img src="/Binary.svg" width="300" height="300" alt="Binary code" />
            </ParallaxLayer>
            <ParallaxLayer
                offset={1}
                sticky={{ start: 1, end: 2 }}
                speed={2.3}
                style={{ top: "310px" }}
                className="text"
            >
                <p className="p-3 text-center">Hello world! I’m Kaylee Chan, an aspiring game developer, web developer, and avid programmer. Thanks for dropping by!</p>
            </ParallaxLayer>
            <ParallaxLayer
                offset={3}
                sticky={{ start: 3, end: 4.5 }}
                className="item"
                id="education"
                ref={education}
            >
                <img src="/UofT.svg" width="300" height="300" alt="University of Toronto logo" />
            </ParallaxLayer>
            <ParallaxLayer
                offset={3.5}
                sticky={{ start: 3.5, end: 5 }}
                speed={2.3}
                style={{ top: "310px" }}
                className="text"
            >
                <p className="p-3 text-center">I am currently a third year student at the University of Toronto, studying a specialist in Computer Science and certificate in business fundamentals.</p>
            </ParallaxLayer>
            <ParallaxLayer
                offset={5.5}
                sticky={{ start: 6, end: 7.5 }}
                className="item"
                id="interests"
                ref={interests}
            >
                <img src="/Art.svg" width="300" height="300" alt="Paint palette" />
            </ParallaxLayer>
            <ParallaxLayer
                offset={6.5}
                sticky={{ start: 6.5, end: 8 }}
                speed={2.3}
                style={{ top: "310px" }}
                className="text"
            >
                <p className="p-3 text-center">As someone who loves the fine arts, I like to be as creative as possible to make experiences people can enjoy and I can be proud of!</p>
            </ParallaxLayer>
            <ParallaxLayer
                offset={8.3}
                sticky={{ start: 9, end: 10.5 }}
                className="item"
                id="games"
                ref={games}
            >
                <img src="/Game.svg" width="300" height="300" alt="Game element from Ascent and Seed You Later" />
            </ParallaxLayer>
            <ParallaxLayer
                offset={9.5}
                sticky={{ start: 9.5, end: 11 }}
                speed={2.3}
                style={{ top: "310px" }}
                className="text"
            >
                <p className="p-3 text-center">Some examples are games I’ve worked on, such as <a href="https://tomas-ha.itch.io/ascent" target="_blank" rel="noopener noreferrer" aria-label="Ascent itch.io page (opens in new tab)">Ascent</a> and <a href="https://edwardhan.itch.io/seed-you-later" target="_blank" rel="noopener noreferrer" aria-label="Seed You Later itch.io page (opens in new tab)"> Seed You Later</a>, as well as websites, such as the one you're on right now!</p>
            </ParallaxLayer>
            <ParallaxLayer
                offset={7}
                sticky={{ start: 12, end: 13.5 }}
                className="item"
                id="work"
                ref={work}
            >
                <img src="/Questrade.svg" width="300" height="300" alt="Questrade logo" />
            </ParallaxLayer>
            <ParallaxLayer
                offset={12.5}
                sticky={{ start: 12.5, end: 14 }}
                speed={2.3}
                style={{ top: "310px" }}
                className="text"
            >
                <p className="p-3 text-center">I also take my creativity and problem-solving into my internships, like at <a href="https://www.linkedin.com/pulse/intern-spotlight-kaylee-chan-web-developer-questrade/" target="_blank" rel="noopener noreferrer" aria-label="Questrade internship article (opens in new tab)">Questrade</a>.</p>
            </ParallaxLayer>
            <ParallaxLayer
                offset={15.5}
                sticky={{ start: 15.5, end: 16 }}
                id="thanks"
            >
                <div className="d-flex flex-column justify-content-center align-items-center p-3">
                    <img src="/Smile.svg" width="300" height="300" alt="Kaylee Chan pixel avatar smiling" />
                    <h2 className="mt-5 fs-3">Thank you for visting!</h2>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
                offset={15.8}
                factor={2}
                speed={0.3}
            >
                <div className="h-50 w-75 bg-dark-pink rounded-3" />
            </ParallaxLayer>
            <ParallaxLayer
                offset={17}
                sticky={{ start: 16.9, end: 18 }}
                id="explore"
                ref={explore}
            >
                <ExploreGrid triggerBottom={triggerBottom} />
            </ParallaxLayer>
        </Parallax>
    );
}

export default LandingParallax;
