import React from 'react';

const ProjectCard = ({ project }) => {
    const { title, description, imageUrl, githubLink } = project;

    return (
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="group">
            <div className="grid gap-1 transform transition-transform group-hover:scale-105">
                <img
                    alt={title}
                    className="mx-auto aspect-[3/2] overflow-hidden rounded-t-xl object-cover"
                    height="250"
                    src={imageUrl}
                    width="350"
                />
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
        </a>
    );
};

export default ProjectCard;
