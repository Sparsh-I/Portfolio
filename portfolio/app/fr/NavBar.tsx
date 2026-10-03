export function NavBar() {
    return (
        <div className="flex justify-around items-center lg:justify-between px-[3%] py-[1%] sticky top-0 bg-[#141414] text-white z-50 h-20">
            <h1 className="text-3xl hidden lg:block">
                Sparsh Inanda
            </h1>
            <div className="flex flex-row gap-10 items-center">
                <div className="flex justify-between gap-7 lg:gap-10">
                    <a href="#home" className="text-2xl cursor-pointer">accueil</a>
                    <a href="#about" className="text-2xl cursor-pointer">à propos</a>
                    <a href="#projects" className="text-2xl cursor-pointer">projets</a>
                </div>
                <div>
                    <a href="/"
                       className="bg-violet-300 text-black py-2 px-3 rounded-2xl hover:bg-violet-400 hover:text-white cursor-pointer">
                        switch to english?
                    </a>
                </div>
            </div>
        </div>
    )
}