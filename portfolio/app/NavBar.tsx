export function NavBar() {
    return (
        <div className="flex justify-around lg:justify-between px-[3%] py-[3%] sticky top-0 bg-[#141414] text-white z-50 h-20">
            <h1 className="text-3xl hidden lg:block">
                Sparsh Inanda
            </h1>
            <div className="flex justify-between gap-7 lg:gap-10">
                <a href="#home" className="text-2xl cursor-pointer">home</a>
                <a href="#about" className="text-2xl cursor-pointer">about</a>
                <a href="#projects" className="text-2xl cursor-pointer">projects</a>
            </div>
        </div>
    )
}