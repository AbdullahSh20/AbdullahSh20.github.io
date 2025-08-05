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
                            <div className="grid place-items-stretch justify-center gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-8">
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
                            <div className="grid place-items-stretch justify-center gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-8">
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
        description: 'Using react, tailwindcss, and Vite, I developed this portfolio website. The website is fully responsive, and contains all the information about me, my projects, my experiences, and my education.',
        imageUrl: './src/assets/PersonalProjects/Portfolio.png',
        githubLink: 'https://abdullahsh20.github.io/'
    },
    {
        title: 'NeRF vs. Gaussian Splatting',
        description: 'Using PyTorch, I implemented Neural Radiance Fields (NeRF) from scratch to conduct a comparative study against 3D Gaussian Splatting for novel view synthesis. The project involved the full NeRF pipeline, from positional encoding to volumetric rendering, and evaluated both methods on synthetic and custom drone datasets. The analysis demonstrated Gaussian Splatting\'s superior speed and quality for real-world captures, showcasing the trade-offs between these state-of-the-art 3D reconstruction techniques.',
        imageUrl: './src/assets/PersonalProjects/gaussian.png',
        githubLink: 'https://github.com/AbdullahSh20'
    },
    {
        title: 'Sylvester',
        description: 'I co-developed an end-to-end AI system for scoliosis diagnosis from 3D scans. The system first segments the human torso using a custom model that we called PointSegLite that achieved 87% accuracy. It then classifies the scoliosis type using a novel feature extraction method based on back-surface normals, reaching a 76% F1-score. The entire pipeline is deployed in Sylvester, a custom, interactive web-based GUI built with Python, React, and Three.js for real-time clinical use based on viser fork.',
        imageUrl: './src/assets/PersonalProjects/grad.png',
        githubLink: 'https://github.com/AbdullahSh20'
    },
    {
        title: 'DIOPSIS Challenge',
        description: 'Using Python, PyTorch, and Tensorflow me and my teammate Kenan developed deep learning models that detect and classifies insects based on their images into their expected taxonomic ordering levels. The models were trained on the DIOPSIS dataset as it was aimed for that challenge, Docker was used to submit the algorithm to the submission platform.',
        imageUrl: './src/assets/PersonalProjects/DIOPSIS.jpg',
        githubLink: 'https://github.com/AbdullahSh20/DIOPSIS' 
    },
    {
        title: 'Imapulation',
        description: 'Using Python, OpenCV, Tkinter, and Tensorflow, I developed a program that manipulates images. The program was mainly done to fulfill the need that I had for extracting human subjects from images into having a transparent background. The program also contains features like an interactive GUI for mask editing besides its remove background feature.',
        imageUrl: './src/assets/PersonalProjects/Imapulation.png',
        githubLink: 'https://github.com/AbdullahSh20/imapulation'
    }
]

const projects = [
    {
        "title": "Generative AI: Latent Space Exploration with StyleGAN and pSp",
        "description": "This project explores the creative potential of generative models by manipulating the latent space of StyleGAN3. I generated high-resolution synthetic faces and created a morphing animation between them by interpolating their latent vectors. The project culminates in using the Pixel2Style2Pixel (pSp) framework to encode real-world celebrity images into StyleGAN's latent space, then generating a seamless, looping animation between them to demonstrate powerful real-image editing and manipulation.",
        "imageUrl": "./src/assets/Coursework/Coursework13.png",
        "githubLink": "https://github.com/AbdullahSh20/ITU-COURSEWORK/tree/main/Deep%20Learning"
    },
    {
        "title": "Few-Shot vs. Zero-Shot Image Classification",
        "description": "This project addressed a 700-class image classification challenge using two distinct methodologies. First, I implemented a transfer learning solution by training a custom classifier on features from a fixed extractor. Second, I engineered a zero-shot pipeline using Grounding DINO and SAM2, creating an algorithm to classify images by matching text-prompted detections to labels with fuzzy logic, without any network training. This project provided a direct comparison between a classic few-shot training approach and a modern, prompt-based vision model system.",
        "imageUrl": "./src/assets/Coursework/Coursework12.png",
        "githubLink": "https://github.com/AbdullahSh20/ITU-COURSEWORK/tree/main/Deep%20Learning"
    },
    {
        "title": "Voice, Vision, and Evolution in Deep Learning",
        "description": "This project showcases a diverse range of deep learning applications. For the Turkish Academy Voice Challenge, I built a custom CNN to classify audio clips of prominent academicians from mel-spectrograms. In the Mine Game, I engineered a solution where a fine-tuned ResNet18 analyzes real-time screenshots to detect visual cues, guiding a character safely through a maze using a DFS pathfinding algorithm. Finally, in an evolutionary computing task, I enhanced a soft robot's locomotion by deepening the neural network architecture of its decentralized controller and refining mutation parameters to successfully co-optimize its morphology and control.",
        "imageUrl": "./src/assets/Coursework/Coursework11.png",
        "githubLink": "https://github.com/AbdullahSh20/ITU-COURSEWORK/tree/main/Deep%20Learning"
    },
    {
        title: "Gofies Hospital Management System (GHMS)",
        description: "As a team lead and backend/cloud engineer, I contributed to building a cloud-native Hospital Management System that supports multiple hospitals, clinics, and medical staff. The system was composed of microservices developed with Express.js and Flask, each containerized using Docker and orchestrated via Docker Compose. I configured a production environment using GCP, Nginx, and CI/CD pipelines with GitHub Workflows. Additionally, I developed a medical multi-modal expert system using PyTorch and Hugging Face, and integrated full observability with Prometheus, Grafana, Loki, and Promtail.",
        imageUrl: "./src/assets/Coursework/Coursework10.jpg",
        githubLink: "https://github.com/Gofies/GHMS"
    },
    {
        title: "Autonomous Exploration and Object Retrieval Robot",
        description: " I developed an autonomous mobile robot in ROS and Gazebo that performs a full find-and-fetch task cycle. The system integrates multiple algorithms: it explores unknown environments using a vantage point selection strategy, plans optimal routes with A* pathfinding, and generates smooth trajectories using B-Spline smoothing. Object detection is achieved with OpenCV using HSV color segmentation to identify the target. The robot navigates these paths with the Pure Pursuit algorithm while employing a reactive-control layer for real-time obstacle avoidance, successfully demonstrating a robust, end-to-end autonomous solution.",
        imageUrl: "./src/assets/Coursework/Coursework9.jpg",
        githubLink: "https://github.com/AbdullahSh20/ITU-COURSEWORK/tree/main/robotics/project"
    },
    {
        title: "TurtleBot the Ratatouille",
        description: "Using ROS2, Python, and Gazebo, I developed a waypoint navigation system for a TurtleBot tasked with completing a series of objectives in a simulated restaurant. The solution implements the Pure Pursuit algorithm for path tracking and dynamic obstacle avoidance by processing LaserScan data. The system ensures the robot smoothly maneuvers around unexpected objects, manages tasks at waypoints with simulated delays, and achieves precise orientation upon arrival at each destination.",
        imageUrl: "./src/assets/Coursework/Coursework8.jpg",
        githubLink: "https://github.com/AbdullahSh20/ITU-COURSEWORK/tree/main/robotics/HW2"
    },
    {
        title: "TurtleBot the Explorer",
        description: "Using ROS2, Gazebo, and Python, I developed a robotic exploration and mapping solution for a TurtleBot. The robot autonomously navigates and creates a map of an unknown environment by implementing global path planning with A* search and local obstacle avoidance using LaserScan data. Path following is achieved using the Pure Pursuit algorithm. This project demonstrates the integration of multiple robotics concepts to achieve autonomous exploration within a simulated Gazebo environment.",
        imageUrl: "./src/assets/Coursework/Coursework7.jpg",
        githubLink: "https://github.com/AbdullahSh20/ITU-COURSEWORK/tree/main/robotics/HW1"
    },
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
    },
    {
        title: 'Command line Shell',
        description: 'Using C, I developed a command line shell that supports multiple commands, command chaining, and command piping. The shell also supports the execution of system commands via its prompt mode and the execution of scripts using its batch mode. The shell was developed using the system calls fork, exec, and wait, and was documented using markdown files.',
        imageUrl: './src/assets/Coursework/Coursework4.png',
        githubLink: 'https://github.com/AbdullahSh20/ITU-COURSEWORK/tree/main/Operating%20Systems/HW1'
    },
    {
        title: 'Multithreaded Web Server',
        description: 'Using C, I developed a multithreaded web server that supports multiple clients, multiple requests, and multiple file types. The server was developed using the system calls socket, bind, listen, accept, and read, and was documented using markdown files. And the multithreading was implemented using the threads and semaphores.',
        imageUrl: './src/assets/Coursework/Coursework5.png',
        githubLink: 'https://github.com/AbdullahSh20/ITU-COURSEWORK/tree/main/Operating%20Systems/HW3'
    },
    {
        title: 'SocialShoppers application interface',
        description: 'Using TypeScript, React, and tailwindcss, I developed a shopping application interface that contains a product list, a product detail page, a shopping cart, checkout page, and it incorporates social media features, thus there is a feed and a community page. The application was made as a prototype for an innovation and entrepreneurship course with the code BLG442E in ITU.',
        imageUrl: './src/assets/Coursework/Coursework6.png',
        githubLink: 'https://github.com/AbdullahSh20/SocialShoppers'
    }
]

export default ProjectsPage;