import React from 'react';

const SkillIcon = ({ icon }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-10 h-10"
        viewBox="0 0 24 24"
    >
        {icon}
        <path d="M0 0h24v24H0z" stroke="none" />
    </svg>
);

export default SkillIcon;