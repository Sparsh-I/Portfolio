import { NavBar } from "@/app/NavBar";
import { Footer } from "@/app/Footer";
import { BrowserFrame } from "@/app/BrowserFrame";

export default function TripSitter() {
    return (
        <div>
            <NavBar/>
                <div className="flex flex-col gap-10 items-center lg:items-start mx-[5%] lg:pb-20 lg:pt-10">
                    <div>
                        <div className="flex flex-row items-center justify-center mx-[15%] w-60 h-20 lg:w-100 gap-4">
                            <img className="w-15 lg:w-25 object-contain" id="icon" alt="Logo icon" src="https://tripsitter-psi.vercel.app/assets/logo-tent-DAikbFeG.svg"/>
                            <img className="object-contain" id="text" alt="Logo text" src="https://tripsitter-psi.vercel.app/assets/logo-text-DgxCzHNw.svg"/>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between gap-10 items-center">
                        <div className="flex flex-col gap-5 text-justify">
                            <p className="text-3xl font-semibold">The Idea</p>
                            <div className="text-xl flex flex-col gap-5">
                                <p>
                                    TripSitter is a web application that is currently in development, and once completed will act as a way to log, manage and share trips
                                    with all the other trip members. This will allow for easier collaboration about trip details such as reservations, dates, check in times
                                    and other relevant notes.
                                </p>
                                <p>
                                    There will also be a way to view all trips taken on a map, and just have a log of the previous trips that the
                                    user has taken, to act as a sort of journal of their trips. Eventually there will be a small social media style feed to view other connections'
                                    trips, if they so chose to display that to the public.
                                </p>
                            </div>
                        </div>
                        <div>
                            <BrowserFrame/>
                            <img className="w-full h-full rounded-b-2xl text-right" src="/TripSitterLogin.png"/>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row-reverse justify-between gap-10 items-center">
                        <div className="flex flex-col gap-5 text-justify">
                            <div className="text-xl flex flex-col gap-5">
                                <p className="text-3xl font-semibold">The Process</p>
                                <p className="text-xl">This is some example text.</p>
                            </div>
                        </div>
                        <div>
                            <BrowserFrame/>
                            <img className="w-full h-full rounded-b-2xl align-end" src="/TripSitterSupabase.png"/>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between gap-10 items-center">
                        <div className="flex flex-col gap-5 text-justify">
                            <div className="text-xl flex flex-col gap-5">
                                <p className="text-3xl font-semibold">The Progress</p>
                                <p className="text-xl">This is some example text.</p>
                            </div>
                        </div>
                        <div>
                            <BrowserFrame/>
                            <img className="w-full h-full rounded-b-2xl align-end" src="/TripSitterHome.png"/>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row-reverse justify-between gap-10 items-center">
                        <div className="flex flex-col gap-5 text-justify">
                            <div className="text-xl flex flex-col gap-5">
                                <p className="text-3xl font-semibold">The Future</p>
                                <p className="text-xl">This is some example text.</p>
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