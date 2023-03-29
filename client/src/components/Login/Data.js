import React from 'react'
import styles from "./show.module.css";
const data = (props) => {
  return (
    <div className={styles.main}>
        <div >{props.firstName} {props.lastName}</div>
        <div >{props.address}</div>
        <div >{(props.status===true)?"Done":"Pending"}</div>
    </div>
  )
}

export default data