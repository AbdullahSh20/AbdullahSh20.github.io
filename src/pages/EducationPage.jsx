import React from 'react';
import EducationCard from '../components/EducationCard';
import BootcampCard from '../components/BootcampCard';
import ProjectCard from '../components/ProjectCard';

function EducationPage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <main className="flex flex-col gap-8 w-full">
                <section className="w-full py-12 flex items-center justify-center">
                    <div className="container px-4">
                        <div className="space-y-4 text-center">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Education</h1>
                            <p className="max-w-[700px] mx-auto text-gray-500 xl:text-xl/relaxed pb-2">
                                A brief overview of my formal education.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <EducationCard
                                university="Istanbul Technical University"
                                degree="Bachelor of Engineering"
                                field="Computer Engineering"
                                duration="2021 - 2025"
                                imageUrl="src\assets\ITUlogo.png"
                                courses={coursesData}
                            />
                            <br />
                            <BootcampCard
                                university="Inzva X Google Developers ML Bootcamp"
                                degree="TensorFlow Developer Certificate"
                                duration="2023 (4 months)"
                                imageUrl="src\assets\InzvaLogo.png"
                                topics={topicsData}
                            />

                        </div>
                        <div className="mt-20 space-y-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Certifications & Achievements</h2>
                            <p className="max-w-[700px] mx-auto text-gray-500 text-base/relaxed xl:text-xl/relaxed ">
                                Some of the certifications and achievements I've earned over the years.
                            </p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className="grid items-start gap-16 grid-cols-4 pt-8">
                                {Certificates.map((Certificate, index) => (
                                    <ProjectCard key={index} project={Certificate} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div >
    );
}

const coursesData = [
    'Information Systems',
    'Computer Engineering Ethics',
    'Linear Algebra',
    'Programming in C',
    'Discrete Mathematics',
    'Probability and Statistics',
    'Data Structures',
    'Digital Circuits',
    'Basics of Electrical Circuits',
    'Introduction to Electronics',
    'Engineering Mathematics',
    'Numerical Methods in CE',
    'Computer Organization',
    'Logic Circuits Lab.',
    'Object Oriented Programming',
    'Formal Languages and Automata',
    'Microprocessor Systems',
    'Database Systems',
    'Analysis of Algorithms I',
    'Computer Communications',
    'Microcomputer Lab.',
    'Electronics Lab.',
];
const topicsData = [
    "Deep Learning",
    "Forward and backward propagation",
    "Regularization and optimization techniques",
    "Optimization algorithms",
    "Hyperparameter tuning, Batch Normalization",
    "Programming frameworks (TensorFlow, PyTorch)",
    "Object detection",
    "CNNs and RNNs",
    "NLP",
    "Computer Vision",
    "LSTMs and GRUs",
    "Time series and Sequence models",
];
const Certificates = [
    {
        title: 'ALU System Design',
        description: 'Designed a working ALU system with Vivado and Verilog',
        imageUrl: 'src/assets/Project1.png',
        githubLink: 'https://github.com/AbdullahSh20/ITU-COURSEWORK/tree/main/Computer%20Organization',
    },
    {
        title: 'Full Stack Website',
        description: 'Wrote a Full Stack website using Flask, React, MySQL',
        imageUrl: 'src/assets/Project2.png',
        githubLink: 'https://github.com/AbdullahSh20/Database-Course-Project',
    },
    {
        title: 'Routing Algorithms Simulator',
        description: 'Wrote a routing algorithms simulator using Python',
        imageUrl: 'src/assets/Project3.png',
        githubLink: 'https://github.com/AbdullahSh20/ITU-COURSEWORK/tree/main/Computer%20Communications/HW4',
    },
    {
        title: 'ALU System Design',
        description: 'Designed a working ALU system with Vivado and Verilog',
        imageUrl: 'src/assets/Project1.png',
        githubLink: 'https://github.com/AbdullahSh20/ITU-COURSEWORK/tree/main/Computer%20Organization',
    },
];

export default EducationPage;
