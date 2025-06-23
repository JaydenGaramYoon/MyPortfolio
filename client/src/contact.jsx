import React, { useState } from 'react'; //to use state in functional components
import { useNavigate } from 'react-router-dom'; // For redirection
import './Contact.css';

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(''); 
    // States(firstName,lastName,contactNumber,..) : hold the message inputs
    //useState : React Hook that allows to add React state to function components
    const navigate = useNavigate(); // Hook to get the navigate function

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Log the data (for demonstration purposes - replace with your logic)
        console.log('Form Data:', { firstName, lastName, contactNumber, email, message });

        // Redirect to the Home Page - using '/' for the root path which is used in the MainRouter
        navigate('/'); 
    };

    return (
        <div className="contact-content">
            <div className="contact-form">
                <h2>Contact Me</h2>

                <div className="contact-info">
                    <span>
                        <a href="mailto:rkfka95536@gmail.com">
                            <span className="icon-email">✉</span>
                        </a>
                    </span>
                    <span>
                    <a href="https://www.linkedin.com/in/garam-yoon-610245326">
                            <span className="icon-linkedin">LinkedIn</span>
                        </a>
                    </span>
                    <span>
                        <a href="https://github.com/JaydenGaramYoon">
                            <span className="icon-github">GitHub</span>
                        </a>
                    </span>
                    <span>
                        <a href="https://www.notion.so/1e097141ccc38075bc31eb034c0910ef?v=1e097141ccc380219636000c91bf3741&pvs=4">
                            <span className="icon-notion">Notion</span>
                        </a>
                    </span>
                </div>

                <form onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contactNumber">Contact Number:</label>
                        <input
                            type="tel"
                            id="contactNumber"
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;