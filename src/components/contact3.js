import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact3.css';

const Contact3 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_hbna1gp',       // ✅ Your connected Gmail service ID
      'template_y1a95fa',      // ✅ Your EmailJS template ID
      form.current,
      '3SK5urL3Rd3glcbXF'      // ✅ Your public key from EmailJS
    ).then(
      () => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        alert('Failed to send message. Please try again.');
        console.error('EmailJS Error:', error);
      }
    );
  };

  return (
    <div id="Contact3" className="contact3-container">
      <div className="contact3-header">
        <p className="contact3-subtitle">Get in touch with us today!</p>
        <h2 className="contact3-title">Contact Us</h2>
        <p className="contact3-description">
          Let’s build something amazing together.<br />
          Whether you have a question or a bold idea,<br />
          we’re just a message away.<br />
          Reach out — we’d love to hear from you.
        </p>
      </div>

      <div className="contact-info">
        <img
          src="/email-icon.png"
          alt="Email"
          className="contact-icon"
        />
        <h3>Email</h3>
        <p>contact@agentpi.in</p>
      </div>

      <div className="contact3-form-container">
        <p className="contact3-form-title">
          We'd love to hear from you! Reach out via email or use the contact form below.
        </p>
        <form ref={form} onSubmit={sendEmail} className="contact3-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact3;
