
import {Code2,Palette, Rocket} from "lucide-react";
export const highlights = [
    {
        icon: Code2,
        title: 'Clean Code',
        description: 'Writing maintainable, scalable, and efficient code that stands the test of time.'
    },
    {
        icon: Palette,
        title: 'Design Focused',
        description: 'Creating beautiful interfaces with attention to detail and user experience.'
    },
    {
        icon: Rocket,
        title: 'Fast Delivery',
        description: 'Turning ideas into reality quickly without compromising on quality.'
    }
]

const About = () => {
    return (
        <section id="about" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="font-inter_bold text-4xl md:text-5xl text-gray-900 mb-6">About me</h2>
                    <p className="font-inter_regular text-gray-600 text-2md leading-7">
                        I am a passionate developer focused on building robust web applications and impactful digital experiences.
                        My greatest motivation is transforming complex technical challenges into <b>simple, intuitive, and beautiful solutions</b>.
                        I have a solid foundation in <b> modern JavaScript, React</b> and <b>C#</b> honed through intensive academic projects and continuous self-learning.
                        I thrive on clean code, collaborative problem-solving, and utilizing technology to create measurable value.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {highlights.map((highlight,index) => (
                        <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-center rounded-xl w-12 h-12 bg-gray-800 mb-6">
                                <highlight.icon size={24} className="text-white"/>
                            </div>
                            <h3 className="font-inter_bold mb-4">{highlight.title}</h3>
                            <p className="font-inter_regular">{highlight.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default About
