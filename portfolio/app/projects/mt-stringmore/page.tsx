import { NavBar } from "@/app/NavBar";
import { Footer } from "@/app/Footer";

export default function MtStringmore() {
    return (
        <div>
            <NavBar/>
                <div className="flex flex-col gap-10 items-center lg:items-start lg:mx-[10%]  lg:pb-20 lg:pt-10">
                    <div>
                        <div className="flex flex-row items-center justify-center w-70 lg:w-100">
                            <img alt="Logo" src="https://img.itch.zone/aW1nLzIyMzQzODU4LnBuZw==/original/KxXcaD.png"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 text-justify">
                        <p className="text-3xl font-semibold">The Idea</p>
                        <p className="text-xl">This is some example text.</p>
                    </div>
                    <div className="flex flex-col gap-5 text-justify">
                        <p className="text-3xl font-semibold">The Process</p>
                        <p className="text-xl">This is some example text.</p>
                    </div>
                    <div className="flex flex-col gap-5 text-justify">
                        <p className="text-3xl font-semibold">The Final Product</p>
                        <p className="text-xl">This is some example text.</p>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}