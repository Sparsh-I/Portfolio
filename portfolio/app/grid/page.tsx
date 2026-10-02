import Image from "next/image";
import * as Modules from "./modules";

export default function Grid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 py-5 px-5 lg:px-20">
      <div className="col-span-1 lg:col-span-3 row-span-2 border-3 border-gray-600 p-4 rounded-2xl">
        <p>Hello, I'm <strong>Sparsh Inanda</strong>, a Computer Science and Statistics major in my final year at the University of British Columbia.</p>
        <br></br>
        <p>I've got a passion for web development and game development and most recently worked as a full-stack developer at <a className="underline" href="https://icbc.com">ICBC</a>.</p>
      </div>

      <div className="row-span-4">
        <Modules.Technologies/>
      </div>

      <div className="row-span-2">
        <Modules.Experience/>
      </div>

      <div className="col-span-1 lg:col-span-2">
        <Modules.WebDev/>
      </div>

      <div className="col-span-1 lg:col-span-2 row-span-2">
        <Modules.GameDev/>
      </div>

      <div className="col-span-1">
        <Modules.Resume/>
      </div>

      <div className="col-span-1">
        <Modules.Contact/>
      </div>

      <div className="col-span-1 lg:col-span-3">
        <Modules.GitHub/>
      </div>
      
      <div className="col-span-1">
        <Modules.Time/>
      </div>
    </div>
  );
}