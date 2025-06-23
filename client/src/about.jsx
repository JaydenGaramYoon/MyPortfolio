import './About.css';

const About = () => {
    return (
        <div className="about-content">
            <div className="profile">
                <img src="./images/photo-of-me.png" alt="Profile" />
                <div className="profile-info">
                    <h3>Garam Yoon</h3>
                    <p>
                        As a highly skilled QA Analyst and Full-Stack Developer, I bring a strong technical foundation and a deep understanding of the software development lifecycle. My expertise spans both front-end and back-end technologies, allowing me to effectively contribute to all stages of development. I am committed to delivering high-quality, bug-free applications through rigorous testing and efficient development practices. In addition to my technical capabilities, I excel in communication, ensuring seamless collaboration with cross-functional teams and stakeholders to meet project objectives and timelines. I am passionate about problem-solving and dedicated to delivering results that drive business success.
                    </p>
                    <div className="profile-details">
                        <p>QA analyst | Full-stack Developer | Strong Communicator</p>
                        <p>Location: Toronto, Canada</p>
                        <p><a href="./Resume.pdf">Resume</a></p>
                    </div>
                </div>
            </div>
            
            <div className="skills-section">
                <h3>Skills</h3>
                <ul className="skills">
                    <span>- Jira</span>
                    <span>- Version Control (Git)</span>
                    <span>- Postman API</span>
                    <span>- Agile Methodologies</span>
                    <span>- Jest</span>
                    <span>- JavaScript</span>
                    <span>- React</span>
                    <span>- Node.js</span>
                    <span>- Java</span>
                    <span>- SQL</span>
                    <span>- HTML 5</span>
                    <span>- CSS 3</span>
                    <span>- C#</span>
                    <span>- Python</span>
                </ul>
            </div>

            <div className="certificates-section">
                <h3>Certificates</h3>
                <div className="certificates">
                    <ul>
                        <li>ISTQB Certified Tester | International Software Testing Qualifications Board | 2025</li>
                        <li>Software Testing and Automation Specialization | University of Minesota | 2025</li>
                        <li>DevOps and Software Engineering Professional Certificate | IBM | 2025</li>
                        <li>Meta Front-End Developer Professional Certificate | Meta | 2025</li>
                        <li>Postman API Fundamentals | Postman | 2025</li>
                        <li>Hackathon Winner | Centennial College | 2024</li>
                    </ul>
                </div>
            </div>

            <div className="education-section">
                <h3>Education</h3>
                <div className="education">
                    <ul>
                        <li>Diploma in Software Engineering Technican | Centennial College | 2024-2025</li>
                        <li>Bachelor in English Education | Korea National University of Education | 2017-2021</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
