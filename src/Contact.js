import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container">
      <div className="contact-container">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.9634017864873!2d77.31120647495447!3d28.570861686879585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce443ba41023b%3A0x1da3eb684ea743f0!2sApeejay%20School%20-%20Noida!5e0!3m2!1sen!2sin!4v1722493232456!5m2!1sen!2sin"
            width="400vw"
            height="400vw"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
        <div className="text-container">
          <h2>For any Queries Contact Us at</h2>
          <p>
            <strong>Address:</strong> Apeejay School Noida, Sector-16A
          </p>
          <p>
            <strong>Email:</strong> skool.ms.nvd@apj.edu
          </p>
        </div>
      </div>
      <div className="contact-boxes">
        <div className="boxy">
          <h2>Moloy Sikka</h2>
          <p>
            <strong>President</strong>
          </p>
          <p>
            <strong>Email:</strong> paramoloy@gmail.com
          </p>
          <p>
            <strong>Phone Number:</strong> +91 96505 49484
          </p>
        </div>
        <div className="boxy">
          <h2>Ms. Sujata Bhardwaj</h2>
          <p>
            <strong>HOD Computer Science</strong>
          </p>
          <p>
            <strong>Email:</strong> sujata.bhardwaj@learn.apeejay.edu
          </p>
          <p>
            <strong>Phone Number:</strong> +91 92133 93707
          </p>
        </div>
        <div className="boxy">
          <h2>Vipul Mittal</h2>
          <p>
            <strong>Robotics President</strong>
          </p>
          <p>
            <strong>Email:</strong> vipulmittal803@gmail.com
          </p>
          <p>
            <strong>Phone Number:</strong> +91 95281 43384
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
