import React from 'react';

export default function BootcampCard({ university, degree, duration, imageUrl, topics }) {
    return (
        <div key={university} className='gap-4 p-6 shadow-md bg-gray-100 rounded-lg w-full max-w-5xl'>
            <div className="flex gap-4">
                <img
                    alt={`${university} Logo`}
                    className="w-32 h-32 object-contain"
                    src={imageUrl || '/placeholder.svg'}
                    style={{
                        aspectRatio: "100/100",
                        objectFit: "contain",
                    }}
                />
                <div className="space-y-2">
                    <h2 className="text-xl font-bold">{university}</h2>
                    <p className="text-gray-500">{`${degree}`}</p>
                    <p className="text-sm text-gray-400">{duration}</p>
                </div>
                <p className="text-gray-500 ml-auto">Istanbul, Turkey</p>
            </div>
            <p className="mb-4 text-gray-500 -mt-4">Topics Covered:</p>
            <div className="grid grid-cols-6 gap-4">
                {topics.map((course, index) => (
                    <p key={index} className="text-sm text-gray-600">{course}</p>
                ))}
            </div>
        </div>
    );
}
