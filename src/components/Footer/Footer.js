import React from "react";
import styles from './Footer.module.css';
import fb from '../../assets/home/facebook.png';
import linkdin from '../../assets/home/linkdin.png';
import insta from '../../assets/home/insta.png';

const Footer = () =>{
    const Foter = () => new Date().getFullYear();
    return (
      <>
        <div
          style={{
            backgroundColor: '#2b2b2b',
            paddingTop: '89px',
            paddingBottom: '90px',
          }}
        >
          <div className="container">
            <div className="row">
              <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                <p className={styles.logo}>Prosoft</p>
                <p className={styles.text}>
                  Stop wasting time and money designing and managing strategy
                  that doesn’t get results. Happiness guaranteed!
                </p>
                <p className={styles.text}>Quick service delivery!</p>
                <p className={styles.text}>Affordable prices!</p>
                <div className={styles.social_logo}>
                  <img src={fb} alt="fb" className={styles.img} />
                  <img src={linkdin} alt="in" className={styles.img} />
                  <img src={insta} alt="insta" className={styles.img} />
                </div>
              </div>

              <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                <p className={styles.head}>Services</p>
                <p className={styles.text}>
                  Km 7 Abak road, Uyo, Akwa Ibom state
                </p>
                <p className={styles.text}>prosoftlimited@gmail.com</p>
                <p className={styles.text}>(234) 80-32668874</p>
              </div>

              <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                <p className={styles.head}>Head Office</p>
                <p className={styles.text}>
                  Mojsija Zecevica, Berane, Montenegro
                </p>
                <p className={styles.text}>prosoftlimited@gmail.com</p>
                <p className={styles.text}>(671) 555-0110</p>
              </div>

              <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                <p className={styles.head}>Opening Hours</p>
                <p className={styles.text}>Mon - Sat : 8:00 - 17:00</p>
                <p className={styles.text}>Sun : Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundColor: '#2b2b2b', borderTop: 'solid 1px #707070' }}
        >
          <p className={styles.bottom}>
            Copyright © {Foter()} All right reserved
          </p>
        </div>
      </>
    );
}
export default Footer;