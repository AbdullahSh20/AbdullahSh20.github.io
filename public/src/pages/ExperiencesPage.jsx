import React from 'react';
import ExperienceCard from '../components/ExperienceCard';
import { SiTensorflow } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiJupyter } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { SiDotnet } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiPytorch } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiScikitlearn } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiNginx } from "react-icons/si";
import { SiPostgresql, SiVite,SiFastapi, SiTailwindcss, SiSqlite, SiOpenai } from "react-icons/si";
import { SiLangchain } from "react-icons/si";
import { SiOllama } from "react-icons/si";


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
                        <div className="flex flex-col items-center space-y-8 w-full">
                            
                            <ExperienceCard
                                companyName="Cezeri / Baykar Defense"
                                position="Artificial Intelligence Engineer"
                                description={
                                    <div>
                                        <p>• Founded an internal product initiative for 3D scenery generation, leading the project from concept to development</p>
                                        <p>• Migrate legacy products to modern frameworks, establishing professional and scalable environment setups</p>
                                        <p>• Containerize applications and build robust CI/CD pipelines to streamline development and production workflows</p>
                                        <p>• Improved a utilized Structure from Motion (SFM) algorithm speed by 14% through targeted optimizations</p>
                                        <p>• Worked on 3D Scene Reconstruction using Volumetric and Radiance Field methods</p>
                                        <p>• Utilized SOTA technologies such as Gaussian Splatting and NeRF based techniques</p>
                                        <p>• Worked on utilizing LLMs as agentic mediators between sensory controls, actuators, and user panel</p>
                                        <p>• Integrated agentic LLM models within report generation pipelines for live UAV flight communication with base</p>
                                        <p>• Contribute to full-stack software development, including frontend, backend, networking, and low-level systems</p>
                                    </div>
                                }
                                duration={"Oct 2024 - Present"}
                                                                skills={[<FaDocker />, <SiVite/>, <SiFastapi/>, <SiFlask />, <SiPytorch />, <FaGitAlt />, <SiJupyter />, <SiNginx />, <SiPostgresql/>, <SiSqlite/>, <SiTailwindcss />, <SiLangchain/>, <SiOllama/>, <SiOpenai/>]}
                            />
                            <ExperienceCard
                                companyName="Beko Corporate / Arçelik A.Ş."
                                position="Research and Development Intern"
                                description={
                                    <div>
                                        <p>• Worked on the creation of a dataset that relates the designs of TVs using multiple input features to their EMI signals</p>
                                        <p>• Worked on creating an application to input the dataset into a compact form using tkinter</p>
                                        <p>• Developed machine learning and deep learning models using TensorFlow and Sklearn for the prediction of EMI signals by the TVs</p>
                                        <p>• Dealt with multivariate series forecasting, dataset optimization, and big data analysis</p>
                                        <p>• Dealt with data visualization and preprocessing using pandas and seaborn</p>
                                    </div>
                                }
                                duration={"Aug 2024 - Sept 2024"}
                                skills={[<SiTensorflow />, <FaPython />, <FaGitAlt />, <SiJupyter />, <SiScikitlearn />]}
                            />
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
                                duration="Nov 2023 - Jul 2024"
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
                                skills={[<SiFlutter />, <FaGitAlt />, <TbBrandCSharp />, <SiMysql />, <SiDotnet />]}
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default ExperiencesPage; 