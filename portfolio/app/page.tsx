import Image from "next/image";
import { GameDev } from "./modules/GameDev";
import { WebDev } from "./modules/WebDev";

export default function Home() {
  return (
    // <div>
    //   <NavBar/>
    //   <h1 style={{padding: "8% 20%"}} className="text-5xl text-center">
    //     I'm a full-stack developer, interested specifically in web and game development.
    //   </h1>
    // </div>

    <div className="grid grid-cols-4 gap-10 py-30 px-40">
      <div className="col-span-3 row-span-2 border-2">
        <p>Hello, I'm <strong>Sparsh Inanda</strong>, a Computer Science and Statistics major in my final year at the University of British Columbia.</p>
        <br></br>
        <p>I've got a passion for web development and game developmennt and most recently worked as a full-stack developer at <a className="underline" href="https://icbc.com">ICBC</a>.</p>
        <br></br>
        <p></p>
      </div>
      <div className="row-span-8 border-2 flex flex-col gap-5">
        <div>
          <div className="text-purple-300">FRONTEND</div>
          ReactJS, Vite, HTML, CSS, Next.js, Tailwind
        </div>
        <div>
          <div className="text-purple-300">BACKEND</div>
          TypeScript, Node.js, C#, Java, Python, JavaScript, PostgreSQL
        </div>
        <div>
          <div className="text-purple-300">TOOLS</div>
          Git, 
        </div>
        <div>
          <div className="text-purple-300">SOFTWARE</div>
          Unity, Visual Studio Code, Adobe Illustrator, Adobe Photoshop, Figma, GitHub
        </div>
      </div>
      <div className="row-span-4 border-2">
        Experience
      </div>
      <div className="col-span-2 row-span-2">
        <div className="border-2 w-57 text-center rounded-t-xl">
          Web Development Projects
        </div>
        <WebDev/>
      </div>
      <div className="col-span-2 row-span-2">
        <div className="border-2 w-60 text-center rounded-t-xl">
          Game Development Projects
        </div>
        <GameDev/>
      </div>
    </div>
  );
}