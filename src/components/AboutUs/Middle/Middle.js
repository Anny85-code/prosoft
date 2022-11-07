import React from "react";
import styles from './Middle.module.css';
import logo1 from '../../../assets/aboutUs/middle1.png';
import logo2 from '../../../assets/aboutUs/middle2.png';
import logo3 from '../../../assets/aboutUs/middle3.png';

const Middle = () =>{
    return (
      <div style={{ backgroundColor: '#f8f8f8' }} className="overflow-hidden">
        <div className={`container ${styles.contain}`}>
          <p
            data-aos="fade-down-right"
            data-aos-offset="170"
            className={styles.mainHead}
          >
            Our Services
          </p>
          <p
            data-aos="fade-up-left"
            data-aos-offset="170"
            className={styles.mainContent}
          >
            Stop wasting time and money designing and managing strategy that
            doesn’t get results. Happiness guaranteed!
          </p>

          <div className="row">
            <div
              data-aos="fade-right"
              data-aos-offset="170"
              className="col-md-4"
            >
              <div className={styles.box}>
                <img src={logo1} alt="" />
                <p className={styles.head}>Web Design</p>
                <p className={styles.content}>
                  We will analyze the product and the market to determine the
                  best strategy for your product..
                </p>
              </div>
            </div>

            <div data-aos="fade-up" className="col-md-4">
              <div className={styles.box}>
                <img src={logo2} alt="" />
                <p className={styles.head}>Digital Marketing</p>
                <p className={styles.content}>
                  We will discuss your business problems and recommend the best
                  marketing tools to solve them.
                </p>
              </div>
            </div>

            <div data-aos="fade-left" className="col-md-4">
              <div className={styles.box}>
                <img src={logo3} alt="" />
                <p className={styles.head}>UI/UX Expertise</p>
                <p className={styles.content}>
                  We will analyze the situation and figure out why your product
                  or service is lacking conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Middle;