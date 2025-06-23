import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <section id="banner" className="section">
                <div className="section-content">
                    <div className="banner-content">
                        <div className="banner-photo">
                            <img src="./images/photo-of-me.png" alt="photo-of-me" />
                        </div>
                        <div className="banner-info">
                            <h1 className="name">Garam Yoon</h1>
                            <div className="roles">
                                <span className="role">Full-stack Developer</span>
                                <span className="role">QA Analyst</span>
                                <span className="role">Strong Communicator</span>
                            </div>
                            <div className="banner-redirection">
                                <Link to="/contact" className="btn">✉ Contacts</Link>
                                <Link to="/project" className="btn">Projects</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
