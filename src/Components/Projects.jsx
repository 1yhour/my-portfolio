import {projects} from "../Constraints/index.js";
const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-inter_bold md:text-5xl mb-6 text-gray-900">My Projects</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map(({title,description,image,tag},index) => (
                        <div key={index} className="flex flex-col">
                            <div className="mb-4">
                                <img src={image} alt={title} className="w-full h-auto overflow-hidden rounded-lg object-contain aspect-video"/>
                            </div>
                            <div className="font-inter_bold text-lg h-5 mt-2 mb-3">
                                <h2>{title}</h2>
                            </div>
                            <p className="text-gray-600 mb-4">{description}</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {tag.map((tags)=>(
                                    <div key={tags} className="rounded-full bg-blue-600">
                                        <span className="text-white text-sm font-inter_regular px-3">
                                            {tags}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    ))}

                </div>
            </div>
        </section>
    )
}
export default Projects
