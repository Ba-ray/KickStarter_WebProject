import React from 'react';
import './ContactUser.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const contactData = [
    { icon: faMapMarkerAlt, title: 'Location', content: 'A108 Adam Street, New York, NY 535022' },
    { icon: faEnvelope, title: 'Email', content: 'info@example.com' },
    { icon: faPhone, title: 'Call', content: '+1 5589 55488 55s' },
  ];

  return (
    <>
      <section id="contact" className="contactUser">
        <div className="container-contactUser">
          <div className="section-title">
            <h2>Contact</h2>
          </div>

          <div className="row mt-1">
            {contactData.map((item, index) => (
              <div key={index} className="col-lg-4">
                <div className="info">
                  <div className="address">
                    <FontAwesomeIcon icon={item.icon} size="lg" style={{ marginRight: "3%", }} />
                    <span style={{ fontSize: '1.5rem' }}>
                      <strong style={{ color: '#80e3b7' }}>{item.title}:</strong>
                    </span>

                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-lg-8 mt-5 mt-lg-0 message">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row ">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
