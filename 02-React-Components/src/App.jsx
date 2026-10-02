import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";


const navigationLinks = [
    { label: "Home", href: "#home" },
    { label: "Components", href: "#components" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
];


const projects = [
    {
        title: "Guru AI",
        category: "AI / Full-Stack",
        description:
            "AI-powered career platform for resume analysis, personalized career paths, job discovery, and resume-to-job matching.",
        technologies: [
            "Python",
            "Flask",
            "Google Gemini"
        ]
    },
    {
        title: "CrowdShield",
        category: "Computer Vision",
        description:
            "Real-time computer-vision system for analyzing crowd density, movement, bottlenecks, and safety risks.",
        technologies: [
            "Python",
            "OpenCV",
            "Computer Vision"
        ]
    },
    {
        title: "Unravel AI",
        category: "AI / Embedded Systems",
        description:
            "Edge-AI autonomous drone system designed for navigation, environmental monitoring, and emergency detection.",
        technologies: [
            "Python",
            "MAVLink",
            "OpenCV"
        ]
    },
    {
        title: "Smart Agriculture",
        category: "IoT / Automation",
        description:
            "IoT-based agricultural monitoring and automation system with configurable environmental control logic.",
        technologies: [
            "IoT",
            "Automation",
            "Sensors"
        ]
    }
];


function App() {
    return (
        <div className="app">

            <Header
                name="Alina Washim"
                links={navigationLinks}
            />


            <main>

                {/* HOME */}

                <section id="home" className="hero">

                    <div className="container">

                        <div className="hero-badge">
                            React Components Practice
                        </div>

                        <h1>
                            Building reusable
                            <span> React components.</span>
                        </h1>

                        <p>
                            A practical React application demonstrating
                            reusable components, props, state, and dynamic
                            rendering.
                        </p>

                        <div className="hero-actions">

                            <a href="#components">
                                <Button>
                                    Explore Components
                                </Button>
                            </a>

                            <a href="#contact">
                                <Button variant="secondary">
                                    Try the Form
                                </Button>
                            </a>

                        </div>

                    </div>

                </section>


                {/* COMPONENTS */}

                <section id="components" className="section">

                    <div className="container">

                        <div className="section-heading">

                            <span>
                                01 — COMPONENTS
                            </span>

                            <h2>
                                Five reusable building blocks
                            </h2>

                            <p>
                                Each component is designed to be reused
                                throughout the application by passing
                                different props.
                            </p>

                        </div>


                        <div className="component-grid">

                            <div className="component-card">
                                <span>01</span>
                                <h3>Header</h3>
                                <p>
                                    Reusable navigation component that
                                    receives the name and navigation links
                                    through props.
                                </p>
                            </div>

                            <div className="component-card">
                                <span>02</span>
                                <h3>Footer</h3>
                                <p>
                                    Reusable footer component that receives
                                    the displayed name and year as props.
                                </p>
                            </div>

                            <div className="component-card">
                                <span>03</span>
                                <h3>Card</h3>
                                <p>
                                    Reusable project card that displays
                                    different content through props.
                                </p>
                            </div>

                            <div className="component-card">
                                <span>04</span>
                                <h3>Button</h3>
                                <p>
                                    Reusable button supporting different
                                    visual variants through props.
                                </p>
                            </div>

                            <div className="component-card">
                                <span>05</span>
                                <h3>Form</h3>
                                <p>
                                    Interactive contact form using React
                                    state to manage user input.
                                </p>
                            </div>

                        </div>

                    </div>

                </section>


                {/* DYNAMIC RENDERING */}

                <section id="projects" className="section section-dark">

                    <div className="container">

                        <div className="section-heading">

                            <span>
                                02 — PROPS + DYNAMIC RENDERING
                            </span>

                            <h2>
                                Projects rendered from data
                            </h2>

                            <p>
                                These cards are generated dynamically using
                                the reusable Card component and JavaScript
                                array mapping.
                            </p>

                        </div>


                        <div className="projects-grid">

                            {projects.map((project) => (
                                <Card
                                    key={project.title}
                                    title={project.title}
                                    category={project.category}
                                    description={project.description}
                                    technologies={project.technologies}
                                />
                            ))}

                        </div>

                    </div>

                </section>


                {/* STATE */}

                <section className="section">

                    <div className="container state-section">

                        <div className="section-heading">

                            <span>
                                03 — REACT STATE
                            </span>

                            <h2>
                                Interactive form
                            </h2>

                            <p>
                                Enter some information below and submit the
                                form. React state controls the fields and
                                success message dynamically.
                            </p>

                        </div>


                        <div className="form-wrapper">
                            <Form />
                        </div>

                    </div>

                </section>


                {/* CONTACT */}

                <section id="contact" className="section contact-section">

                    <div className="container">

                        <div className="contact-box">

                            <span>
                                REACT PRACTICE PROJECT
                            </span>

                            <h2>
                                Components make applications easier to build.
                            </h2>

                            <p>
                                Header, Footer, Card, Button, and Form are
                                separated into reusable React components.
                            </p>

                        </div>

                    </div>

                </section>

            </main>


            <Footer
                name="Alina Washim"
                year="2026"
            />

        </div>
    );
}

export default App;