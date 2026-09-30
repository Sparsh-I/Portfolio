import Image from "next/image";
import { NavBar } from "./NavBar";

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
        <div className="border-2 text-center">
          <a href="https://tripsitter-psi.vercel.app/">TripSitter</a>
        </div>
      </div>
      <div className="col-span-2 row-span-2">
        <div className="border-2 w-60 text-center rounded-t-xl">
          Game Development Projects
        </div>
        <div className="grid grid-cols-2 border-2 text-center flex items-center gap-5 p-5">
          <a className="border-2" href="https://permafrosted.itch.io/mt-stringmore/">Mt Stringmore</a>
          <a className="border-2" href="https://sparsh-i.itch.io/glade/">Glade</a>
          <a className="border-2" href="https://sparsh-i.itch.io/chirrup/">Chirrup</a>
          <a className="border-2" href="https://sparsh-i.itch.io/">View All</a>
        </div>
      </div>
    </div>

    /*<div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert h-5 w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the{" "}
            <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
              page.tsx
            </code>{" "}
            file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert h-[14px] w-4"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>*/
  );
}
