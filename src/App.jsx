import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";

const App = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <Hero/>
            </main>
        </div>
    )
}
export default App