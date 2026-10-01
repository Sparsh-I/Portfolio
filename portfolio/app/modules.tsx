"use client";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";
import { useState, useEffect } from "react";

export function Experience() {
    return (
        <div>
            <div className="border-3 border-gray-600 bg-gray-600 text-center rounded-t-xl w-30">
                Experience
            </div>
            <div className="border-3 border-gray-600 p-4 rounded-tl-none rounded-2xl text-center">
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
        <div className="flex flex-col items-center h-35 p-4">
            <div className="w-3 h-3 rounded-full bg-purple-300" />
            <div className="w-0.5 flex-1 bg-purple-300" />
            <div className="w-3 h-3 rounded-full bg-purple-300" />
        </div>
    );
}

const frontend = [
    { Icon: SiIcons.SiReact, name: "React", color: "#61DAFB" },
    { Icon: SiIcons.SiVite, name: "Vite", color: "#646CFF" },
    { Icon: SiIcons.SiHtml5, name: "HTML", color: "#E34F26" },
    { Icon: SiIcons.SiCss, name: "CSS", color: "#1572B6" },
    { Icon: SiIcons.SiNextdotjs, name: "Next.js", color: "#e4e3e3" },
    { Icon: SiIcons.SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
];

const backend = [
    { Icon: SiIcons.SiTypescript, name: "TypeScript", color: "#3178C6" },
    { Icon: SiIcons.SiSharp, name: "C#", color: "#512BD4" },
    { Icon: FaIcons.FaJava, name: "Java", color: "#ED8B00" },
    { Icon: SiIcons.SiPython, name: "Python", color: "#3776AB" },
    { Icon: SiIcons.SiNodedotjs, name: "Node.js", color: "#5FA04E" },
    { Icon: SiIcons.SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { Icon: SiIcons.SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
];

const tools = [
    { Icon: SiIcons.SiGit, name: "Git", color: "#F1502F" },
];

const software = [
    { Icon: SiIcons.SiUnity, name: "Unity", color: "#FFFFFF" },
    { Icon: VscVscode, name: "VS Code", color: "#007ACC" },
    { Icon: DiIllustrator, name: "Illustrator", color: "#FF9A00" },
    { Icon: DiPhotoshop, name: "Photoshop", color: "#31A8FF" },
    { Icon: SiIcons.SiFigma, name: "Python", color: "#F24E1E" },
    { Icon: SiIcons.SiGithub, name: "GitHub", color: "#FFFFFF" },
];

export function Technologies() {
    return (
        <div>
            <div className="border-3 border-gray-600 bg-gray-600 text-center rounded-t-xl w-35">
                Technologies
            </div>
            <div className="border-3 flex flex-col gap-5 border-gray-600 p-4 rounded-tl-none rounded-2xl">
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
            <div className="border-3 border-gray-600 bg-gray-600 w-60 text-center rounded-t-xl">
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
          <div className="border-3 border-gray-600 bg-gray-600 w-60 text-center rounded-t-xl">
            Game Development Projects
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 border-3 border-gray-600 rounded-b-xl lg:rounded-tl-none lg:rounded-xl text-center flex place-items-center gap-5 p-5">
              <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer h-35 flex items-end">
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
            <div className="border-3 border-gray-600 bg-gray-600 text-center rounded-t-xl w-30">
                Contact
            </div>
            <div className="border-3 border-gray-600 p-4 rounded-tl-none rounded-2xl text-center flex flex-row text-3xl justify-evenly">
                <a href="https://linkedin.com/in/sparsh-inanda/" target="_blank"><FaIcons.FaLinkedin/></a>
                <a href="https://github.com//" target="_blank"><SiIcons.SiGithub/></a>
                <a href="mailto:sparsh.poonacha@gmail.com"><FaIcons.FaEnvelope/></a>
            </div>
        </div>
    );
}

export function Resume() {
    return (
        <div>
            <div className="border-3 border-gray-600 bg-gray-600 text-center rounded-t-xl w-30">
                Resume
            </div>
            <div className="relative group overflow-hidden rounded-tl-none rounded-xl shadow-lg cursor-pointer bg-gray-100">
                <div className="flex flex-row items-center justify-center w-60 h-20">
                    <div>Resume</div>
                </div>
                <a href="https://drive.google.com/file/d/1bsY8WhKnmULcgq-eeyv02qJ3pk-XflLi/view?usp=sharing" target="_blank" className="flex flex-row items-center justify-center">
                    <div className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <p className="text-white text-lg font-bold translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
                            See my resume
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
}


export function GitHub() {
    return (
        <div className="flex flex-row">
            <div className="bg-gray-600 border-3 border-gray-600 text-center rounded-r-xl [writing-mode:vertical-rl] rotate-180">
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

const formatOptions: Intl.DateTimeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
};

export function Time() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id); // cleanup on unmount
  }, []);

  const vancouverTime = now
    ? now.toLocaleTimeString("en-US", { ...formatOptions, timeZone: "America/Vancouver" })
    : "Loading...";

  // Omitting timeZone uses the visitor's own time zone
  const localTime = now
    ? now.toLocaleTimeString("en-US", formatOptions)
    : "Loading...";

  return (
    <div className="flex flex-row-reverse">
        <div className="bg-gray-600 border-3 border-gray-600 text-center rounded-r-xl [writing-mode:vertical-rl]">
            Time
        </div>
        <div className="border-3 border-gray-600 p-4 rounded-l-xl text-center flex justify-center w-full gap-5">
            <div>
                <h3>In Vancouver, BC</h3>
                <span>{vancouverTime}</span>
            </div>
            <div>
                <h3>Where you are</h3>
                <span>{localTime}</span>
            </div>
        </div>
    </div>
  );
}