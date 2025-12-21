import {SiJavascript, SiReact, SiTailwindcss, SiHtml5, SiGit} from 'react-icons/si';
import {FaJava} from "react-icons/fa";
import chatbotImg from '../Assets/photos/chatbot.png';
import tempImg from '../Assets/photos/temp.png';
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
        color: 'text-orange-900'
    },
    {
        name: 'Git',
        percentage: 50,
        icon: SiGit,
        color: 'text-red-400'
    },
];

export const projects = [
    {
        title: 'Chatbot',
        description: 'I created a chatbot project using Python and Django that allows users to interact through a web interface.' +
                     ' The chatbot uses Google services to manage and process user messages.' +
                     ' This project helped me practice backend development, working with APIs, and building real-world applications using Django.',
        image: chatbotImg,
        tag: ["Python", "Django", "Google Services"]
    },
    {
        title: 'Temperature Monitoring System',
        description: 'I built an IoT project using ESP32 to measure temperature and upload the data to Firebase in real time.' +
                     ' The system allows users to monitor temperature remotely and helped me understand sensor integration, Wi-Fi communication, and cloud databases.',
        image: tempImg,
        tag: ['C++', 'Html', 'Css', 'DHT']
    }
]