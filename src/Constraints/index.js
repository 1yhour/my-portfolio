export const navbar = [
    {text: 'About', link: 'about'},
    {text: 'Skills', link: 'skills'},
    {text: 'Contact', link: 'contact'},
]
export function scrollToSection(id,setIsMenuOpen) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
};