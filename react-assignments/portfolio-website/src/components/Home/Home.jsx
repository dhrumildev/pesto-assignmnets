
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './HomePage.css';


const HomePage = () => {
    return (
        <div className="home-container">
            <header className="text-center">
                <h1 className="display-3">Dhrumil Shah</h1>
                <p className="lead">Sr. Software Engineer</p>
            </header>
            <body>
                <section className="intro-section text-center">
                    <p>
                        Welcome to my portfolio! I'm a passionate software engineer with expertise
                        in back-end and front-end technologies.
        </p>
                    <p>
                        <img src="/Users/dhrumilshah/pesto-assignmnets/react-assignments/portfolio-website/src/components/Home/code_20240127_015001_via_10015_io.png" alt="Dhrumil Skills" />
                    </p>
                    <button className="btn btn-primary mr-2">Projects</button>
                    <button className="btn btn-primary mx-2">Contact</button>
                    <button className="btn btn-primary m1-2">Skills</button>

                </section>

            </body>


            <footer className="text-center mt-4">
                <p>&copy; 2024 Dhrumil Shah</p>
            </footer>
        </div>
    );
};

export default HomePage;
