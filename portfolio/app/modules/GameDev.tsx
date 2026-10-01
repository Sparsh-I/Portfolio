export function GameDev() {
    return (
        <div>
          <div className="border-2 w-60 text-center rounded-t-xl">
            Game Development Projects
          </div>
          <div className="grid grid-cols-2 border-2 text-center flex items-center gap-5 p-5">
              <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer">
              <a href="https://permafrosted.itch.io/mt-stringmore/" target="_blank">
                <img 
                  src="https://img.itch.zone/aW1nLzI0ODYxMDA1LnBuZw==/315x250%23c/Wu0ULm.png"
                />
                <div className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <p className="text-white text-lg font-bold translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
                    Mt Stringmore
                  </p>
                </div>
              </a>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer">
              <a href="https://sparsh-i.itch.io/glade/" target="_blank">
                <img 
                  src="https://img.itch.zone/aW1nLzIxNTQwMjk5LnBuZw==/315x250%23c/tZlo0c.png"
                />
                <div className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <p className="text-white text-lg font-bold translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
                    Glade
                  </p>
                </div>
              </a>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer">
              <a href="https://sparsh-i.itch.io/chirrup/" target="_blank">
                <img 
                  src="https://img.itch.zone/aW1nLzIxMTUxNjMxLnBuZw==/315x250%23c/1XSmUV.png"
                />
                <div className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <p className="text-white text-lg font-bold translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
                    Chirrup
                  </p>
                </div>
              </a>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer h-31">
              <a href="https://sparsh-i.itch.io/" target="_blank">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/3388/3388785.png"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <p className="text-white text-lg font-bold translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
                    View All
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
    );
}