import React, { useEffect } from "react";
import styles from './IndividualService.module.css';
import { useLocation } from "react-router-dom";
import data from './data';
import timer from '../../assets/individualService/timer.png';
import lock from '../../assets/individualService/tren.png';
import det from '../../assets/individualService/det.png';

const IndividualService = () =>{
    const { search } = useLocation(); 
    const id = parseInt(new URLSearchParams(search).get('id'));
    let service = data.filter(x=>{
        return x.id === id;
    })[0];

    useEffect(() => {
        window.scrollTo(0, 0)
      })

    return(
        <>
            <div className={`container ${styles.contain} overflow-hidden`}>
                <p data-aos='slide-right'  className={styles.heading}>{ service.heading }</p>
                <p data-aos='slide-left' className={styles.heading_content}>{ service.content }</p>
            
                <div className="row">
                    <div className="col-md-4" data-aos='fade-right' data-aos-offset="150">
                        <img src={timer} alt="" className={styles.img}/>
                        <p className={styles.logo_head}>Speed Optimization</p>
                        <p className={styles.heading_content}>Optimizing page speed involves addressing round trip requests, render blocking and lazy loading.</p>
                    </div>

                    <div className="col-md-4" data-aos='fade' data-aos-offset="150">
                        <img src={det} alt="" className={styles.img} />
                        <p className={styles.logo_head}>Marketing Strategy</p>
                        <p className={styles.heading_content}>We will discuss your business problems and recommend the best marketing tools to solve them.</p>
                    </div>

                    <div className="col-md-4" data-aos='fade-left' data-aos-offset="150">
                        <img src={lock} alt="" className={styles.img}/>
                        <p className={styles.logo_head}>Experts Worker</p>
                        <p className={styles.heading_content}>Our teams have a wealth of experience to offer unique perspectives on how to do things and anticipate coming trends in the industry.</p>
                    </div>
                </div>

                {
                    service.contents.map((x, idx) =>(
                        idx%2 === 0 ?
                        <div key={idx} className="row" style={{marginTop: '112px'}}>
                            <div data-aos='slide-right' data-aos-offset="150" className="col-md-6">
                                <img src={x.img} alt="" className={styles.contentImg}/>
                            </div>
                            <div data-aos='slide-left' data-aos-offset="150" className="col-md-6">
                                <p className={`${styles.heading} ${styles.subHead}`}>{ x.heading }</p>
                                <p className={`${styles.heading_content} ${styles.justify}`}>{ x.content }</p>
                            </div>
                        </div>
                        :
                        <div key={idx} className="row" style={{marginTop: '112px'}}>
                            <div className="col-md-6" data-aos='slide-right' data-aos-offset="150">
                                <p className={`${styles.heading} ${styles.subHead}`}>{ x.heading }</p>
                                <p className={`${styles.heading_content} ${styles.justify}`}>{ x.content }</p>
                            </div>
                            <div className="col-md-6" data-aos='slide-left' data-aos-offset="150">
                                <img src={x.img} alt="" className={styles.contentImg}/>
                            </div>
                        </div>
                    ))
                }
            
            </div>
        </>
    )
}
export default IndividualService;