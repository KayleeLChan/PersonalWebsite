import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Button from 'react-bootstrap/Button';

function Home() {

    return (
        <Parallax pages={9} className="parallax">
            <ParallaxLayer
                offset={0}
                sticky={{ start: 0, end: 5.7 }}
                className="avatar"
            >
                <img src="/Avatar.svg" width="300" height="300" alt="Kaylee Chan pixel avatar" />
            </ParallaxLayer>
            <ParallaxLayer
                offset={1}
                sticky={{ start: 1, end: 1.5 }}
            >
                <img src="/Binary.svg" width="300" height="300" alt="Binary code" />
            </ParallaxLayer>
            <ParallaxLayer
                offset={1.7}
                speed={1.5}
            >
                <p>I am a programmer!</p>
            </ParallaxLayer>
            <ParallaxLayer
                offset={2}
                sticky={{ start: 2, end: 2.5 }}
            >
                <img src="/UofT.svg" width="300" height="300" alt="University of Toronto logo" />
            </ParallaxLayer>
            <ParallaxLayer
                offset={2.7}
                speed={1.5}
            >
                <p>I go to uoft!</p>
            </ParallaxLayer>
            <ParallaxLayer
                offset={3}
                sticky={{ start: 3, end: 3.5 }}
            >
                <img src="/Art.svg" width="300" height="300" alt="Paint palette" />
            </ParallaxLayer>
            <ParallaxLayer
                offset={3.7}
                speed={1.5}
            >
                <p>I am creative!</p>
            </ParallaxLayer>
            <ParallaxLayer
                offset={4}
                sticky={{ start: 4, end: 4.5 }}
            >
                <img src="/Game.svg" width="300" height="300" alt="Game element from Ascent and Seed You Later" />
            </ParallaxLayer>
            <ParallaxLayer
                offset={4.7}
                speed={1.5}
            >
                <p>I make games!</p>
            </ParallaxLayer>
            <ParallaxLayer
                offset={5}
                sticky={{ start: 5, end: 5.5 }}
            >
                <img src="/Questrade.svg" width="300" height="300" alt="Questrade logo" />
            </ParallaxLayer>
            <ParallaxLayer
                offset={5.7}
                speed={1.5}
            >
                <p>I work hard!</p>
            </ParallaxLayer>
            <ParallaxLayer
                offset={6.5}
            >
                <img src="/Smile.svg" width="300" height="300" alt="Kaylee Chan pixel avatar smiling" />
            </ParallaxLayer>
            <ParallaxLayer
                offset={6.5}
                speed={0.7}
            >
                <p>Thanks for reading!</p>
            </ParallaxLayer>
            <ParallaxLayer
                offset={8}
            >
                <div className="bg-dark-pink h-100 w-100 p-3 d-flex flex-column justify-content-evenly align-items-center">
                    <h1 className="mt-3">Explore my site!</h1>
                    <div className="explore-grid">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p>If you'd like to see more of my projects, check out</p>
                            <Button variant="outline-light-pink">my projects!</Button>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p>Wanna know more about me and my journey? Learn more</p>
                            <Button variant="outline-light-pink">about me!</Button>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p>How about deep dives into my thought processes? It's all documented here in</p>
                            <Button variant="outline-light-pink">my blog!</Button>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p>Want to reach out and keep in touch? Feel free to</p>
                            <Button variant="outline-light-pink">contact me!</Button>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>
        </Parallax>
    );
}

export default Home;