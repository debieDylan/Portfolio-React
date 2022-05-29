import "./about.css"
import profile from '../../assets/images/profile-w-min.jpg'

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
                <div className="about-sub">
                    <p>I'm an aspiring Developer based in Antwerp, Belgium. Currently I'm studying for an
                        Associate Degree in computer programming at the University of Applied Sciences Thomas More.</p>
                    <p>I bolstered my creativity during my time
                        Studying Fine Arts. That alongside my natural critical mind, I excel at thinking outside the box.</p>
                    <br></br>
                </div>

                <h1 className="about-title">Skills</h1>
                <div className="about-sub">
                    <p>My capabilities are build with solid foundations. C#, JS/ES6
                        and Typescript are the core of my programming languages. HTML5 and CSS3 also belong in my repertoire.
                    </p>
                    <p>I further enhance my code by having experience in many frameworks, including: .NET, React,
                        Angular and by further extend Ionic Framework.
                    </p>
                    <p>Last but not least, I have experience using SQL-Databases and , such as SQL-server,
                        aswell as NoSQL-databases such as Google Firebase.
                    </p>
                </div>
            </div>
        </section >
    )
}

export default About