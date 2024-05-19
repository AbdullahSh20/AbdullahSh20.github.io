import React, { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import blogPageData from '../assets/blogPageData.json';
import { Link } from 'react-router-dom';

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState('new');

  useEffect(() => {
    setBlogs(blogPageData);
  }, []);

  const handleLabelClick = (label) => {
    setSelectedLabel(label);
  };

  const getFilteredBlogs = () => {
    if (selectedLabel === 'new') {
      return blogs.slice(0, 6);
    } 
    else if (selectedLabel === 'all') {
      return blogs;
    }
    else {
      return blogs.filter(blog => blog.label.toLowerCase() === selectedLabel);
    }
  };

  const filteredBlogs = getFilteredBlogs();

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="mb-8 flex flex-col items-end justify-between gap-4 md:flex-row">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Latest Blogs</h1>
          <p className="max-w-[1000px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            In my blogs I aim to share my experiences, insights, and tips on various topics that I'm passionate about.
          </p>
          <p className="max-w-[1000px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            To see the rest of my blogs, click on any of the filter categories on the right.
          </p>
        </div>
        <div className="my-3">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <button
              className={`inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 ${selectedLabel === 'new' ? 'bg-gray-700' : 'bg-gray-900'}`}
              onClick={() => handleLabelClick('new')}
            >
              New
            </button>
          <button
              className={`inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 ${selectedLabel === 'all' ? 'bg-gray-700' : 'bg-gray-900'}`}
              onClick={() => handleLabelClick('all')}
            >
              All
            </button>
            <button
              className={`inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 ${selectedLabel === 'career' ? 'bg-gray-700' : 'bg-gray-900'}`}
              onClick={() => handleLabelClick('career')}
            >
              Career
            </button>
            <button
              className={`inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 ${selectedLabel === 'books' ? 'bg-gray-700' : 'bg-gray-900'}`}
              onClick={() => handleLabelClick('books')}
            >
              Books
            </button>
            <button
              className={`inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 ${selectedLabel === 'gym' ? 'bg-gray-700' : 'bg-gray-900'}`}
              onClick={() => handleLabelClick('gym')}
            >
              Gym
            </button>
            <button
              className={`inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 ${selectedLabel === 'other' ? 'bg-gray-700' : 'bg-gray-900'}`}
              onClick={() => handleLabelClick('other')}
            >
              Other
            </button>
          </div>
        </div>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
