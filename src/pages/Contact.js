import React, { useState } from "react";
import "../App.css";
import Fade from "react-reveal/Fade";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function check(e) {
    if (e.target.value) {
      e.target.classList.add("not-empty");
    } else {
      e.target.classList.add("not-empty");
    }
  }

  function submitForm(e) {
    e.preventDefault();
    console.log("Form Submitted !");
    console.log("Name : ", name);
    console.log("Email : ", email);
    console.log("Message : ", message);
    alert("Successfully submitted");

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section id="contact">
      <div id="get-in-touch">
        <Fade left>
          <h2 className="section-title">Contact</h2>
        </Fade>
        <Fade right>
          <form
            className="contact-form row"
            onSubmit={(e) => {
              submitForm(e);
            }}
          >
            <div className="form-field col x-50">
              <input
                id="name"
                className="input-text js-input"
                type="text"
                required
                onKeyUp={(e) => check(e)}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="label" htmlFor="name">
                Name
              </label>
            </div>
            <div className="form-field col x-50">
              <input
                id="email"
                className="input-text js-input"
                type="email"
                required
                onKeyUp={(e) => check(e)}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="label" htmlFor="email">
                E-mail
              </label>
            </div>
            <div className="form-field col x-100">
              <input
                id="message"
                className="input-text js-input"
                type="text"
                required
                onKeyUp={(e) => check(e)}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <label className="label" htmlFor="message">
                Message
              </label>
            </div>
            <div className="form-field col x-100 align-center">
              <input className="submit-btn" type="submit" value="Submit" />
            </div>
          </form>
        </Fade>
      </div>
    </section>
  );
}

export default Contact;
