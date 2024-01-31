import React from 'react';
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import ExperienceCard from '../components/ExperienceCard';

function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <main className="flex flex-col gap-8 w-full">

                <section className="w-full py-32 md:py-46 lg:py-54 flex items-center justify-center m-0">
                    <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
                        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-2">
                            <div className='flex flex-col  justify-center'>
                                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    Hello, I'm <br /> Abdullah Shamout
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                                    I'm a junior computer engineering student studying at Istanbul Technical University (ITU). I'm interested in Artificial Intelligence, Embedded Systems, and low-level programming.
                                </p>
                                <div className="flex items-center space-x-2 mt-4">
                                    <a href="https://github.com/AbdullahSh20" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
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
                                            {<IoLogoGithub />}
                                            <path d="M0 0h24v24H0z" stroke="none" />
                                        </svg>
                                    </a>
                                    <a href="https://www.linkedin.com/in/abdullah-shamout/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
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
                                            {<FaLinkedin />}
                                            <path d="M0 0h24v24H0z" stroke="none" />
                                        </svg>
                                    </a>
                                    <a href="mailto:shamout21@itu.edu.tr" className="flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-12 h-12"
                                            viewBox="0 0 22 22"
                                        >
                                            {<IoIosMail />}
                                            <path d="M0 0h24v24H0z" stroke="none" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="flex items-center">
                                    <a href="./src/assets/CV.pdf" className="flex items-center justify-center" target="_blank" rel="noopener noreferrer">
                                        <p className="mr-4 font-bold text-lg">My CV:</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-8 h-8"
                                            viewBox="0 0 20 20"
                                        >
                                            {<FaFilePdf />}
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    className="rounded max-w-[350px] max-h-[350px] object-cover"
                                    src="./src/assets/AbdullahShamout.jpg"
                                    alt="Abdullah Shamout"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-16 md:py-32 lg:py-40 bg-gray-100 flex items-center justify-center m-0">
                    <div className="container space-y-12 px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <div className="flex flex-col items-center space-y-2">
                                <Link to="/education">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl cursor-pointer text-center">
                                        Education
                                    </h2>
                                </Link>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    This is my latest education status. For the full list of my education, please visit the education section
                                </p>
                                <div key="1" className="flex items-center justify-center gap-4 p-6 shadow-md bg-white rounded-lg w-full max-w-lg">
                                    <img
                                        alt="University Logo"
                                        className="w-24 h-24 object-contain"
                                        height="100"
                                        src="./src/assets/ITUlogo.png"
                                        style={{
                                            aspectRatio: "100/100",
                                            objectFit: "contain",
                                        }}
                                        width="100"
                                    />
                                    <div className="space-y-2">
                                        <h2 className="text-xl font-bold">Istanbul Technical University</h2>
                                        <p className="text-gray-500">Bachelor of Engineering in Computer Engineering</p>
                                        <p className="text-sm text-gray-400">2021 - 2025</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-16 md:py-32 flex items-center justify-center m-0">
                    <div className="container space-y-12 px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <Link to="/experiences">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl cursor-pointer">
                                        My Experiences
                                    </h2>
                                </Link>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    This is my latest position. For the full list of my experiences, please visit the experiences section.
                                </p>
                            </div>
                            <ExperienceCard
                                companyName="SiMiT Lab"
                                position="Undergraduate Student Researcher"
                                description="Working on Insects AI project by using Deep Learning techniques"
                                duration="Nov 2023 - Present"
                                to="/experiences"
                            />
                        </div>
                    </div>
                </section>

                <section className="w-full py-16 md:py-32 bg-gray-100 flex items-center justify-center m-0">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center pb-6">
                            <div className="space-y-2">
                                <Link to="/projects">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl cursor-pointer">
                                        My Projects
                                    </h2>
                                </Link>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Here are a few of my most recent projects. For the full list, please visit the projects section.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">

                            <a href="https://github.com/AbdullahSh20/ITU-COURSEWORK/tree/main/Computer%20Organization" target="_blank" rel="noopener noreferrer" className="group">
                                <div className="grid gap-1 transform transition-transform group-hover:scale-105">
                                    <img
                                        alt="Project 1"
                                        className="mx-auto aspect-[3/2] overflow-hidden rounded-t-xl object-cover"
                                        height="250"
                                        src="./src/assets/Project1.png"
                                        width="350"
                                    />
                                    <h3 className="text-lg font-bold">ALU System Desgin</h3>
                                    <p className="text-sm text-gray-500">Designed a working ALU system with Vivado and Verilog</p>
                                </div>
                            </a>

                            <a href="https://github.com/AbdullahSh20/Database-Course-Project" target="_blank" rel="noopener noreferrer" className="group">
                                <div className="grid gap-1 transform transition-transform group-hover:scale-105">
                                    <img
                                        alt="Project 2"
                                        className="mx-auto aspect-[3/2] overflow-hidden rounded-t-xl object-cover"
                                        height="250"
                                        src="./src/assets/Project2.png"
                                        width="350"
                                    />
                                    <h3 className="text-lg font-bold">Full Stack Website</h3>
                                    <p className="text-sm text-gray-500">Wrote a Full Stack website using Flask, React, MySQL</p>
                                </div>
                            </a>

                            <a href="https://github.com/AbdullahSh20/ITU-COURSEWORK/tree/main/Computer%20Communications/HW4" target="_blank" rel="noopener noreferrer" className="group">
                                <div className="grid gap-1 transform transition-transform group-hover:scale-105">
                                    <img
                                        alt="Project 3"
                                        className="mx-auto aspect-[3/2] overflow-hidden rounded-t-xl object-cover"
                                        height="250"
                                        src="./src/assets/Project3.png"
                                        width="350"
                                    />
                                    <h3 className="text-lg font-bold">Routing Algorithms Simulator</h3>
                                    <p className="text-sm text-gray-500">Wrote a routing algorithms simulator using python</p>
                                </div>
                            </a>
                        </div>

                    </div>
                </section>

            </main>
        </div>
    );
}

export default HomePage;
