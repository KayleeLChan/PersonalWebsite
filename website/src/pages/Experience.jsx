import React from 'react';
import CardCarousel from '../components/cardCarousel';
import Button from 'react-bootstrap/Button';

const EXPERIENCE_IMAGES_PATH = "experienceImages"
const WORK_IMAGES_PATH = `${EXPERIENCE_IMAGES_PATH}/workImages`
const PROJECT_IMAGES_PATH = `${EXPERIENCE_IMAGES_PATH}/projectImages`
const GAME_IMAGES_PATH = `${EXPERIENCE_IMAGES_PATH}/gameImages`

function Experience() {
    const workEntries = [
        { title: "Royal Bank of Canada", start: "September 2024", end: "April 2025",
            content: "Current DevOps Developer Co-Op at RBC", imageLink: `${WORK_IMAGES_PATH}/rbc.png` },
        { title: "Konrad", start: "May 2024", end: "August 2024",
        content: "Interned as a software engineer at Konrad", imageLink: `${WORK_IMAGES_PATH}/konrad.jpg` },
        { title: "Questrade", start: "May 2023", end: "August 2023",
        content: "Interned as a web developer at Questrade", imageLink: `${WORK_IMAGES_PATH}/questrade.png` },
        { title: "Downtown Surrey Business Improvement Association", start: "May 2022", end: "August 2022",
        content: "Interned as a web designer for local businesses", imageLink: `${WORK_IMAGES_PATH}/dsbia.jpg` },
    ]

    const projectEntries = [
        { title: "Twizzy PetPal", start: "September 2023", end: "December 2023",
        content: "Pet adoption site for pet shelters and seekers (University of Toronto CSC309 Project)",
        link: "https://github.com/Twizzy-Petpal/CSC309-PetPal", imageLink: `${PROJECT_IMAGES_PATH}/Petpal.svg` },
        { title: "Shifty Tech", start: "September 2023",
        content: "Programming tool using tensors and full movement to code for Hack the North (1st Place Replit Hack Winner)",
        link: "https://devpost.com/software/shiftytech", imageLink: `${PROJECT_IMAGES_PATH}/ShiftyTech.svg` },
        { title: "BestFlow", start: "September 2022", end: "December 2022",
        content: "Chatbot diagnostic tool to analyse and visualize conversations (University of Toronto CSC207 Project)",
        link: "https://github.com/BestFloww/BestFlow", imageLink: `${PROJECT_IMAGES_PATH}/BestFlow.svg` },
    ]

    const gameEntries = [
        { title: "Chute Your Chot", start: "November 2024",
            content: "Simple web-based sorting game for the University of Toronto's Game Design and Development Club's Fall 2024 Game Jam",
            link: "https://kayleelchan.itch.io/chute-your-chot"},
        { title: "Ascent", start: "September 2023", end: "April 2024",
        content: "An enjoyable \'make-or-break relationships\' 3D, 2-Player, Co-Operative Platformer experience (University of Toronto CSC404 Project)",
        link: "https://tomas-ha.itch.io/ascent", imageLink: `${GAME_IMAGES_PATH}/ascent.png` },
        { title: "Seed You Later", start: "November 2022",
        content: "A short, cozy, and fun 2D pixel game full of charm and minigames! 3rd place winner of the University of Toronto's Game Design and Development Club's Fall 2022 Game Jam",
        link: "https://edwardhan.itch.io/seed-you-later", imageLink: `${GAME_IMAGES_PATH}/seedyoulater.png` },
        { title: "Moon's Side", start: "November 2021",
        content: "Humorous and short 3D puzzle game for the University of Toronto's Game Design and Development Club's Fall 2021 Game Jam",
        link: "https://kayleelchan.itch.io/moons-side"},
    ]

    return (
        <div className="subpage">
            <h1 className="fs-4 text-light-pink" id="work">Work Experience</h1>
            <CardCarousel entries={workEntries} />
            <Button variant="outline-light-pink" className="mt-3" href="resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Kaylee Chan's resume (opens in new tab)">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-file-earmark-person align-text-center" viewBox="0 0 16 16">
                    <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z" />
                </svg>
                View my resum&eacute;</Button>
            <h1 className="fs-4 text-light-pink mt-5" id="projects">Programming Projects</h1>
            <CardCarousel entries={projectEntries} />
            <Button variant="outline-light-pink" className="mt-3" href="https://github.com/KayleeLChan" target="_blank" rel="noopener noreferrer" aria-label="Kaylee Chan's github (opens in new tab)">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github align-text-center" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                Visit my github</Button>
            <h1 className="fs-4 text-light-pink mt-5" id="games">Game Development</h1>
            <CardCarousel entries={gameEntries} />
            <Button variant="outline-light-pink" className="mt-3" href="https://kayleelchan.itch.io/" target="_blank" rel="noopener noreferrer" aria-label="Kaylee Chan's resume (opens in new tab)">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 245.37069 220.73612" className="align-text-center"><path d="M31.99 1.365C21.287 7.72.2 31.945 0 38.298v10.516C0 62.144 12.46 73.86 23.773 73.86c13.584 0 24.902-11.258 24.903-24.62 0 13.362 10.93 24.62 24.515 24.62 13.586 0 24.165-11.258 24.165-24.62 0 13.362 11.622 24.62 25.207 24.62h.246c13.586 0 25.208-11.258 25.208-24.62 0 13.362 10.58 24.62 24.164 24.62 13.585 0 24.515-11.258 24.515-24.62 0 13.362 11.32 24.62 24.903 24.62 11.313 0 23.773-11.714 23.773-25.046V38.298c-.2-6.354-21.287-30.58-31.988-36.933C180.118.197 157.056-.005 122.685 0c-34.37.003-81.228.54-90.697 1.365zm65.194 66.217a28.025 28.025 0 0 1-4.78 6.155c-5.128 5.014-12.157 8.122-19.906 8.122a28.482 28.482 0 0 1-19.948-8.126c-1.858-1.82-3.27-3.766-4.563-6.032l-.006.004c-1.292 2.27-3.092 4.215-4.954 6.037a28.5 28.5 0 0 1-19.948 8.12c-.934 0-1.906-.258-2.692-.528-1.092 11.372-1.553 22.24-1.716 30.164l-.002.045c-.02 4.024-.04 7.333-.06 11.93.21 23.86-2.363 77.334 10.52 90.473 19.964 4.655 56.7 6.775 93.555 6.788h.006c36.854-.013 73.59-2.133 93.554-6.788 12.883-13.14 10.31-66.614 10.52-90.474-.022-4.596-.04-7.905-.06-11.93l-.003-.045c-.162-7.926-.623-18.793-1.715-30.165-.786.27-1.757.528-2.692.528a28.5 28.5 0 0 1-19.948-8.12c-1.862-1.822-3.662-3.766-4.955-6.037l-.006-.004c-1.294 2.266-2.705 4.213-4.563 6.032a28.48 28.48 0 0 1-19.947 8.125c-7.748 0-14.778-3.11-19.906-8.123a28.025 28.025 0 0 1-4.78-6.155 27.99 27.99 0 0 1-4.736 6.155 28.49 28.49 0 0 1-19.95 8.124c-.27 0-.54-.012-.81-.02h-.007c-.27.008-.54.02-.813.02a28.49 28.49 0 0 1-19.95-8.123 27.992 27.992 0 0 1-4.736-6.155zm-20.486 26.49l-.002.01h.015c8.113.017 15.32 0 24.25 9.746 7.028-.737 14.372-1.105 21.722-1.094h.006c7.35-.01 14.694.357 21.723 1.094 8.93-9.747 16.137-9.73 24.25-9.746h.014l-.002-.01c3.833 0 19.166 0 29.85 30.007L210 165.244c8.504 30.624-2.723 31.373-16.727 31.4-20.768-.773-32.267-15.855-32.267-30.935-11.496 1.884-24.907 2.826-38.318 2.827h-.006c-13.412 0-26.823-.943-38.318-2.827 0 15.08-11.5 30.162-32.267 30.935-14.004-.027-25.23-.775-16.726-31.4L46.85 124.08c10.684-30.007 26.017-30.007 29.85-30.007zm45.985 23.582v.006c-.02.02-21.863 20.08-25.79 27.215l14.304-.573v12.474c0 .584 5.74.346 11.486.08h.006c5.744.266 11.485.504 11.485-.08v-12.474l14.304.573c-3.928-7.135-25.79-27.215-25.79-27.215v-.006l-.003.002z" color="currentColor" fill="currentColor" /></svg>
                Check out my itch.io</Button>
        </div>
    );
}

export default Experience;