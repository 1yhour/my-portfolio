import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";
import Snowfall from "react-snowfall";
import Projects from "./Components/Projects.jsx";
import ContactMe from "./Components/ContactMe.jsx";
import Footer from "./Components/Footer.jsx";
const App = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <Snowfall color="#dee4fd"
                          style={{
                              position: "fixed",
                              width: "100vw",
                              height: "100vh",
                              zIndex:1,
                          }}
                          snowflakeCount={150}
                />
                <Hero/>
                <About/>
                <Skills/>
                <Projects/>
                <ContactMe/>
            </main>
            <Footer/>
        </div>
    )
}
export default App