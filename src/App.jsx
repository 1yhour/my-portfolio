import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";
const App = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <Hero/>
                <About/>
                <Skills/>
            </main>
        </div>
    )
}
export default App