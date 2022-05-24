import "./intro.css"
import CV from '../../assets/files/cv.pdf'
import Me from '../../assets/images/Me-small-min.png'

const Intro = () => {
    return (
        <section id="intro" className="intro">
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
                    <a href={CV} download className="btn intro-button">
                        Download CV
                    </a>
                    <br></br>
                    <a href="#contact" className="btn intro-button">
                        Contact Me
                    </a>
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