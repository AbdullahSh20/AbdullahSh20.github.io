import React from 'react';

export default function BootcampCard({ university, degree, duration, imageUrl, topics }) {
    return (
        <div className='gap-4 p-6 shadow-md bg-gray-100 rounded-lg w-full max-w-5xl'>
            <div className="flex flex-col sm:flex-row gap-4">
                <img
                    alt={`${university} Logo`}
                    className="w-32 h-32 object-contain mx-auto sm:mx-0"
                    src={imageUrl}
                    style={{
                        aspectRatio: "100/100",
                        objectFit: "contain",
                    }}
                />
                <div className="space-y-2 text-center sm:text-left">
                    <h2 className="text-xl font-bold">{university}</h2>
                    <p className="text-gray-500">{`${degree}`}</p>
                    <p className="text-sm text-gray-400">{duration}</p>
                </div>
                <p className="text-gray-500 sm:ml-auto text-center sm:text-right">Istanbul, Turkey</p>
            </div>
            <p className="mb-4 text-gray-500 -mt-4">Topics Covered:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                {topics.map((course, index) => (
                    <p key={index} className="text-sm text-gray-600">{course}</p>
                ))}
            </div>
        </div>
    );
}
