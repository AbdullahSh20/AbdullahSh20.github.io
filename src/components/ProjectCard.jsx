import React from 'react';

const ProjectCard = ({ project }) => {
    const { title, description, imageUrl, githubLink } = project;

    return (
        <div className="group transform transition-transform hover:scale-105">
            <div className="bg-gray-200 rounded-lg shadow-xl p-4 min-h-full h-full flex flex-col justify-between">
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <div className="relative w-full h-0" style={{ paddingBottom: "56.25%" }}>
                        <img
                            alt={title}
                            className="absolute inset-0 rounded-lg object-cover object-center w-full h-full"
                            src={imageUrl}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </div>
                    <h3 className="text-lg font-bold mt-2">{title}</h3>
                    <p className="text-sm text-gray-500">{description}</p>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
// mx-auto aspect-[3/2] overflow-hidden rounded-t-xl object-cover
