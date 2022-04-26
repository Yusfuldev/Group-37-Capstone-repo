import React from "react";
import "./Contact.css";
import phone from "./phone.svg";
import envelope from "./envelope.svg";
import location from "./location-pin.svg";
function Contact() {
  return (
    <div class="contact-wrapper">
      <icon />
      <div className="title">
        <p>Get In Touch</p>
        <h2>Contact Us</h2>
      </div>
<br />
      <div className="contact">
        <form action="">
          <label htmlFor="Name">Your Name</label>
          <input type="text" placeholder="Name" id="Name" />
          <label htmlFor="Email">Email Address</label>
          <input type="email" placeholder="Email" id="Email" />
          <label htmlFor="Subject">Subject</label>
          <input type="text" placeholder="Subject" id="Subject" />
          <label htmlFor="Message">Message</label>
          <textarea
            name="Message"
            placeholder="Type your message"
            id="Message "
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="address">
          <h3>Office Address</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui ut
            fugit aliquam nobis, alias dolore ipsa delectus maxime!
            Reprehenderit, quidem. Velit consequatur quis ex blanditiis suscipit
            nesciunt quisquam deleniti quasi.
          </p>
          <div> <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
            <br />
          </div>
            <img src={phone} alt="" width="2%" />
            <span> +234grp37</span>
          </div>
          <div>
            <img src={envelope} alt="" width="2%" />
            <span> contact@grp37.io</span>
          </div>
          <div>
            <img src={location} alt="" width="2%" />
            <span> side hustle Lagos, Nigeria</span>
          </div> <br />
          <h4>Open Hours</h4> <hr />
          <ul>
            <li>
              Monday - Friday <span>9.00 am to 12 pm</span>
            </li>
            <li>
              Saturday <span>9.00 am to 10 pm</span>
            </li>
            <li>
              Sunday <span>10.00 am to 12 pm</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
