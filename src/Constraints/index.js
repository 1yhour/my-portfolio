
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
    { text: "View Work", link: "skills", variant: "secondary" },
];

import { SiJavascript, SiReact, SiPython, SiTailwindcss} from 'react-icons/si';

export const skills = [
    {
        name: 'JavaScript',
        percentage: 90,
        icon: SiJavascript,
        color: 'text-yellow-500'
    },
    {
        name: 'React',
        percentage: 85,
        icon: SiReact,
        color: 'text-cyan-400'
    },
    {
        name: 'Python',
        percentage: 70,
        icon: SiPython,
        color: 'text-blue-500'
    },
    {
        name: 'Tailwind CSS',
        percentage: 95,
        icon: SiTailwindcss,
        color: 'text-teal-400'
    },
];