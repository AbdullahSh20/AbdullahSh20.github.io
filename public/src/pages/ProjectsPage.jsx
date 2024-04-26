import React from 'react';
import ProjectCard from '../components/ProjectCard';


function ProjectsPage() {

    return (
        <div className="flex flex-col items-center justify-center">
            <main className="flex flex-col gap-8 w-full">
                <section className="w-full py-12 flex items-center justify-center">
                    <div className="container px-4">
                        <div className="space-y-4 text-center">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h1>
                            <p className="max-w-[700px] mx-auto text-gray-500 xl:text-xl/relaxed pb-2">
                                All the personal projects that I developed so far.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <div className="grid place-items-stretch justify-center gap-16 grid-cols-3 pt-8">
                                    {Personalprojects.map((project, index) => (
                                        <ProjectCard key={index} project={project} />
                                    ))}
                                </div>
                            </div>
                        <div className="mt-20 space-y-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Notable Coursework</h2>
                            <p className="max-w-[800px] mx-auto text-gray-500 text-base/relaxed xl:text-xl/relaxed ">
                                Some of my notable coursework projects. For the full list of my documented courseworks, please visit my <a href="https://github.com/AbdullahSh20/ITU-COURSEWORK " className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Github</a> repo.
                            </p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className="grid place-items-stretch justify-center gap-16 grid-cols-3 pt-8">
                                {projects.map((project, index) => (
                                    <ProjectCard key={index} project={project} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div >
    );
}

const Personalprojects = [
    {
        title: 'This Portfolio webpage :D',
        description: 'Using react, tailwindcss, and Vite, I developed this portfolio website. The website is fully responsive, and contains all the information about me, my projects, my experiences, and my education. The website also has a blog section that I will be updating regularly.',
        imageUrl: './src/assets/PersonalProjects/Portfolio.png',
        githubLink: 'https://abdullahsh20.github.io/'
    },
]

const projects = [
    {
        title: 'ALU System design',
        description: 'Using Verilog and Vivado me and my team designed a functional 16-bit ALU system that utilizes an IR, an address register file, a general register file, an ALU unit, a memory, and a control unit. The system operates on two instruction architectures, one with an address reference, and one with registers. The project was documented using LaTeX and the code was version controlled using Git.',
        imageUrl: './src/assets/Coursework/Coursework1.png',
        githubLink: 'https://github.com/AbdullahSh20/ITU-COURSEWORK/tree/main/Computer%20Organization'
    },
    {
        title: 'Full stack web application',
        description: 'Using React, Flask, MySQL, and Docker, me and my team developed a full stack web application based on the Fifa World Cup Dataset. The website contains full CRUD functionality, a smart search bar, a live filtering and sorting system, scroll supported pagination, and multiple validation methodologies. The project was documented using LaTeX and the code was version controlled using Git.',
        imageUrl: './src/assets/Coursework/Coursework2.png',
        githubLink: 'https://github.com/AbdullahSh20/Database-Course-Project'
    },
    {
        title: 'Routing algorithm simulator',
        description: 'Using Python, Tkinter, and NetworkX, I developed a routing algorithm simulator that simulates the Dijkstra and Bellman-Ford algorithms. The simulator allows the user to create a random graph with random connections and edge weights, and run the algorithms on the graph. The simulator also allows the user to higlight the shortest path between two nodes.',
        imageUrl: './src/assets/Coursework/Coursework3.png',
        githubLink: 'https://github.com/AbdullahSh20/ITU-COURSEWORK/tree/main/Computer%20Communications/HW4'
    }
]

export default ProjectsPage;