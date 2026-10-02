import Image from "next/image";
import * as Modules from "./grid/modules";
import { NavBar } from "./NavBar";
import * as SiIcons from "react-icons/si";

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

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  liveUrl: string;
  playLabel: string;
  githubUrl?: string;
  colour?: string;
};

const featuredProjects: Project[] = [
  {
    title: "TripSitter",
    description: "TripSitter is an in-development web application that allows users to log, manage, and share their travel itineraries with other members of the trip.",
    technologies: ["TypeScript", "Vite", "React", "HTML/CSS", "PostgreSQL", "Figma"],
    image: "/TripSitterWindow.png",
    imageAlt: "TripSitter",
    liveUrl: "https://tripsitter-psi.vercel.app/",
    playLabel: "Visit TripSitter",
    githubUrl: "https://github.com/Sparsh-I/tripsitter",
    colour: "blue"
  },
  {
    title: "Mt Stringmore",
    description: "Mt Stringmore is a 2D autorunning platformer developed by Team 8 for the UBC Game Development Club.",
    technologies: ["Unity2D", "C#", "Adobe Illustrator", "Notion"],
    image: "/MtStringmoreScreen.png",
    imageAlt: "Mt Stringmore",
    liveUrl: "https://permafrosted.itch.io/mt-stringmore/",
    playLabel: "Play Mt Stringmore",
    githubUrl: "https://github.com/AdenC123/MtStringmore",
    colour: "lime"
  }
];

const additionalProjects: Project[] = [
  {
    title: "Glade",
    description: "A rule-changing, 3D puzzle game developed for Major Jam 7: Wild.",
    technologies: ["Unity3D", "C#"],
    image: "https://img.itch.zone/aW1nLzIxNTQwMjk5LnBuZw==/315x250%23c/tZlo0c.png",
    imageAlt: "Glade",
    liveUrl: "https://sparsh-i.itch.io/glade/",
    playLabel: "Play Glade",
    githubUrl: "https://github.com/Sparsh-I/major-jam-7-wild",
    colour: "emerald",
  },
  {
    title: "Chirrup",
    description: "A birds themed rhythm game developed for Mini Jam 184: Birds.",
    technologies: ["Unity2D", "C#", "LibreSprite"],
    image: "https://img.itch.zone/aW1nLzIxMTUxNjMxLnBuZw==/315x250%23c/1XSmUV.png",
    imageAlt: "Chirrup",
    liveUrl: "https://sparsh-i.itch.io/chirrup/",
    playLabel: "Play Chirrup",
    githubUrl: "https://github.com/Sparsh-I/mini-jam-184-birds",
    colour: "lime"
  },
  {
    title: "View All My Games",
    description: "Check out all my games on itch.io!",
    technologies: [],
    image: "https://cdn-icons-png.flaticon.com/512/3388/3388785.png",
    imageAlt: "View All Games",
    liveUrl: "https://sparsh-i.itch.io/",
    playLabel: "View All Games",
  },
];
  return (
    <div>
      <NavBar/>
      <div id="home"></div>
      <div className="h-dvh w-full text-center text-gray-500 font-semibold text-2xl lg:text-6xl flex flex-col gap-20 py-50 px-50 leading-relaxed align-center bg-[url('/background.jpg')] bg-cover bg-center">
        <p>Hello, I'm <strong className="text-purple-300"> Sparsh Inanda</strong>, a full-stack developer that also builds games.</p>
        <div className="flex justify-center gap-20 py-10 text-lg lg:text-xl">
          <a className="bg-white text-[#0077B5] font-bold py-2 px-4 rounded-xl hover:bg-[#0077B5] hover:text-white hover:cursor-pointer"
             href="https://www.linkedin.com/in/sparsh-inanda/" target="_blank" rel="noopener noreferrer">
            Visit My LinkedIn
          </a>
          <a className="bg-purple-300 text-black py-2 px-4 rounded-xl hover:bg-purple-400 hover:cursor-pointer"
             href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            View My Resume
          </a>
        </div>
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
      </div>

      <div>
        <div className="text-4xl font-bold text-center py-10" id="projects">
          Featured Projects
        </div>

         <div className="flex flex-col justify-between items-center align-center gap-10 px-5 lg:px-20">
          {featuredProjects.map((project) => (
            <div key={project.title} className="flex flex-row-reverse items-center align-center gap-5 px-5 lg:px-20">
              <div className="relative group overflow-hiddenshadow-lg cursor-pointer bg-white flex justify-center rounded-2xl">
                <a href={project.liveUrl} target="_blank">
                  <img src={project.image} alt={project.title} className="rounded-2xl"/>
                  <div className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <p className="text-white text-lg font-bold translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
                      {project.playLabel}
                    </p>
                  </div>
                </a>
            </div>
              <div>
                <div className="text-4xl font-semibold">
                  {project.title}
                </div>
                <div className="w-150 py-5">
                  <p className="text-xl py-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="flex justify-center items-center text-sm px-3 py-1 rounded-lg font-medium bg-gray-800"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                  <div className="text-right p-5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <SiIcons.SiGithub className={`inline-block text-3xl fill-current text-white hover:text-${project.colour}-400`} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div>
        <div className="text-4xl font-bold text-center py-10" id="projects">
          Additional Projects
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 lg:px-20">  
          {additionalProjects.map((project) => (
            <div key={project.title} className="flex flex-col items-center align-center gap-5 px-5 lg:px-20">
              <div className="relative group overflow-hiddenshadow-lg cursor-pointer bg-white flex justify-center text-center rounded-2xl">
                <a href={project.liveUrl} target="_blank">
                  <img src={project.image} alt={project.title} className="mx-auto rounded-xl h-40"/>
                  <div className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <p className="text-white text-lg font-bold translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
                      {project.playLabel}
                    </p>
                  </div>
                </a>
            </div>
              <div>
                <div className="text-2xl font-semibold">
                  {project.title}
                </div>
                <div className="w-85 py-5">
                  <p className="text-xl py-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="flex justify-center items-center text-sm px-3 py-1 rounded-lg font-medium bg-gray-800"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                  {project.githubUrl && (
                    <div className="text-right p-5">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <SiIcons.SiGithub className={`inline-block text-3xl fill-current text-white hover:text-${project.colour}-400`} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}