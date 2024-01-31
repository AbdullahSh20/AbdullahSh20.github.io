import React from 'react';
import ExperienceCard from '../components/ExperienceCard';
import { SiTensorflow } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiJupyter } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

function ExperiencesPage() {
    return (
        <main className="flex flex-col gap-8 w-full items-center justify-center">
            <section className="w-full py-12">
                <div className="mt-4 space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Experiences</h2>
                    <div className="flex flex-col items-center space-y-8">
                        <ExperienceCard
                            companyName="SiMiT Lab"
                            position="Undergraduate Student Researcher"
                            description="Working on Insects AI project by using Deep Learning techniques"
                            duration="Nov 2023 - Present"
                            skills={[<SiTensorflow />, <FaPython />, <SiJupyter />]}
                        />
                        <ExperienceCard
                            companyName="RealSoft Advanced Applications"
                            position="Software Developer Intern"
                            description="Worked on mobile application development using Flutter and API development using .NET Core and MySQL"
                            duration="Jul 2023 - Sept 2023"
                            skills={[<SiFlutter />, <FaGitAlt />, <SiCsharp />, <SiMysql />, <SiDotnet />]}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ExperiencesPage; 