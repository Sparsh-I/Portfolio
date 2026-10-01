import * as Icons from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";


export function Experience() {
    return (
        <div>
            <div className="border-5 border-gray-600 bg-gray-600 text-center rounded-t-xl w-30">
                Experience
            </div>
            <div className="border-5 border-gray-600 p-4 rounded-tl-none rounded-2xl text-center">
                <p>Sep '25 - Aug '26</p>
                <p><strong>Full-stack Developer</strong></p>
                <p><em>Insurance Corporation of British Columbia</em></p>
                <ExperienceConnector/>
                <p>May '25 - Aug '25</p>
                <p><strong>Programming Intern</strong></p>
                <p><em>Yatabase</em></p>
            </div>
        </div>
    );
}

function ExperienceConnector() {
    return (
        <div className="flex flex-col items-center h-20 p-4">
            <div className="w-3 h-3 rounded-full bg-purple-300" />
            <div className="w-0.5 flex-1 bg-purple-300" />
            <div className="w-3 h-3 rounded-full bg-purple-300" />
        </div>
    );
}

const frontend = [
    { Icon: Icons.SiReact, name: "React", color: "#61DAFB" },
    { Icon: Icons.SiVite, name: "Vite", color: "#646CFF" },
    { Icon: Icons.SiHtml5, name: "HTML", color: "#E34F26" },
    { Icon: Icons.SiCss, name: "CSS", color: "#1572B6" },
    { Icon: Icons.SiNextdotjs, name: "Next.js", color: "#e4e3e3" },
    { Icon: Icons.SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
];

const backend = [
    { Icon: Icons.SiTypescript, name: "TypeScript", color: "#3178C6" },
    { Icon: Icons.SiNodedotjs, name: "Node.js", color: "#5FA04E" },
    { Icon: Icons.SiSharp, name: "C#", color: "#512BD4" },
    { Icon: FaJava, name: "Java", color: "#ED8B00" },
    { Icon: Icons.SiPython, name: "Python", color: "#3776AB" },
    { Icon: Icons.SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { Icon: Icons.SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
];

const tools = [
    { Icon: Icons.SiGit, name: "Git", color: "#F1502F" },
];

const software = [
    { Icon: Icons.SiUnity, name: "Unity", color: "#FFFFFF" },
    { Icon: VscVscode, name: "VS Code", color: "#007ACC" },
    { Icon: DiIllustrator, name: "Illustrator", color: "#FF9A00" },
    { Icon: DiPhotoshop, name: "Photoshop", color: "#31A8FF" },
    { Icon: Icons.SiFigma, name: "Python", color: "#F24E1E" },
    { Icon: Icons.SiGithub, name: "GitHub", color: "#FFFFFF" },
];

export function Technologies() {
    return (
        <div>
            <div className="border-5 border-gray-600 bg-gray-600 text-center rounded-t-xl w-35">
                Technologies
            </div>
            <div className="border-5 flex flex-col gap-5 border-gray-600 p-4 rounded-tl-none rounded-2xl">
                <div>
                    <div className="text-purple-300 pb-4">FRONTEND</div>
                    <div className="flex flex-row flex-wrap justify-center gap-2 text-3xl">
                        {frontend.map(({ Icon, name, color }) => (
                            <Icon key={name} title={name} color={color} />
                        ))}
                    </div>
                </div>
                <div>
                    <div className="text-purple-300 pb-4">BACKEND</div>
                    <div className="flex flex-row flex-wrap justify-center gap-2 text-3xl">
                        {backend.map(({ Icon, name, color }) => (
                            <Icon key={name} title={name} color={color} />
                        ))}
                    </div>
                </div>
                <div>
                    <div className="text-purple-300 pb-4">TOOLS</div>
                    <div className="flex flex-row flex-wrap justify-center gap-2 text-3xl">
                        {tools.map(({ Icon, name, color }) => (
                            <Icon key={name} title={name} color={color} />
                        ))}
                    </div>
                </div>
                <div>
                    <div className="text-purple-300 pb-4">SOFTWARE</div>
                    <div className="flex flex-row flex-wrap justify-center gap-2 text-3xl">
                        {software.map(({ Icon, name, color }) => (
                            <Icon key={name} title={name} color={color} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function WebDev() {
    return (
        <div>
            <div className="border-5 border-gray-600 bg-gray-600 w-57 text-center rounded-t-xl">
                Web Development Projects
            </div>
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

export function GameDev() {
    return (
        <div>
          <div className="border-5 border-gray-600 bg-gray-600 w-60 text-center rounded-t-xl">
            Game Development Projects
          </div>
          <div className="grid grid-cols-2 border-5 border-gray-600 rounded-tl-none rounded-2xl text-center flex place-items-center gap-5 p-5">
              <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer h-35 flex items-center pb-5">
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
            <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer h-35 flex items-center">
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
            <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer h-35 flex items-center">
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
            <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer h-35 flex items-center">
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

export function Contact() {
    return (
        <div>
            <div className="border-5 border-gray-600 bg-gray-600 text-center rounded-t-xl w-30">
                Contact
            </div>
            <div className="border-5 border-gray-600 p-4 rounded-tl-none rounded-2xl text-center">
                <p>LinkedIn</p>
                <p>Email</p>
                <p></p>
            </div>
        </div>
    );
}

export function GitHub() {
    return (
        <div className="flex flex-row">
            <div className="bg-gray-600 border-5 border-gray-600 text-center rounded-r-xl [writing-mode:vertical-rl] rotate-180">
                GitHub
            </div>
            <div className="relative group overflow-hidden rounded-l-none rounded-r-xl shadow-lg cursor-pointer bg-white p-3 flex justify-center w-full">
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