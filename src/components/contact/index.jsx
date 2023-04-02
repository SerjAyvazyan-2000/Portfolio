import "./style.scss"
import {AiOutlineMail} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"
import emailjs from "emailjs-com"
import {useRef} from "react"


const Contact = () => {


    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_xip4nis', 'template_1c0qm9n', form.current, 'pp6TwyxOmOcVm8rmi')
        e.target.reset()
    };
    return <section id="contact">
        <div className="G-container">
            <div className="contact-boxes">
                <h5>Get In Touch</h5>
                <h2>Contact Me</h2>

                <div className=" contact-container">
                    <div className="contact-options">
                        <article className="contact-option">
                            <AiOutlineMail/>
                            <h4>Email</h4>
                            <h5>ayvazyanserj3@gmail.com</h5>
                            <a href="mailto:ayvazyanserj3@gmail.com">Send a message</a>
                        </article>

                        <article className="contact-option">
                            <BsWhatsapp/>
                            <h4>Whatsapp</h4>
                            <h5>+37477027369</h5>
                            <a href="https://api.whatsapp.com/send?phone+37477027369">Send a message</a>
                        </article>

                        <article className="contact-option">
                            <BsWhatsapp/>
                            <h4>Telegram</h4>
                            <h5>+37477027369</h5>
                            <a href="https://t.me/SerzhAyvazyan2000">Send a message</a>
                        </article>
                    </div>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name="name" placeholder="Your Full Name" required/>
                            <input type="email" name="emal" placeholder="Your Email" required/>
                            <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                            <button className="btn btn-primary">Send Message</button>


                        </form>
                    </div>

                </div>
            </div>
        </div>
    </section>
}

export default Contact