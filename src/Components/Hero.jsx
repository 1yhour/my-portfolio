import React from 'react'
import { heroButtons, scrollToSection} from "../Constraints/index.js";
import MyPhoto from "../Assets/photos/anime_pic.jpg"
import {iconLink} from "../Constraints/IconLink.js";
const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 lg:px-8">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center justify-center md:items-center md:px-6 lg:px-8">
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <p className="text-gray-600 font-inter_regular text-2xl">Hello I'm</p>
                            <h1 className="text-5xl md:text-6xl font-inter_bold">Lyhour</h1>
                            <p className="text-xl md:text-2xl">Full Stack Developer & Creative Designer</p>
                        </div>
                        <p className="text-gray-600 max-w-lg">I craft beautiful, functional digital experiences designed to solve real problems.
                            My focus is on web development, UI/UX design, and turning ideas into reality.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {heroButtons.map((btn)=>(
                                <button
                                    key={btn.text}
                                    onClick={() => {scrollToSection(btn.link)}}
                                    className={
                                        btn.variant === "primary" ? "bg-[#0b1426] text-white px-6 py-3 rounded-xl"
                                            : "border border-gray-300 text-gray-700 px-6 py-3 rounded-xl"
                                    }
                                >{btn.text}</button>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {iconLink.map(({id,link,icon:Icon,color},index) => (
                                <div key={index}>
                                    <div className="p-2 transition-colors">
                                        <a href={link} target="_blank" rel="noopener noreferrer" className={color}>
                                            <Icon size={24}/>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-full overflow-hidden bg-gray-100">
                            <img src={MyPhoto} alt="my_photo" className="w-full h-full object-cover md:w-75% md:h-75% z-0"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;
