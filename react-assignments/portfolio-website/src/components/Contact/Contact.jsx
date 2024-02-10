
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import { Link } from 'react-router-dom';

const ContactPage = () => {
    const [isFormSubmitted, setFormSubmitted] = useState(false);

    // Check local storage on page load to determine if form has been submitted
    useEffect(() => {
        const isSubmitted = localStorage.getItem('isFormSubmitted');
        if (isSubmitted) {
            setFormSubmitted(true);
        }
    }, []);

    // Clear local storage when the component unmounts
    useEffect(() => {
        return () => {
            localStorage.removeItem('isFormSubmitted');
        };
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform additional logic or submit the form data

        // Set local storage to mark the form as submitted
        localStorage.setItem('isFormSubmitted', 'true');

        // Update state to re-render the component
        setFormSubmitted(true);
    };
    if (isFormSubmitted) {
        return (
            <div className="contact-container">
                <header className="text-center">
                    <h1 className="display-3 text-primary">Contact Me</h1>
                    <p className="lead text-muted">Thanks for reaching out! Your message has been received.</p>
                </header>

                <section className="intro-section text-center">
                    <Link to={`/`}>
                        <button className="btn btn-primary mr-2">Home</button>
                    </Link>
                    <Link to={`/projects`}>
                        <button className="btn btn-primary mx-2">Projects</button>
                    </Link>
                    <button className="btn btn-primary m1-2">Skills</button>
                </section>
                <footer className="text-center mt-4">
                    <p className="text-muted">&copy; 2024 DHRUMIL SHAH</p>
                </footer>
            </div>
        );
    }
    return (
        <div className="contact-container">
            <header className="text-center">
                <h1 className="display-3 text-primary">Contact Me</h1>
                <p className="lead text-muted">Feel free to reach out!</p>
            </header>

            <section className="contact-section">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Your Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter your name"
                            required // Marked as required for validation
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            required // Marked as required for validation
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Your Message</label>
                        <textarea
                            className="form-control"
                            id="message"
                            rows="4"
                            placeholder="Type your message"
                            required // Marked as required for validation
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </section>

            <section className="intro-section text-center">
                <Link to={`/`}>
                    <button className="btn btn-primary mr-2">Home</button>
                </Link>
                <Link to={`/projects`}>
                    <button className="btn btn-primary mx-2">Projects</button>
                </Link>
                <button className="btn btn-primary m1-2">Skills</button>
            </section>
            <footer className="text-center mt-4">
                <p className="text-muted">&copy; 2024 DHRUMIL SHAH</p>
            </footer>
        </div>
    );
};

export default ContactPage;