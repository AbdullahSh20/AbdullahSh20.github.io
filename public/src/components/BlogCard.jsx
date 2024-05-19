import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogCard({ blog }) {
  const { title, description, image, label, link } = blog;

  return (
    <div className="group relative overflow-hidden rounded-lg border transition-all hover:shadow-lg">
      <Link className="absolute inset-0 z-10" to={link}>
        <span className="sr-only">Read article</span>
      </Link>
      <img
        alt="Blog post cover"
        className="h-[250px] w-full object-cover transition-all group-hover:scale-105"
        height={250}
        src={image}
        style={{
          aspectRatio: "400/250",
          objectFit: "cover",
        }}
        width={400}
      />
      <div className="p-4">
        <span className="mb-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
          {label}
        </span>
        <h3 className="mb-2 text-lg font-semibold tracking-tight">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}
