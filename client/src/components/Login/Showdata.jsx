import React, { useEffect, useState } from "react";
import styles from "./show.module.css";
import Data from "./Data";
import Nav from "../Main/Nav";
import axios from "axios";
import { useLocation } from "react-router-dom";
const Showdata = () => {
  const [deta, setdeta] = useState([]);

  const { email }=useLocation().state;
  console.log(email);

  
  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/showvaccine");
      const data1 = await res.data;
      setdeta(data1);
   //   console.log(data1);
      return data1;
    } catch (error) {
      console.log(error);
    }
    
  };

  const filterViaEmail = (email, users) => {

    const filteredData = deta.filter((user) => {
    //  console.log(user.email === email, user.email, email);
      console.log(user.verified);
      return (user.email === email) ;
    });

    return filteredData;
  }
  return (
    <>
      <Nav />
      <div className={styles.table}>
        <div className={styles.main}>
          <div>Name</div>
          <div>Address</div>
          <div>status</div>
        </div>
        {          
          filterViaEmail(email, deta).length !== 0
          ? filterViaEmail(email, deta).map((data) => (
              <Data
                firstName={data.firstName}
                lastName={data.lastName}
                address={data.address}
                status={data.verified}
              />
            ))
          : console.log("No data availble")}
          

      </div>
    </>
  );
};

export default Showdata;
