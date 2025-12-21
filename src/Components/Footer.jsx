import React from 'react'
import {iconLink} from "../Constraints/IconLink.js";

const Footer = () => {
    return (
        <footer className="bg-gray-50 px-4 md:px-6 lg:px-8">
            <div className="p-6 max-w-7xl mx-auto">
                <div className="flex justify-between items-center font-inter_regular text-gray-500">
                    <p className="text-sm">© 2025-Seng Lyhour</p>
                    <div className="flex flex-wrap gap-4">
                        {iconLink.map(({id,icon:Icon,link},index)=>(
                            <div key={index} >
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    <Icon size={24}/>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer
