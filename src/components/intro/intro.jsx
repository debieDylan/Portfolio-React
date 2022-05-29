import "./intro.scss"
import CV from '../../assets/files/cv.pdf'
import Me from '../../assets/images/Me-small-min.png'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"

const Intro = () => {
    return (
        <section id="intro" className="intro">
            <div className="scroll-down">Scroll Down</div>
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="intro-prename">Hello, My name is</h2>
                    <h1 className="intro-name">Dylan De Bie</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item">Fullstack Developer</div>
                            <div className="intro-title-item">.NET Developer</div>
                            <div className="intro-title-item">React Developer</div>
                            <div className="intro-title-item">Angular Developer</div>
                        </div>
                    </div>
                    <div className="intro-description">
                        I'm an aspiring developer based in Antwerp, Belgium, capable of developing
                        and designing modern websites, responsive apps and services of all sizes.
                    </div>
                    <div className="intro-buttons">
                        <a href={CV} download className="btn intro-button" onClick={(e) => e.target.blur()}>Download CV</a>
                        <a href="#contact" className="btn intro-button" onClick={(e) => e.target.blur()}>Contact Me</a>
                    </div>
                    <div className="intro-socials">
                        <a href="https://github.com/debieDylan" target="_blank" rel="noreferrer"><FaGithubSquare size={70}/></a>
                        <a href="https://www.linkedin.com/in/dylan-de-bie-12ba461b4/" target="_blank" rel="noreferrer"><FaLinkedin  size={70}/></a>
                    </div>
                </div>
            </div>
            <div className="intro-right">
                <div className="intro-bg"></div>
                <img src={Me} alt="Me" className="intro-img" />
            </div>
        </section>
    )
}

export default Intro