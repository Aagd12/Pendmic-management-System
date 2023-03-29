import {React} from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav";
import p7_img from "../../images/covid-3.jpg";
import p7_pendmic from "../../images/covid-4.jpg";
import p7_place from "../../images/covid-1.jpg";

import report from '../../images/reports.svg';
import share from '../../images/share.svg';
import { HomeContent } from "./HomeContent";
import styles from './styles.module.css';
import Footer from "./Footer";
const Home = () => {
 
  return (
    <>
      <Nav />
      <div className={styles.swiper}>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            height="480px"
            src={p7_img}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>World Map</h3>
            <p>Covid Outbreach On Map</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            height="480px"
            src={p7_pendmic}
            alt="Second slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="480px"
            src={p7_place}
            alt="Third slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      
      <HomeContent url={"/contact"} ok={1} report={report} first={"Report Side Effect"} second={"If you have experienced any side effect after COVID-19 vaccination, it can be reported on Co-WIN using your registered mobile number."} last={"Report Now"} ></HomeContent>
      <HomeContent url={"/testing"} ok={1} report={share}
       first={"Share Your Vaccination Status"} 
      second={"Be a Fighter! If you are fully or partially vaccinated, you can now share your vaccination status in your social circle. Let's encourage our friends and followers in joining India's battle against COVID-19."}
       last={"Share Your Status"} ></HomeContent>
    
      <HomeContent  url={"/vaccination"} ok={0} report={share}
       first={"Precaution Dose"} 
      second={"All fully vaccinated adult citizens (18+ and have taken 2 doses) are eligible for precaution dose from 10/04/2022. Eligible citizens can avail precaution dose at any Government or Private Vaccination Centre. Citizens should carry their Final Certificate of vaccination (with details of both earlier doses). Citizens should use the same mobile number and ID card used for earlier doses.HCWs, FLWs and Citizens aged 60 year or more, shall continue to receive precaution dose vaccination at any CVC, including free of charge vaccination at Government Vaccination Centre.For international travel, precaution dose can be administered to such beneficiary less than 9 months to at a minimum interval of 3 months (90 days) from the date of administration of the second dose as recorded on Co-WlN as per requirement of the destination country. All Vaccination centre in the State where precaution dose is being administered are eligible to administer precaution dose."}
       last={"Book Your Slot"} ></HomeContent>

   
    </>
  );
};

export default Home;
