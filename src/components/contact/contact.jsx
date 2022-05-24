import "./contact.css"
import { MdOutlineEmail, MdPhone, MdLocationPin } from 'react-icons/md'
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import { FaGithub } from "react-icons/fa";

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        //eerst nog valideren?

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
            {/*<div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">Contact Me</h1>
                    <div className="contact-info">
                    <div className="contact-info-item">
                            {<MdPhone className="contact-icon" size={30}/>}
                            +324 87 46 16 60
                        </div>
                        <div className="contact-info-item">
                            {<MdOutlineEmail className="contact-icon" size={30}/>}
                            debie.dylan@gmail.com
                        </div>
                        <div className="contact-info-item">
                            {<MdLocationPin className="contact-icon" size={30}/>}
                            2170 Merksem, Antwerp Belgium
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-description">
                        <strong>Ask away!</strong> Get in touch. I'm always interested to hear about.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" required={true}/>
                        <input type="text" placeholder="Subject" name="user_subject" required={true}/>
                        <input type="email" placeholder="Email" name="user_email" required={true}/>
                        <textarea rows={5} placeholder="Message" name="message" required={true}/>
                        <button>Submit</button>
                        {done && " Thanks for sending a message!"}
                    </form>
                </div>
            </div>*/}
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
                            <a href="https://github.com/debieDylan?tab=repositories" target="_blank" rel="noreferrer">
                                {<FaGithub className="contact-icon" size={30} />}
                                My Github
                            </a>
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