import Image from "next/image";
import { NavBar } from "./NavBar";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";
import { Footer } from "./Footer";

export default function Home() {
  const skills = [
    {
      category: "Languages",
      style: "violet",
      items: [
        { Icon: SiIcons.SiTypescript, name: "TypeScript", colour: "#3178C6" },
        { Icon: SiIcons.SiJavascript, name: "JavaScript", colur: "#F7DF1E" },
        { Icon: SiIcons.SiPython, name: "Python", colour: "#3776AB" },
        { Icon: FaIcons.FaJava, name: "Java", colour: "#ED8B00" },
        { Icon: SiIcons.SiSharp, name: "C#", colour: "#512BD4" },
      ],
    },
    {
      category: "Web Development",
      style: "emerald",
      items: [
        { Icon: SiIcons.SiReact, name: "React", colour: "#61DAFB" },
        { Icon: SiIcons.SiNextdotjs, name: "Next.js", colour: "#e4e3e3" },
        { Icon: SiIcons.SiVite, name: "Vite", colour: "#646CFF" },
        { Icon: SiIcons.SiTailwindcss, name: "Tailwind", colour: "#06B6D4" },
        { Icon: SiIcons.SiNodedotjs, name: "Node.js", colour: "#5FA04E" },
        { Icon: SiIcons.SiPostgresql, name: "PostgreSQL", colour: "#4169E1" },
      ],
    },
    {
      category: "Data & ML",
      style: "blue",
      items: [
        { Icon: SiIcons.SiNumpy, name: "NumPy", colour: "#4DABCF" },
        { Icon: SiIcons.SiPandas, name: "Pandas", colour: "#FFF" },
        { Icon: SiIcons.SiScikitlearn, name: "scikit-learn", colour: "#F7931E" },
      ],
    },
    {
      category: "Game Dev & Design",
      style: "amber",
      items: [
        { Icon: SiIcons.SiUnity, name: "Unity", colour: "#FFF" },
        { Icon: SiIcons.SiFigma, name: "Figma", colour: "#F24E1E" },
        { Icon: DiIllustrator, name: "Illustrator", colour: "#FF9A00" },
        { Icon: DiPhotoshop, name: "Photoshop", colour: "#31A8FF" },
      ],
    },
    {
      category: "Dev Tools",
      style: "rose",
      items: [
        { Icon: SiIcons.SiGit, name: "Git", colour: "#F1502F" },
        { Icon: SiIcons.SiGithub, name: "GitHub", colour: "#FFF" },
        { Icon: VscVscode, name: "VS Code", colour: "#007ACC" },
      ],
    }
  ];
  
  function ExperienceConnector({ future = false }: { future?: boolean }) {
    return future ? (
      <div className="flex items-center p-10">
        <div className="w-3 h-3 rounded-full bg-purple-300" />
        <div className="w-3 h-3 rounded-full bg-purple-300 mx-2" />
        <div className="w-3 h-3 rounded-full bg-purple-300" />
      </div>
    ) : (
      <div className="flex items-center p-7">
        <div className="w-3 h-3 rounded-full bg-purple-300 px-6" />
      </div>
    );
  }

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
      <div className="h-dvh w-full text-center text-gray-600 font-semibold text-2xl lg:text-6xl flex flex-col gap-20 py-50 px-[5%] leading-relaxed align-center bg-[url('/background.JPG')] bg-cover bg-center">
        <div className="gap-10">
          <p>Hello, I'm <strong className="text-violet-400"> Sparsh Inanda</strong>!</p>
          <p className="text-lg lg:text-2xl">Full-stack developer that also builds games.</p>
        </div>
        <div className="flex justify-center gap-[5%] py-10 text-lg lg:text-xl">
          <a className="bg-white text-[#0077B5] font-bold py-2 px-4 rounded-xl hover:bg-[#0077B5] hover:text-white hover:cursor-pointer"
             href="https://www.linkedin.com/in/sparsh-inanda/" target="_blank" rel="noopener noreferrer">
            Visit My LinkedIn
          </a>
          <a className="bg-violet-300 text-black py-2 px-4 rounded-xl hover:bg-violet-400 hover:cursor-pointer"
             href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            View My Resume
          </a>
        </div>
      </div>

      {/* About Me */}
      <div id="about">
        <div className="text-4xl font-bold text-center py-10">
          About Me
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-center align-center px-5 lg:px-20">
          <div>
            <img src="/SparshInanda.png" alt="Sparsh Inanda" className="w-64 h-64 rounded-full object-cover"/>
          </div>
          <div className="w-full lg:w-200 py-5 px-5">
            <p className="text-xl py-5">
              I'm a Computer Science and Statistics major in my final year at the University of British Columbia. 
              I have a passion for web development and game development, and most recently worked as a full-stack developer at <a className="underline" href="https://icbc.com">ICBC</a>.
            </p>
            <p className="text-xl py-5">
              I enjoy building applications that are both functional and visually appealing, and I'm always looking for new challenges to improve my skills and learn new technologies.
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-around items-center align-center px-5 lg:px-20 py-5">
          {skills.map(({category, style, items}) => (
            <div key={category}>
              <div className="text-center">{category}</div>
              <div className={`flex flex-row gap-5 py-5 bg-${style}-300/10 border-2 border-${style}-300 rounded-2xl justify-center items-center px-5`}>
                {items.map(({ Icon, name, colour }) => (
                  <div key={name} className=" rounded-sm text-3xl group relative">
                    <Icon title={name} color={colour} className="transition-transform duration-300 ease-in-out group-hover:scale-175" />
                    <span className={`pointer-events-none absolute whitespace-nowrap left-1/2 mt-6 -translate-x-1/2 px-2 py-1 text-sm opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100`}>
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
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

        <div className="flex flex-col justify-center items-center align-center px-5 lg:px-20 w-full pb-20">
          <div className="text-3xl font-bold text-center py-10">
            Experience
          </div>
          <div className="border-3 border-gray-600 p-4 rounded-2xl text-center flex flex-row justify-center items-center">
            <div>
              <p>May '25 - Aug '25</p>
              <p><strong>Programming Intern</strong></p>
              <p><em>Yatabase</em></p>
            </div>
            <ExperienceConnector />
            <div>
              <p>Sep '25 - Aug '26</p>
              <p><strong>Full-stack Developer</strong></p>
              <p><em>Insurance Corporation of British Columbia</em></p>
            </div>
            <ExperienceConnector/>
            <div>
              <p>Sep '22 - May '27</p>
              <p><strong>Computer Science & Statistics Major</strong></p>
              <p><em>University of British Columbia</em></p>
            </div>
            <ExperienceConnector future/>
            <div>
              <p>May '27 - Future</p>
              <p><strong>What's Next?</strong></p>
              <p><em>Where to go from here?</em></p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div id="projects">
        <div className="text-4xl font-bold text-center py-10">
          Featured Projects
        </div>

         <div className="flex flex-col justify-between items-center align-center gap-10 px-5 lg:px-20 w-full">
          {featuredProjects.map((project) => (
            <div key={project.title} className="flex flex-col lg:flex-row-reverse items-center align-center gap-5 px-5 lg:px-5">
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

      {/* Additional Projects */}
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
      
      <Footer/>
    </div>
  );
}