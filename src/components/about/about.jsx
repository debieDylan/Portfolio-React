import "./about.css"
import profile from '../../assets/images/profile-w-min.jpg'

import { SiCsharp, SiDotnet, SiTypescript, SiFirebase, SiMicrosoftsqlserver } from 'react-icons/si'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaAngular } from 'react-icons/fa'
import { IoLogoIonic } from 'react-icons/io'
import { Row, Col, Container } from 'react-bootstrap'

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img src={profile} alt="profile" className="about-img" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title line">About Me</h1>
                <p className="about-sub">I'm an aspiring Developer based in Antwerp, Belgium.</p>
                <br></br>
                <h1 className="about-title">Skills</h1>
                <div className="about-skills">
                    <div className="about-skills-text">
                        <p>My capabilities are build with solid foundations. C#, HTML5, CSS3, JS/ES6
                            and Typescript are the core of my programming languages.
                        </p>
                        <p>I further enhance my code by having experience in many frameworks, including: .NET, React,
                            Angular and by further extend Ionic Framework.
                        </p>
                        <p>Last but not least, I have experience using SQL-Databases and , such as SQL-server,
                            aswell as NoSQL-databases such as Google Firebase.
                        </p>
                    </div>
                    <Container className="about-icons">
                        <Row>
                            <Col>
                                <div className="about-icon-item">
                                    <FaHtml5 size={30} />
                                    HTML5
                                </div>
                            </Col>
                            <Col>
                                <div className="about-icon-item">
                                    <FaCss3Alt size={30} />
                                    CSS3
                                </div>
                            </Col>
                            <Col>
                                <div className="about-icon-item">
                                    <FaJsSquare size={30} />
                                    Javascript
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="about-icon-item">
                                    <SiTypescript size={30} />
                                    Typescript
                                </div>
                            </Col>
                            <Col>
                                <div className="about-icon-item">
                                    <SiDotnet size={30} />
                                    .Net/ASP
                                </div>
                            </Col>
                            <Col>
                                <div className="about-icon-item">
                                    <FaReact size={30} />
                                    React
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="about-icon-item">
                                    <FaAngular size={30} />
                                    Angular
                                </div>
                            </Col>
                            <Col>
                                <div className="about-icon-item">
                                    <IoLogoIonic size={30} />
                                    Ionic
                                </div>
                            </Col>
                            <Col>
                                <div className="about-icon-item">
                                    <SiFirebase size={30} />
                                    Firebase
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </section>
    )
}

export default About
/*
(
    <div className="about-icons">
                        <div className="about-icon-item">
                            <FaHtml5 size={30} />
                            HTML5
                        </div>
                        <div className="about-icon-item">
                            <FaCss3Alt size={30} />
                            CSS3
                        </div>
                        <div className="about-icon-item">
                            <FaJsSquare size={30} />
                            Javascript
                        </div>
                        <div className="about-icon-item">
                            <SiTypescript size={30} />
                            Typescript
                        </div>
                        <div className="about-icon-item">
                            <SiDotnet size={30} />
                            .Net/ASP
                        </div>
                        <div className="about-icon-item">
                            <FaReact size={30} />
                            React
                        </div>
                        <div className="about-icon-item">
                            <FaAngular size={30} />
                            Angular
                        </div>
                        <div className="about-icon-item">
                            <IoLogoIonic size={30} />
                            Ionic
                        </div>
                        <div className="about-icon-item">
                            <SiFirebase size={30} />
                            Firebase
                        </div>
                        </div>

                        <div className="about-icon-item">
                                <FaAngular size={30} />
                                Angular
                            </div>
                            <div className="about-icon-item">
                                <IoLogoIonic size={30} />
                                Ionic
                            </div>
                            <div className="about-icon-item">
                                <SiFirebase size={30} />
                                Firebase
                            </div>
)*/