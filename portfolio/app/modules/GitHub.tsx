export function GitHub() {
    return (
        <div>
            <div className="border-2 w-20 text-center rounded-t-xl">
            GitHub
            </div>
            <div className="relative group overflow-hidden rounded-tl-none rounded-xl shadow-lg cursor-pointer bg-gray-100">
                <a href="https://github.com/Sparsh-I" target="_blank">
                    <img src="https://ghchart.rshah.org/7955FF/Sparsh-I" alt="Sparsh-I's Github chart" />
                    <div className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <p className="text-white text-lg font-bold translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
                        Visit my repositories
                        </p>
                </div>
                </a>
            </div>
        </div>
    );
}