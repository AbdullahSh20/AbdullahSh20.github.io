import React from 'react';

const CertificateCard = ({ certificate }) => {
    const { title, imageUrl, PDF } = certificate;

    return (
        <a href={`../src/assets/Certificates/${PDF}`} target="_blank" rel="noopener noreferrer" className="group">
            <div className="grid gap-1 transform transition-transform group-hover:scale-105">
                <img
                    alt={title}
                    className="mx-auto aspect-[3/2] overflow-hidden rounded-t-xl max-w-[350px] max-h-[350px] object-cover"
                    height="200"
                    src={imageUrl}
                />
                <h3 className="text-lg font-bold">{title}</h3>
            </div>
        </a>
    );
};

export default CertificateCard;
