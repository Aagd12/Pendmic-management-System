import React, { useEffect, useState } from "react";
import styles from "./show.module.css";
import Data from "./Data";
import Nav from "../Main/Nav";
import axios from "axios";
const Admin = () => {
  const [deta, setdeta] = useState([]);
  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/showvaccine");
      const data1 = await res.data;
      setdeta(data1);
      console.log(data1);
      return data1;
    } catch (error) {
      console.log(error);
    }
    
  };


  return (
    <>
      <Nav />
      <div className={styles.table}>
        <div className={styles.main}>
          <div>Name</div>
          <div>Address</div>
          <div>status</div>
          <div>Query</div>
        </div>
        {          
         deta.length !== 0
          ?deta.map((data) => (
              <Data
                id={data._id}
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

export default Admin;
