import React, { useEffect,useState } from "react";
import './style.css'
import Nav from './Nav'
import './contact.css'
export const Covid = () => {
  const [deta, setdeta] = useState([]);
  useEffect(()=>{
    getcoviddata();
  },[])
  const getcoviddata = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const data1 = await res.json();
     console.log("hi");
      setdeta(data1.statewise[0]);
      return data1;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Nav/>
      <ul className="Nav">
        <li className="card">
          <div className="card_Nav">
            <div className="card_inner">
              <p className="card_name">
                <span>OUR</span> COUNTRY  </p>
              <p className="card_total">INDIA</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card_Nav">
            <div className="card_inner">
              <p className="card_name">
                <span>TOTAL</span> RECOVERD </p>
              <p className="card_total">{deta.recovered}</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card_Nav">
            <div className="card_inner">
              <p className="card_name">
                <span>TOTAL</span> CONFIRMED  </p>
              <p className="card_total">{deta.confirmed}</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card_Nav">
            <div className="card_inner">
              <p className="card_name">
                <span>TOTAL</span> DEATHS  </p>
              <p className="card_total">{deta.deaths}</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card_Nav">
            <div className="card_inner">
              <p className="card_name">
                <span>TOTAL</span> ACTIVE  </p>
              <p className="card_total">{deta.active}</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card_Nav">
            <div className="card_inner">
              <p className="card_name">
                <span>Last</span> UPDATED  </p>
              <p className="card_total">{deta.lastupdatedtime}</p>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};
export default Covid;
