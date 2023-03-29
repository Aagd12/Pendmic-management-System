import React from 'react'
import styles from "./show.module.css";
import axios from 'axios';

const Data = (props) => {

    const handleUpadte=async()=>{
        console.log("id=> ",props.id);
        const url = "http://localhost:8080/api/admin";
        const { data: res } = await axios.post(url, props);
        window.location = "/modifydata";
    }
  return (
    <div className={styles.main}>
        <div >{props.firstName} {props.lastName}</div>
        <div >{props.address}</div>
        <div >{(props.status===true)?"Done":"Pending"}</div>
        <button className={props.status===true?styles.green_btn:styles.red_btn} onClick={handleUpadte} >Update Status</button>
    </div>
  )
}

export default Data;