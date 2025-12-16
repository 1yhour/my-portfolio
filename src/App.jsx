import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
const App = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <Hero/>
                <About/>
            </main>
        </div>
    )
}
export default App