import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiZig
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Portfolio 2023",
        description:
            "This is the fifth iteration of my portfolio.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/Geebel?tab=repositories",
        demo: "https://www.techhaven.ng",
        image: "/projects/portfolio.webp",
        available: true,
    },
    {
        id: 1,
        name: "Code Wars Solutions",
        description:
            "Just a couple of solutions for www.codewars.com problems. I'm currently ranked 7 kyu.",
        technologies: [SiCplusplus, SiRust, SiNeovim],
        techNames: ["C++", "Rust", "Neovim"],
        techLinks: ["https://cplusplus.com/", "https://www.rust-lang.org/", "https://neovim.io/"],
        github: "https://github.com/Geebel?tab=repositories",
        demo: "https://www.techhaven.ng",
        image: "/projects/codewars.webp",
        available: true,
    },
    {
        id: 2,
        name: "Coming Soon",
        description:
            "I'm currently working on a couple of projects. I'll update this section as soon as I'm done.",
        technologies: [SiZig],
        techNames: ["Zig"],
        techLinks: ["https://www.ziglang.org/"],
        github: "https://github.com/Geebel?tab=repositories",
        demo: "https://github.com/Geebel?tab=repositories",
        image: "/projects/construction.webp",
        available: false,
    },
];
