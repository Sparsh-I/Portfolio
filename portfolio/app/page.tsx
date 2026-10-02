import Image from "next/image";
import * as Modules from "./grid/modules";
import { NavBar } from "./NavBar";

export default function Home() {
  const tripSitterTechnologies = [
    "TypeScript",
    "Vite",
    "React",
    "HTML/CSS",
    "PostgreSQL",
    "Figma"
  ]
  
  const mtStringmoreTechnologies = [
    "Unity2D",
    "C#",
    "Adobe Illustrator",
    "Notion",
  ]

  return (
    <div>
      <NavBar/>
      <div id="home"></div>
      <div className="text-center text-2xl lg:text-4xl py-15 px-5 lg:py-20 lg:px-50">
        Hello, I'm <strong>Sparsh Inanda</strong>, a full-stack developer that also builds games.
      </div>

      <div>
        <div className="text-4xl font-bold text-center py-10" id="about">
          About Me
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-center align-center px-5 lg:px-20">
          <div>
            <img src="/SparshInanda.png" alt="Sparsh Inanda" className="w-64 h-64 rounded-full object-cover"/>
          </div>
          <div className="w-200 py-5">
            <p className="text-xl py-5">
              I'm a Computer Science and Statistics major in my final year at the University of British Columbia. 
              I have a passion for web development and game development, and most recently worked as a full-stack developer at <a className="underline" href="https://icbc.com">ICBC</a>.
            </p>
            <p className="text-xl py-5">
              I enjoy building applications that are both functional and visually appealing, and I'm always looking for new challenges to improve my skills and learn new technologies.
            </p>
          </div>
        </div>

        <div className="text-2xl cursor-pointer underline text-center py-5">
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            View My Resume
          </a>
        </div>

        <div className="flex justify-center py-10">
          <div className="relative group overflow-hiddenshadow-lg cursor-pointer bg-white p-3 flex justify-center w-180 rounded-2xl">
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

        <div className="text-2xl cursor-pointer underline text-center py-5">
          <a href="https://www.linkedin.com/in/sparsh-inanda/" target="_blank" rel="noopener noreferrer">
            Visit My LinkedIn
          </a>
        </div>
      </div>

      <div>
        <div className="text-4xl font-bold text-center py-10" id="projects">
          Featured Projects
        </div>

        <div className="flex flex-row justify-between items-center align-center px-5 lg:px-20">
          <div>
            <div className="text-5xl font-semibold">
              TripSitter
            </div>
            <div className="w-150 py-5">
              <p className="text-xl py-5">
                TripSitter is an in-development web application that allows users to log, manage, and share their travel 
                itineraries with other members of the trip. It will also provide a central platform for users to store their
                reservations, tickets, and other travel documents.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {tripSitterTechnologies.map((tech) => (
                  <div
                    key={tech}
                    className="flex justify-center items-center text-sm px-3 py-1 rounded-lg font-medium bg-gray-800"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-175">
            <img src="/TripSitterWindow.png" alt="TripSitter" className="mx-auto my-5 rounded-2xl"/>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center align-center px-5 lg:px-20">
          <div>
            <div className="text-5xl font-semibold">
              Mt Stringmore
            </div>
            <div className="w-150 py-5">
              <p className="text-xl py-5">
                Mt Stringmore is a 2D autorunning platformer developed by Team 8 for the UBC Game Development Club. The game 
                features unique levels, each adding a new mechanics to the gameplay, following a story of an energetic
                marshmallow and a ball of yarn on a journey to scale Mt Stringmore.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {mtStringmoreTechnologies.map((tech) => (
                  <div
                    key={tech}
                    className="flex justify-center items-center text-sm px-3 py-1 rounded-lg font-medium bg-gray-800"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <div>
                
              </div>
            </div>
          </div>
          <div className="w-175">
            <img src="/MtStringmoreScreen.png" alt="Mt Stringmore" className="mx-auto my-5 rounded-2xl"/>
          </div>
        </div>
      </div>
    </div>
  );
}