import React from 'react';
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaFilePdf } from "react-icons/fa6";

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
                                    <a href="../src/assets/CV.pdf" className="flex items-center justify-center" target="_blank" rel="noopener noreferrer">
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
                                    src="../src/assets/AbdullahShamout.jpg"
                                    alt="Abdullah Shamout"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-16 md:py-32 lg:py-40 bg-gray-100 flex items-center justify-center m-0">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Education Information</h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">General information about my education.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-16 md:py-32 lg:py-40 flex items-center justify-center m-0">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">University Coursework</h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">A list of all the courses I have taken in university.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-16 md:py-32 lg:py-40 bg-gray-100 flex items-center justify-center m-0">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Certificates</h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">A list of all the certificates I have earned.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}

export default HomePage;
