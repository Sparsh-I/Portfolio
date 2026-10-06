import { NavBar } from "@/app/NavBar";
import { Footer } from "@/app/Footer";

export default function TripSitter() {
    return (
        <div>
            <NavBar/>
                <div className="flex flex-col gap-10 items-center lg:items-start lg:mx-[10%] lg:pb-20 lg:pt-10">
                    <div>
                        <div className="flex flex-row items-center justify-center w-60 h-20 lg:w-100 gap-4">
                            <img className="w-15 lg:w-25 object-contain" id="icon" alt="Logo icon" src="https://tripsitter-psi.vercel.app/assets/logo-tent-DAikbFeG.svg"/>
                            <img className="object-contain" id="text" alt="Logo text" src="https://tripsitter-psi.vercel.app/assets/logo-text-DgxCzHNw.svg"/>
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
                        <p className="text-3xl font-semibold">The Progress</p>
                        <p className="text-xl">This is some example text.</p>
                    </div>
                    <div className="flex flex-col gap-5 text-justify">
                        <p className="text-3xl font-semibold">The Future</p>
                        <p className="text-xl">This is some example text.</p>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}