import React from 'react';
import {Parallax, ParallaxLayer} from '@react-spring/parallax'

function Home() {

    return (
        <Parallax pages={9} className="parallax">
            <ParallaxLayer
                offset={0}
                sticky={{ start:0, end: 3 }}
                className="avatar"
            >
                <img src="/Avatar.svg" width="300" height="300" />
            </ParallaxLayer>
            <ParallaxLayer
                offset={1}
                sticky={{ start:1, end: 2 }}
            >
                <div className="d-flex flex-column justify-content-start">
                    <img src="/Laptop.svg" className="item" width="150" height="150"/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
                offset={1.7}
                speed={1.5}
            >
                <p>I am a programmer!</p>
            </ParallaxLayer>
            <ParallaxLayer
                offset={2}
                sticky={{ start:2, end: 3 }}
            >
                <div className="d-flex flex-column justify-content-start">
                    <img src="/UofT.svg" className="item" width="150" height="150"/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
                offset={2.7}
                speed={1.5}
            >
                <p>I go to uoft!</p>
            </ParallaxLayer>
            <ParallaxLayer
                offset={4}
            >
                <div className="bg-medium-pink h-100 w-100 p-3">
                    <h1>Proof of Concept!</h1>
                </div>
            </ParallaxLayer>
        </Parallax>
    );
}

export default Home;