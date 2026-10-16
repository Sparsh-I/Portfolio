import { NavBar } from "@/app/NavBar";
import { Footer } from "@/app/Footer";
import { BrowserFrame } from "@/app/BrowserFrame";

import { SiGithub } from "react-icons/si";

export default function MtStringmore() {
    return (
        <div>
            <NavBar/>
                <div className="flex flex-col gap-10 lg: mx-[5%] lg:pb-20 lg:pt-10">
                    <div className="flex flex-row justify-between items-center">
                        <a href="https://permafrostedd.itch.io/mt-stringmore" target="_blank" rel="noopener noreferrer">
                            <div className="flex flex-row items-center justify-center mx-[15%] w-60 h-20 lg:w-100 gap-4">
                                <img alt="Logo" src="https://img.itch.zone/aW1nLzIyMzQzODU4LnBuZw==/original/KxXcaD.png"/>
                            </div>
                        </a>
                        <a href="https://github.com/AdenC123/MtStringmore" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                            <SiGithub className="inline-block text-5xl fill-current text-white hover:text-[#769431]"/>
                        </a>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between gap-10 items-center">
                        <div className="flex flex-col gap-5 text-justify">
                            <p className="text-3xl font-semibold">The Idea</p>
                            <div className="text-lg flex flex-col gap-5">
                                <p>
                                    Mt. Stringmore started out as a simple concept: a 2D, one-button auto runner. The
                                    character runs forward on its own, and the player has a single button to deal with
                                    whatever the mountain throws in the way. With only one input, everything comes down
                                    to timing and use of the different game mechanics that are implemented incrementally
                                    in each new level, which made the idea easy to pick up but still left plenty of room
                                    to, make it challenging.
                                </p>
                                <p>
                                    At first it was little more than that one idea, but it grew well beyond the
                                    original pitch. Over the course of the project it turned into a complete game with
                                    levels, obstacles, art, and music, while still keeping the one-button simplicity it 
                                    began with.
                                </p>
                            </div>
                        </div>
                        <BrowserFrame link="https://img.itch.zone/aW1hZ2UvMzA5NDU1OC8yMjM0MjAyMy5qcGc=/original/nXZXN0.jpg"/>
                    </div>
                    <div className="flex flex-col lg:flex-row-reverse justify-between gap-10 items-center">
                        <div className="flex flex-col gap-5 text-justify">
                                <p className="text-3xl font-semibold">The Process</p>
                            <div className="text-lg flex flex-col gap-5">
                                <p>
                                    Mt. Stringmore was built by a team in the UBC Game Dev Club and was a project that
                                    ran for around a year. I worked on it as a programmer and the primary level designer 
                                    alongside other programmers, artists and musicians, using Unity2D, Krita and Ableton 
                                    to bring it together.
                                </p>
                                <p>
                                    During the school year the team met every week and ran the project in an agile
                                    style, using a kanban board to track what needed to be done, what was in progress
                                    and what was finished. Each meeting also included a round table where everyone
                                    showed what they had accomplished over the past week, which kept the whole team
                                    up to date and made it easy to spot problems and adjust priorities early.
                                </p>
                            </div>
                        </div>
                        <BrowserFrame link="https://img.itch.zone/aW1hZ2UvMzA5NDU1OC8yMjM0MjAyNi5qcGc=/original/DjVdBL.jpg"/>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between gap-10 items-center">
                        <div className="flex flex-col gap-5 text-justify">
                            <p className="text-3xl font-semibold">The Final Product</p>
                            <div className="text-lg flex flex-col gap-5">
                                <p>
                                    The finished game is a polished 2D one-button auto runner with 4 levels each in its
                                    own unique environment, a myriad obstacles, art and animation sprites and backgrounds, 
                                    different music for each level, and an overarching story, complete with cutscenes. 
                                    What started as a quick idea ended up as something the whole team was proud to put out.
                                </p>
                                <p>
                                    The game is available to play for free on itch.io, and the full source code is on GitHub.
                                    Working in a large team taught me how to manage multiple branches on GitHub at the same
                                    time and the value of making small, consistent progress on my tasks. The project also
                                    gave me a chance to dig into Unity's customisable editors and build specialised tools
                                    for the game.
                                </p>
                            </div>
                        </div>
                        <BrowserFrame link="/MtStringmoreScreen.png"/>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}