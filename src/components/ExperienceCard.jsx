import React from 'react';
import SkillIcon from './SkillIcon';

const ExperienceCard = ({ companyName, position, description, duration, skills }) => {
    return (
        <div className="w-full max-w-5xl bg-gray-100 shadow-xl rounded-lg">
            <div className="flex justify-start p-6">
                <div>
                    <WorkflowIcon className="h-12 w-12 text-gray-400 mr-12" />
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-gray-700 text-start">{position} at {companyName}</h2>
                    <p className="text-gray-600 text-start">{description}</p>
                </div>
            </div>
            <div className='flex flex-row pl-28'>
                {skills.map((icon, index) => (
                    <SkillIcon key={index} icon={icon} />
                ))}
            </div>
            <div className="flex flex-row pl-28 pb-4">
                <p className="text-sm text-gray-500">
                    Duration: {duration}
                </p>
            </div>
        </div>
    );
};


function WorkflowIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="8" height="8" x="3" y="3" rx="2" />
            <path d="M7 11v4a2 2 0 0 0 2 2h4" />
            <rect width="8" height="8" x="13" y="13" rx="2" />
        </svg>
    )
}



export default ExperienceCard;
