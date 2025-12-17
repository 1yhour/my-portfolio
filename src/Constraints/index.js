import {SiJavascript, SiReact, SiTailwindcss, SiHtml5, SiGit} from 'react-icons/si';
import {FaJava} from "react-icons/fa";

export const navbar = [
    {text: 'About', link: 'about'},
    {text: 'Skills', link: 'skills'},
    {text: 'Projects', link: 'projects'},
    {text: 'Contact', link: 'contact'},
]
export function scrollToSection(id,setIsMenuOpen) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
};

export const heroButtons = [
    { text: "Get In Touch", link: "contact", variant: "primary" },
    { text: "View Work", link: "projects", variant: "secondary" },
];


export const skills = [
    {
        name: 'JavaScript',
        percentage: 70,
        icon: SiJavascript,
        color: 'text-yellow-500'
    },
    {
        name: 'React',
        percentage: 70,
        icon: SiReact,
        color: 'text-cyan-400'
    },
    {
        name: 'Tailwind CSS',
        percentage: 90,
        icon: SiTailwindcss,
        color: 'text-teal-400'
    },
    {
        name: 'Html',
        percentage: 90,
        icon: SiHtml5,
        color: 'text-orange-500'
    },
    {
        name: 'Java',
        percentage: 50,
        icon: FaJava,
        color: 'text-white'
    },
    {
        name: 'Git',
        percentage: 50,
        icon: SiGit,
        color: 'text-red-400'
    },
];