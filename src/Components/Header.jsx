import {useState} from "react";
import {Menu , X} from "lucide-react";
import {navbar} from "../Constraints/index.js";
import {scrollToSection} from "../Constraints/index.js";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-10">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <button onClick={() => scrollToSection("hero")}
                            className=" text-2xl text-gray-900 hover:text-gray-600 transition-colors font-inter_bold">
                        Seng Lyhour
                    </button>
                    <nav className="hidden md:flex items-center gap-8">
                        {navbar.map((item) => (
                            <div key={item.text} className="text-gray-700 hover:text-gray-900 transition-colors font-inter_regular">
                                <button onClick={()=> scrollToSection(item.link)}>
                                    {item.text}
                                </button>
                            </div>
                        ))}
                    </nav>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-gray-700 hover:text-gray-900 font-inter_regular">
                        {isMenuOpen ? <X size={24}/> : <Menu size={24} />}
                    </button>
                </div>
                {isMenuOpen && (
                    <nav className="md:hidden py-4 flex flex-col gap-4 border-t border-gray-100">
                        {navbar.map((item) => (
                            <div key={item.text} className="text-gray-700 hover:text-gray-900 transition-colors font-inter_regular">
                                <button onClick={()=> scrollToSection(item.link)}>
                                    {item.text}
                                </button>
                            </div>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    )
}
export default Header
