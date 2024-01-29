import React from 'react';
import { Link } from 'react-router-dom';

const ExperienceCard = ({ companyName, position, description, duration, to }) => {
    return (
        <div className="w-full max-w-xl bg-gray-100 shadow-2xl rounded-lg overflow-hidden ">
            <div className="flex items-start p-6">
                <WorkflowIcon className="h-12 w-12 text-gray-400" />
                <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-700 ">{position} at {companyName}</h3>
                    <p className="text-gray-600">{description}</p>
                </div>
            </div>
            <div className="px-6 pb-4">
                <p className="text-sm text-gray-500 ">Duration: {duration}</p>
                <Link to={to}>
                    <button
                        className="mt-3 w-full px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-gray-700 rounded shadow ripple hover:shadow-lg hover:bg-gray-800 focus:outline-none"
                    >
                        View Details
                    </button>
                </Link>

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
