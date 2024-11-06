import React, { useEffect, useState, useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import ExploreGrid from './exploreGrid'
import Popup from './popup';
import * as PublicPaths from '../utils/publicPaths';

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

    const levelUpScroll = () => {
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

    const changeCrumb = (crumb, width, threshold) => {
        if (width > threshold) {
            crumb.classList.add('reached');
        }
        else {
            crumb.classList.remove('reached');
        }
    }

    // Target parallax container, then track its scroll to trigger animations
    useEffect(() => {
        const container = document.querySelector('.parallax')
        const breadpath = document.querySelector('.breadcrumb-progress');
        const intro = document.querySelector('.breadcrumb-introduction');
        const edu = document.querySelector('.breadcrumb-education');
        const interest = document.querySelector('.breadcrumb-interests');
        const games = document.querySelector('.breadcrumb-games');
        const work = document.querySelector('.breadcrumb-work');
        const thanks = document.querySelector('.breadcrumb-thanks');
        const explore = document.querySelector('.breadcrumb-explore');
    
        const breadcrumbScroll = () => {
            // Calculate how much of the page has been scrolled
            const scrollTop = container.scrollTop;
            const scrollHeight = container.scrollHeight - container.clientHeight;
            const scrollPercentage = (scrollTop / scrollHeight) * 100;
    
            // Calculate the width based on the scroll percentage
            const maxWidth = 920; // Maximum width of the breadpath
            const minWidth = 0; // Minimum width of the breadpath
            const width = minWidth + (maxWidth - minWidth) * (scrollPercentage / 100);

            changeCrumb(intro, width, 0);
            changeCrumb(edu, width, 162);
            changeCrumb(interest, width, 325);
            changeCrumb(games, width, 487);
            changeCrumb(work, width, 623);
            changeCrumb(thanks, width, 770);
            changeCrumb(explore, width, 915);
    
            // Set the width and background color of the breadpath
            breadpath.style.width = `${width}px`;
        };
    
        container.addEventListener('scroll', levelUpScroll);
        container.addEventListener('scroll', breadcrumbScroll);
    
        return () => {
            container.removeEventListener('scroll', levelUpScroll);
            container.removeEventListener('scroll', breadcrumbScroll);
        };
    }, []);

    return (
        <Parallax pages={18} className="parallax">
            <ParallaxLayer
                offset={0}
                sticky={{ start: 0, end: 14.5 }}
                className="avatar"
            >
                <div>
                    <img src={`${PublicPaths.AVATAR_IMAGES_PATH}/Avatar.svg`} alt="Kaylee Chan pixel avatar" />
                    <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
                </div>
            </ParallaxLayer>
            <ParallaxLayer
                offset={0.5}
                sticky={{ start: 0.5, end: 1.5 }}
                speed={1.7}
                className="item"
            >
                <img src={`${PublicPaths.LANDING_IMAGES_PATH}/Binary.svg`} alt="Binary code" />
            </ParallaxLayer>
            <ParallaxLayer
                offset={1}
                sticky={{ start: 1, end: 1.7 }}
                speed={2.3}
                className="text"
                id="introduction"
                ref={introduction}
            >
                <p className="text-center">Hello world! I’m Kaylee Chan, an aspiring game developer, web developer, and avid programmer. Thanks for dropping by!</p>
            </ParallaxLayer>
            <ParallaxLayer
                offset={3}
                sticky={{ start: 3, end: 4.5 }}
                speed={1.7}
                className="item"
            >
                <img src={`${PublicPaths.LANDING_IMAGES_PATH}/UofT.svg`} alt="University of Toronto logo" />
            </ParallaxLayer>
            <ParallaxLayer
                offset={3.5}
                sticky={{ start: 3.5, end: 4.2 }}
                speed={2.3}
                className="text"
                id="education"
                ref={education}
            >
                <p className="text-center">I am currently a fourth year student at the University of Toronto, studying a specialist in Computer Science with a focus in AI and Game Design, as well as a certificate in Business Fundamentals.</p>
            </ParallaxLayer>
            <ParallaxLayer
                offset={5.5}
                sticky={{ start: 6, end: 7.5 }}
                speed={1.7}
                className="item"
            >
                <img src={`${PublicPaths.LANDING_IMAGES_PATH}/Art.svg`} alt="Paint palette" />
            </ParallaxLayer>
            <ParallaxLayer
                offset={6.5}
                sticky={{ start: 6.5, end: 7.2 }}
                speed={2.3}
                className="text"
                id="interests"
                ref={interests}
            >
                <p className="text-center">As someone who loves the fine arts, I like to be as creative as possible to make experiences people can enjoy and I can be proud of!</p>
            </ParallaxLayer>
            <ParallaxLayer
                offset={8.3}
                sticky={{ start: 9, end: 10.5 }}
                speed={1.7}
                className="item"
            >
                <img src={`${PublicPaths.LANDING_IMAGES_PATH}/Game.svg`} alt="Game element from Ascent and Seed You Later" />
            </ParallaxLayer>
            <ParallaxLayer
                offset={9.5}
                sticky={{ start: 9.5, end: 10.2 }}
                speed={2.3}
                className="text"
                id="games"
                ref={games}
            >
                <p className="text-center">Some examples are games I’ve worked on, such as <a href="https://tomas-ha.itch.io/ascent" target="_blank" rel="noopener noreferrer" aria-label="Ascent itch.io page (opens in new tab)">Ascent</a> and <a href="https://edwardhan.itch.io/seed-you-later" target="_blank" rel="noopener noreferrer" aria-label="Seed You Later itch.io page (opens in new tab)"> Seed You Later</a>, as well as websites, such as the one you're on right now!</p>
            </ParallaxLayer>
            <ParallaxLayer
                offset={7}
                sticky={{ start: 12, end: 13.5 }}
                speed={1.7}
                className="item"
            >
                <img src={`${PublicPaths.LANDING_IMAGES_PATH}/Questrade.svg`} alt="Questrade logo" />
            </ParallaxLayer>
            <ParallaxLayer
                offset={12.5}
                sticky={{ start: 12.5, end: 13.2 }}
                speed={2.3}
                className="text"
                id="work"
                ref={work}
            >
                <p className="text-center">I also take my creativity and problem-solving into my internships, like at <a href="https://www.linkedin.com/pulse/intern-spotlight-kaylee-chan-web-developer-questrade/" target="_blank" rel="noopener noreferrer" aria-label="Questrade internship article (opens in new tab)">Questrade</a>.</p>
            </ParallaxLayer>
            <ParallaxLayer
                offset={15.5}
                sticky={{ start: 15.5, end: 16 }}
                id="thanks"
            >
                <div className="d-flex flex-column justify-content-center align-items-center p-3">
                    <img src={`${PublicPaths.AVATAR_IMAGES_PATH}/Smile.svg`} alt="Kaylee Chan pixel avatar smiling" />
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
