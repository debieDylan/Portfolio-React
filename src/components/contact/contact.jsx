import "./contact.scss"
import { MdOutlineEmail, MdPhone, MdLocationPin, MdShare } from 'react-icons/md'
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_6u0mk1i', 'template_macjfyu', formRef.current, 'LcsHyox3-uvAJyTvk')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <section id="contact" className="contact">
            <div className="contact-bg"></div>
            <div className="container">
                <div className="contact-box">
                    <div className="contact-left">
                        <div className="contact-info-item">
                            {<MdPhone className="contact-icon" size={30} />}
                            +324 87 46 16 60
                        </div>
                        <div className="contact-info-item">
                            {<MdOutlineEmail className="contact-icon" size={30} />}
                            debie.dylan@gmail.com
                        </div>
                        <div className="contact-info-item">
                            {<MdLocationPin className="contact-icon" size={30} />}
                            2170 Merksem, Antwerp Belgium
                        </div>
                        <div className="contact-info-item">
                        <MdShare className="contact-icon" size={30} />
                                <div className="contact-links">
                                    <a href="https://github.com/debieDylan?tab=repositories" target="_blank" rel="noreferrer">Github</a>
                                    <a href="https://www.linkedin.com/in/dylan-de-bie-12ba461b4/" target="_blank" rel="noreferrer">LinkedIn</a>
                                </div>
                        </div>
                    </div>
                    <div className="contact-right">
                        <h2>Contact me</h2>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" className="field" placeholder="Your name" required={true}/>
                            <input type="email" className="field" placeholder="Your email" required={true}/>
                            <input type="text" className="field" placeholder="Subject" required={true}/>
                            <textarea type="text" className="field area" placeholder="message" required={true}></textarea>
                            <button className="btn">Send</button>
                            {done && " Thanks for sending a message!"}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact