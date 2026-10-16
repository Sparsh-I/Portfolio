"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
    { id: "home", label: "home" },
    { id: "about", label: "about" },
    { id: "projects", label: "projects" },
];

export function NavBar() {
    const pathname = usePathname();
    const onProjectRoute = pathname.includes("projects");
    const [scrollActive, setScrollActive] = useState("home");

    useEffect(() => {
        if (onProjectRoute) return;

        const onScroll = () => {
            const line = 120;
            let current = links[0].id;

            for (const { id } of links) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= line) current = id;
            }

            const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
            if (atBottom) current = links[links.length - 1].id;

            setScrollActive(current)
        }
        
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [onProjectRoute]);

    const active = onProjectRoute ? "projects" : scrollActive;

    return (
        <div className="flex justify-around items-center lg:justify-between px-[3%] py-[1%] sticky top-0 bg-[#141414] text-white z-50 h-20">
            <h1 className="text-3xl hidden lg:block">Sparsh Inanda</h1>
            <div className="flex justify-between gap-7 lg:gap-10">
                {links.map(({ id, label }) => (
                    <a
                        key={id}
                        href={`../#${id}`}
                        className={`text-2xl cursor-pointer underline-offset-8 ${
                            active === id ? "underline" : ""
                        }`}
                    >
                        {label}
                    </a>
                ))}
            </div>
        </div>
    )
}