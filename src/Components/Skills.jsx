import {skills} from "../Constraints/index.js";
const Skills = () => {
    return (
        <section id="skills" className="py-20 px-4 md:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="font-inter_bold text-4xl md:text-5xl mb-6 text-gray-900">Skills</h2>
                </div>

                {/*This is called Destructure extracting values from objects or arrays into separate variables in a clean, short way*/}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto lg:max-w-5xl">
                    {skills.map(({ name, percentage, icon: SkillIcon, color }, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow px-8">
                            {/* Top Row: Icon and Name */}
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <SkillIcon size={40} className={color} />
                                </div>
                                <div className="flex flex-col ml-3 w-full ">
                                    <div className="font-inter_regular text-md mb-2">
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-white">{name}</h3>
                                            <span className="text-gray-300">{percentage}%</span>
                                        </div>
                                    </div>
                                    <div className="relative bg-orange-500 h-2 rounded-full">
                                        <div className="absolute h-full rounded-full bg-white top-0 left-0 transition-all duration-1000"
                                             style={{width: `${percentage}%`}}>
                                            <div className="absolute -right-2 -top-1.5 h-5 w-5 rounded-full bg-black border-4 border-gray-100 shadow-lg"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Skills
