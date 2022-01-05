import React from "react";
import styles from "./Footer.module.css";
import telegramIcon from "./../../Assets/imgs/telegram2.svg";
import whatsapp from "./../../Assets/imgs/whatsapp.svg";
import headHunter from "./../../Assets/imgs/headHunter.svg"
import { Fade } from "react-reveal";

const whatsAppLink = "https://wa.me/79100409095?text=Вы%20нам%20подходите";
const telegramLink = "tg://resolve?domain=Budkoilya";
const headHunterLink = 'headHunter';

function Footer() {
  return (
    <div className={styles.footer}>
      <Fade>
        <div className={styles.container}>
          <p className={styles.name}>Ilya Budko</p>
          <div className={styles.blocks}>
            <div>
              <a href={telegramLink}>
                <img src={telegramIcon} alt="" />
              </a>
            </div>
            <div>
              <a href={whatsAppLink}>
                <img src={whatsapp} alt="" />
              </a>
            </div>
            <div className={styles.headHunter}>
              <a href={headHunterLink}>
                hh
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Footer;
