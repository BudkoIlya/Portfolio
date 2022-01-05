import React, { useRef } from "react";
import styles from "./Contacts.module.css";
import { H2 } from "../Titles/Titles";
import { Fade } from "react-reveal";
import emailjs from "emailjs-com";

function Contacts() {
  const form = useRef();

  const onSubmit = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAIL_JS_SERVICES_ID}`,
        `${process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_EMAIL_JS_USER_ID}`
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.error(error.text);
        }
      );
  };

  return (
    <div id="contacts" className={styles.contacts}>
      <Fade>
        <div className={styles.container}>
          <H2>Contacts</H2>
          <form className={styles.formWrapper} ref={form} onSubmit={onSubmit}>
            <input
              type="text"
              className={styles.formArea}
              placeholder="Name"
              name="user_name"
            />
            <input
              type="text"
              className={styles.formArea}
              placeholder="Email"
              name="user_email"
            />
            <textarea
              cols="30"
              rows="10"
              className={styles.messageArea}
              placeholder="Your message"
              name="message"
            />
            <button className={styles.btnSubmit}>Send Message</button>
          </form>
        </div>
      </Fade>
    </div>
  );
}

export default Contacts;
