import React from 'react';
import styles from './Top.module.css';
import img1 from '../../../assets/aboutUs/img1.png';
import img2 from '../../../assets/aboutUs/img2.png';

const Top = () => {
  return (
    <div className={`container overflow-hidden`}>
      <p data-aos="slide-right" className={styles.heading}>
        About Us
      </p>
      <p data-aos="slide-left" className={styles.subHeading}>
        Web Development Service
      </p>
      <p data-aos="fade-up" data-aos-offset="80" className={styles.content}>
        Prosoft Digital is a team of digital marketing, web development, Google
        Analytics, paid media, and usability experts who believe in the
        interconnectivity of digital efforts. We believe that all of these
        disciplines work together to execute successful website migrations.
        Every employee at Prosoft Digital is Google Analytics and Google Tag
        Manager Certified, renewing their certification every year. We also
        staff a full team of seasoned website developers knowledgeable on many
        different types of technologies and platforms, ensuring that we bring
        expertise and personalized solutions to your specific setup.
      </p>

      <div className={`row ${styles.contain} flex-column-reverse flex-md-row`}>
        <div data-aos="slide-right" className={`col-md-6`}>
          <p className={styles.about}>About Us</p>
          <p className={styles.creativity}>We Do with Creativity</p>
          <p className={styles.contn}>
            We are a technology provider of custom hardware and software
            development solutions and digital transformation consulting
            services. We help our clients reach their full potential and
            drastically reduce costs by offering transparent, seamless and
            reliable access to the best and brightest tech talent and empower
            their business with AI, AR, Big Data, IoT & Cloud.
          </p>
        </div>
        <div
          data-aos="slide-left"
          data-aos-offset="50"
          className={`col-md-6 ${styles.imgContain}`}
        >
          <img src={img1} alt="" className={styles.img1} />
        </div>
      </div>
      <div data-aos="fade-up" className="row" style={{ textAlign: 'left' }}>
        <div className={`col-md-6`}>
          <img src={img2} alt="" className={styles.img2} />
        </div>
      </div>
    </div>
  );
};

export default Top;
