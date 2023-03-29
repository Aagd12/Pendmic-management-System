import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export const HomeContent = (props) => {
  const navigate = useNavigate();
  const handleReport = async () => {
    window.location.href =props.url;
      
  };
  return (
    <>
      {props.ok ? (
        <div className={styles.swiper}>
          <div className={styles.main}>
            <div className={styles.left}>
              <img src={props.report} alt="loading" />
            </div>
            <div className={styles.right}>
              <h3 color="violet">{props.first} </h3>
              <p>{props.second}</p>

              <button onClick={handleReport} className={styles.green_btn}>
                {props.last}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.swiper}>
          <div className={styles.main}>
            <div className={styles.pright}>
              <h3 color="violet">{props.first} </h3>
              <p>{props.second}</p>
              <button onClick={handleReport} className={styles.green_btn}>
                {props.last}
              </button>
            </div>
            <div className={styles.pleft}>
              <img src={props.report} alt="loading" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
