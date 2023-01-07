import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_074n83u', 'template_y4kr44a', formRef.current, '2kUtiNKPzdmo_Oz3h')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setEmailSent(true);
  }

  return (
    <>
      <section id="home" className="main">
        <section className="container">
          <div className="col-md-9 mb-md-0 mb-5" />

          <form id="contact-form" name="contact-form" ref={formRef} onSubmit={sendEmail}>

            <h3 id="contact-me" className="h1-responsive font-weight-bold text-center my-4">Contact me</h3>

            <p id="contact-p" className="text-center w-responsive mx-auto mb-5">Please don't hesitate to contact me directly
              in case you have any questions. <br />I'll come back to you within
              a matter of hours to reply to your inquiries.</p>

            <section className="container">
              <div id="emailInput"  className="row">
                <div className="col-sm-10 col-lg-4">
                  <div className="md-form mb-0">
                    <label htmlFor="name" className="">Your name</label>
                    <input type="text" id="name" name="user_name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                </div>

                <div id="emailInput" className="col-sm-10 col-lg-4">
                  <div className="md-form mb-0">
                    <label htmlFor="email" className="">Your email</label>
                    <input type="email" id="email" name="user_email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />

                  </div>
                </div>

              </div>

              <div id="emailInput" className="row">
                <div className="col-sm-10 col-lg-4">
                  <div className="md-form mb-0">
                    <label htmlFor="subject" className="">Subject</label>
                    <input type="text" id="subject" name="user_subject" className="form-control" value={subject} onChange={(e) => setSubject(e.target.value)} />

                  </div>
                </div>
              </div>

              <div id="emailInput"  className="row my-flex-card">

                <div className="col-sm-4 col-md-8 col-lg-4">

                  <div className="md-form">
                    <label htmlFor="message">Your message</label>
                    <textarea type="text" id="message" name="user_message" rows="2"
                      className="form-control md-textarea" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    <br />
                    <br />
                  </div>

                </div>
              </div>
            

            {emailSent && <h2 id="contact-me" className="message-sent-by-me-after-email">Thank you for your message!</h2>}

            <div id="contactInfoMain" className="row my-flex-card">
              <div className="col-md-8 col-lg-4 text-center">
                <ul className="list-unstyled mb-0">
                  <li id="contactInfo"><i className="fas fa-map-marker-alt fa-2x"></i>
                    Alameda, CA 94502, USA
                  </li>
                  <li id="contactInfo"><i className="fas fa-phone mt-4 fa-2x"></i>
                    (001) 510-928-6806
                  </li>
                  <li id="contactInfo"><i className="fas fa-envelope mt-4 fa-2x"></i>
                    moisedia7@gmail.com
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center text-md-left">
              <button id="contact-submit" disabled={!name || !message || !subject || !email} type="submit" className="btn btn-primary"
              >Send</button>
            </div>
            <div className="status"></div>
            </section>
          </form>

        </section>
      </section>
    </>
  )
}
export default Contact
