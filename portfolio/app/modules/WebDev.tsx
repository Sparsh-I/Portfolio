export function WebDev() {
    return (
        <div>
            <div className="relative group overflow-hidden rounded-tl-none rounded-xl shadow-lg cursor-pointer bg-gray-100">
            <a href="https://tripsitter-psi.vercel.app/" target="_blank" className="flex flex-row items-center justify-center">
                <div className="flex flex-row items-center justify-center w-60 h-20">
                <img className="w-15 object-contain" id="icon" alt="Logo icon" src="https://tripsitter-psi.vercel.app/assets/logo-tent-DAikbFeG.svg"/>
                <img className="object-contain" id="text" alt="Logo text" src="https://tripsitter-psi.vercel.app/assets/logo-text-DgxCzHNw.svg"/>
                </div>
                <div className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <p className="text-white text-lg font-bold translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
                    TripSitter
                </p>
                </div>
            </a>
            </div>
        </div>
    );
}