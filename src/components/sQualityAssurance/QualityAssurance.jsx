import React from 'react';
import styles from './SQualityAssurance.module.css';
import img1 from '../../assets/sQualityAssurance/qaqs.jpg';
import img2 from '../../assets/sQualityAssurance/qa.jfif';
import img3 from '../../assets/sQualityAssurance/qs.jpg';

const QualityAssurance = () => {
  return (
    <>
      <div>
        {/* Top  */}
        <div className="row mt-5 mx-0 flex-column-reverse flex-md-row">
          <div className="col-md-6 px-0">
            <div className={styles.topContain}>
              <p className={`${styles.headTop}`}>
                <span style={{ color: '#ff4c0a' }}>Quality</span>
              </p>
              <p className={styles.headTop}>Assurance</p>
              <p className={styles.identityTop}>
                The quality assurance process
              </p>
              <p className={styles.content}>
                The quality assurance process helps a business ensure its
                products meet the quality standards set by the company or its
                industry. Another way to understand quality assurance (QA) is as
                a company’s process for improving the quality of its products.
                Many businesses view their QA program as a promise to internal
                stakeholders and customers that the company will deliver
                high-quality products that provide a positive user experience..
              </p>
            </div>
          </div>
          <div className="col-md-6 px-0">
            <img src={img1} alt="" className={styles.img1} />
          </div>
        </div>

        {/* Middle  */}
        <div className="container">
          <div
            className={`row ${styles.contain} flex-column-reverse flex-md-row`}
          >
            <div className={`col-md-6 ${styles.middleContain}`}>
              <p className={styles.heading}> Quality assurance</p>
              <p className={styles.text}>
                Quality assurance is a broad process for preventing quality
                failures. The QA team is involved in all stages of a product’s
                development: production, testing, packaging, and delivery. In
                contrast, quality control (QC) is a narrower process. QC focuses
                on detecting mistakes, errors, or missed requirements in a
                product.
              </p>
            </div>
            <div className="col-md-6">
              <img src={img2} alt="" className={styles.img2} />
            </div>
          </div>
        </div>

        {/* Bottom  */}
        <div className="container">
          <div className={`row ${styles.contain}`}>
            <div className="col-md-6">
              <img src={img3} alt="" className={styles.img2} />
            </div>
            <div className={`col-md-6 ${styles.bottomContain}`}>
              <p className={styles.heading1}>Custom Approach</p>
              <p className={styles.text1}>
                Our team
                operates proactively. They seek to uncover and address the
                sources of quality problems, such as human error or a business
                using the wrong materials. Whereas the QC team is reactive,
                checking the product for mistakes or components not built to
                specification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default QualityAssurance;
