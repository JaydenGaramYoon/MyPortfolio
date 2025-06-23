import './Services.css';

const Services = () => {
    return (
        <div className="services-content">
            <div className="services-container">
                <div className="services-section">
                    <h2>QA Tester Services</h2>
                    <div className="services-list">
                        <div className="service-item">
                            <p>Manual and automated software testing</p>
                            <p>Bug reporting and tracking</p>
                            <p>Test case design and execution</p>
                            <p>Regression and performance testing</p>
                            <p>Quality assurance consulting</p>
                        </div>
                    </div>
                </div>

                <div className="services-section">
                    <h2>Fullstack Engineer Services</h2>
                    <div className="services-list">
                        <div className="service-item">
                            <p>Web application development (frontend & backend)</p>
                            <p>API design and integration</p>
                            <p>Database design and management</p>
                            <p>Deployment and DevOps support</p>
                            <p>Code review and optimization</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
