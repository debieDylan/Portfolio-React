import "./navbar.scss"

const Navbar = ({active, setActive}) => {
    return (
        <div className={"navbar " + (active && "active")}>
            <div className="n-wrapper">
                <div className="n-left">
                    <div className="n-links" onClick={() => setActive(!active)}>
                        <a href="#intro">Home</a>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
                <div className="n-right">
                    <div className="n-hamburger" onClick={() => setActive(!active)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar