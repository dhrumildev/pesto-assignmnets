
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './HomePage.css';
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
        <div className="home-container">
            <header className="text-center">
                <h1 className="display-3">Dhrumil Shah</h1>
                <p className="lead">Sr. Software Engineer</p>
            </header>

            <section className="intro-section text-center">
                <p>
                    As a Senior Fullstack Developer with experience in both enterprise-level and startup environments, I have a proven track record of successfully developing and deploying blockchain solutions. With expertise in technologies such as JavaScript, NodeJS, Angular, ReactJS, Hyperledger Fabric, AWS, GCP, Azure, Solidity, and more, I have the skills necessary to design and implement secure and scalable full stack applications. I have also demonstrated strong leadership and technical leading abilities, mentoring junior developers and leading successful projects. Accomplishments include being recognized as Employee of the Year and Employee of the Month multiple times, as well as achieving high rankings in technical competitions. I am now seeking a challenging role as a Sr. Software Developer where I can continue to grow and contribute to the success of a dynamic organization.
        </p>
                <p>
                    <img src="myskills.png" alt="Dhrumil Skills" />
                </p>
                <Link to={`/projects`}>
                    <button className="btn btn-primary mr-2">Projects</button>
                </Link>
                <Link to={`/contact`}>
                    <button className="btn btn-primary mx-2">Contact</button>

                </Link>
                <Link to={'/skills'}>
                    <button className="btn btn-primary m1-2">Skills</button>
                </Link>
            </section>



            <footer className="text-center mt-4">
                <p className="text-muted">&copy; 2024 DHRUMIL SHAH</p>
            </footer>
        </div>
    );
};

export default HomePage;
