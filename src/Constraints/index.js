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

