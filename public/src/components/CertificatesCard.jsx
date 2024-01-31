import React from 'react';

const CertificateCard = ({ certificate }) => {
    const { title, imageUrl, PDF } = certificate;

    return (
        <a href={`../src/assets/Certificates/${PDF}`} target="_blank" rel="noopener noreferrer" className='grid-item bg-gray-100 rounded-lg transform transition-transform hover:scale-105 shadow-xl flex flex-col items-center justify-center mx-auto'>
            <div className='p-6'>
                <img
                    alt={title}
                    className="aspect-[3/2] rounded-t-xl max-w-[300px] max-h-[200px] object-cover"
                    src={imageUrl}
                />
                <h3 className="text-lg font-bold">{title}</h3>
            </div>
        </a>
    );
};

export default CertificateCard;
