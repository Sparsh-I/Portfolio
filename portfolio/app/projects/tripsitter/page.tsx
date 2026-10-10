import { NavBar } from "@/app/NavBar";
import { Footer } from "@/app/Footer";
import { BrowserFrame } from "@/app/BrowserFrame";

import { SiGithub } from "react-icons/si";

export default function TripSitter() {
    return (
        <div>
            <NavBar/>
                <div className="flex flex-col gap-10 lg: mx-[5%] lg:pb-20 lg:pt-10">
                    <div className="flex flex-row justify-between items-center">
                        <a href="https://tripsitter-psi.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="flex flex-row items-center justify-center mx-[15%] w-60 h-20 lg:w-100 gap-4">
                                <img className="w-15 lg:w-25 object-contain" id="icon" alt="Logo icon" src="https://tripsitter-psi.vercel.app/assets/logo-tent-DAikbFeG.svg"/>
                                <img className="object-contain" id="text" alt="Logo text" src="https://tripsitter-psi.vercel.app/assets/logo-text-DgxCzHNw.svg"/>
                            </div>
                        </a>
                        <a href="https://github.com/Sparsh-I/TripSitter/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                            <SiGithub className="inline-block text-5xl fill-current text-white hover:text-[#f47a1e]"/>
                        </a>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between gap-10 items-center">
                        <div className="flex flex-col gap-5 text-justify">
                            <p className="text-3xl font-semibold">The Idea</p>
                            <div className="text-lg flex flex-col gap-5">
                                <p>
                                    TripSitter is a web application that is currently in development, and once completed
                                    will act as a way to log, manage and share trips with all the other trip members. 
                                    This will allow for easier collaboration about trip details such as reservations, 
                                    dates, check in times and other relevant notes.
                                </p>
                                <p>
                                    There will also be a way to view all trips taken on a map, and just have a log of 
                                    the previous trips that the user has taken, to act as a sort of journal of their 
                                    trips. Eventually there will be a small social media style feed to view other 
                                    connections' trips, if they so chose to display that to the public.
                                </p>
                            </div>
                        </div>
                        <BrowserFrame link="/TripSitterLogin.png"/>
                    </div>
                    <div className="flex flex-col lg:flex-row-reverse justify-between gap-10 items-center">
                        <div className="flex flex-col gap-5 text-justify">
                                <p className="text-3xl font-semibold">The Process</p>
                            <div className="text-lg flex flex-col gap-5">
                                <p>
                                    A long, somewhat disorganised, bikepacking trip and my search for a fulfulling 
                                    web development project spurred the idea to create this application using TypeScript,
                                    which during the start of this project, I had been getting a lot of exposure to at my 
                                    place of work. The initial phase of the project consisted of using and getting familiar 
                                    with Figma to create protoypes and designs for the site and each planned page. 
                                </p>
                                <p>
                                    After creating getting my design ideas down on Figma, I decided to create a React app
                                    with Vite, as they were technologies that I was never quite given the chance to play 
                                    around with and thought this would be the best way to get some real experience. I
                                    also then decided to host the site on Vercel which I had been hearing a lot more of
                                    and wanted to get acquainted with the platform before I fell too far behind.
                                </p>
                            </div>
                        </div>
                        <BrowserFrame link="/TripSitterSupabase.png"/>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between gap-10 items-center">
                        <div className="flex flex-col gap-5 text-justify">
                            <p className="text-3xl font-semibold">The Progress</p>
                            <div className="text-lg flex flex-col gap-5">
                                <p>
                                    This is some example text.
                                </p>
                            </div>
                        </div>
                        <BrowserFrame link="/TripSitterHome.png"/>
                    </div>
                    <div className="flex flex-col lg:flex-row-reverse justify-between gap-10 items-center">
                        <div className="flex flex-col gap-5 text-justify">
                                <p className="text-3xl font-semibold">The Future</p>
                            <div className="text-lg flex flex-col gap-5">
                                <p>
                                    This is some example text.
                                </p>
                            </div>
                        </div>
                        <div>
                            {/* <BrowserFrame/>
                            <img className="w-full h-full rounded-b-2xl align-end" src="/TripSitterSupabase.png"/> */}
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}