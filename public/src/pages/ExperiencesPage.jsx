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
import { SiPytorch } from "react-icons/si";
import { FaDocker } from "react-icons/fa";

function ExperiencesPage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <main className="flex flex-col gap-8 w-full">
                <section className="w-full py-12">
                    <div className="space-y-4 text-center">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Experiences</h1>
                        <p className="max-w-[700px] mx-auto text-gray-500 xl:text-xl/relaxed pb-2">
                            All my job/internship experiences that I had over the years.
                        </p>
                        <div className="flex flex-col items-center space-y-8">
                            <ExperienceCard
                                companyName="SiMiT Lab"
                                position="Undergraduate Student Researcher"
                                description={
                                    <div>
                                        <p>• Developed several insect classification and identification models using TensorFlow and PyTorch</p>
                                        <p>• Worked with multi-label classification models that work on a taxonomic level</p>
                                        <p>• Employed probabilistic prediction thresholds and utilized transfer learning</p>
                                        <p>• Did an extensive literature review of state of the art employed technologies in the field</p>
                                        <p>• Utilized docker to containerize the models and turn them into usable algorithms</p>
                                        <p>• Joined the DIOPSIS challenge and represented the lab in the competition</p>
                                    </div>
                                }
                                duration="Nov 2023 - Present"
                                skills={[<SiTensorflow />, <SiPytorch />, <FaPython />, <SiJupyter />, <FaGitAlt />, <FaDocker />]}
                            />
                            <ExperienceCard
                                companyName="RealSoft Advanced Applications"
                                position="Software Developer Intern"
                                description={
                                    <div>
                                        <p>• Developed a product supplier-retailer application with the mobile development team using flutter</p>
                                        <p>• Developed some APIs for the supplier-retailer application using the .NET framework</p>
                                        <p>• Utilized MySQL as the database management system and worked on some structural migrations</p>
                                    </div>
                                }
                                duration="Jul 2023 - Sept 2023"
                                skills={[<SiFlutter />, <FaGitAlt />, <SiCsharp />, <SiMysql />, <SiDotnet />]}
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default ExperiencesPage; 