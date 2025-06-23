import React, { useState } from 'react';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'Flashbot: The Color Click Challenge Game',
        thumbnail: './images/flashbot.png',
        description: 'Flashbot is a fun and interactive game that challenges players to click on the correct color as quickly as possible. The game is designed to test your reflexes and color recognition skills, making it a great way to pass the time and improve your cognitive abilities.',
        technologies: 'Vanlia JavaScript, HTML5, CSS3',
        role: 'Project Management, Frontend, Backend Developer',
        github: 'https://github.com/JaydenGaramYoon/FlashBot',
        demo: 'https://jaydengaramyoon.github.io/FlashBot/'
    },
    {
        id: 2,
        title: 'AI Student Buddy Chatbot',
        thumbnail: './images/AIStudentBuddy.jpg',
        description: 'AI Student Buddy Chatbot is a virtual assistant designed to help students with their academic needs. The chatbot uses natural language processing and machine learning algorithms to understand student queries and provide relevant information.',
        technologies: 'Python, Keras, Pandas, Numpy, HTML5, CSS3',
        role: 'Project Management, Frontend, Backend Developer',
        github: 'https://github.com/JaydenGaramYoon/College-Student-Buddy-Textbased-Chatbot'
    },
    {
        id: 3,
        title: 'Spa Website',
        thumbnail: './images/spa.png',
        description: 'Spa Website is a modern and responsive website designed for a spa and wellness center. The website features a clean and elegant design, with easy navigation and a user-friendly interface. It provides information about the spa\'s services, pricing, and location, making it easy for customers to book appointments online.',
        technologies: 'HTML5, CSS3',
        role: 'Project Management, Frontend Developer',
        github: 'https://github.com/JaydenGaramYoon/Spa-Website',
        demo: 'https://taupe-caramel-7e05b7.netlify.app/homepage'
    }
];

const Project = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openProject = (project) => {
        setSelectedProject(project);
    };

    const closeProject = () => {
        setSelectedProject(null);
    };

    return (
        <div className="projects-content">
            <div className="projects-grid">
                {projects.map((project) => (
                    <div 
                        key={project.id} 
                        className="project-card"
                        onClick={() => openProject(project)}
                    >
                        <img 
                            src={project.thumbnail} 
                            alt={project.title}
                            className="project-thumbnail"
                        />
                        <h3 className="project-title">{project.title}</h3>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="project-modal">
                    <div className="modal-content">
                        <button 
                            className="close-modal"
                            onClick={closeProject}
                        >
                            &times;
                        </button>
                        <div className="project-details">
                            <h2>{selectedProject.title}</h2>
                            <div className="project-image">
                                <img 
                                    src={selectedProject.thumbnail} 
                                    alt={selectedProject.title}
                                />
                            </div>
                            <div className="project-info">
                                <p>{selectedProject.description}</p>
                                <div className="project-meta">
                                    <p><strong>Technologies:</strong> {selectedProject.technologies}</p>
                                    <p><strong>Role:</strong> {selectedProject.role}</p>
                                    <div className="project-links">
                                        {selectedProject.github && (
                                            <a 
                                                href={selectedProject.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="project-link"
                                            >
                                                GitHub Repository
                                            </a>
                                        )}
                                        {selectedProject.demo && (
                                            <a 
                                                href={selectedProject.demo} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="project-link"
                                            >
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Project;
