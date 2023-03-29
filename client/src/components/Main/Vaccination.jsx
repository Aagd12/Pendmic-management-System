import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./vaccine.module.css";
import Nav from "./Nav";

const Vaccination = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    address: "",
    phoneNumber: "",
    varified: false,
  });
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("hi its me");
      const url = "http://localhost:8080/api/bookvaccine";
      console.log(url);
      const { data: res } = await axios.post(url, data);
      setMsg(res.message);
      setData(...data, []);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
     <>
    <Nav/>
    
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome</h1>
          <Link to="/vaccinationstatus">
            <button type="button" className={styles.white_btn}>
              Vaccination Status
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Book Vaccination Slot</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            <input
              type="number"
              placeholder="phoneNumber"
              name="phoneNumber"
              onChange={handleChange}
              maxLength="10"
              value={data.phoneNumber}
              required
              className={styles.input}
            />
            <input
              type="Number"
              placeholder="age"
              name="age"
              onChange={handleChange}
              value={data.age}
              required
              className={styles.input}
            />
            <input
              type="gender"
              placeholder="gender"
              name="gender"
              onChange={handleChange}
              value={data.gender}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="address"
              name="address"
              onChange={handleChange}
              value={data.address}
              required
              className={styles.input}
            />

            {error && <div className={styles.error_msg}>{error}</div>}
            {msg && <div className={styles.success_msg}>{msg}</div>}
            <button type="submit" className={styles.green_btn}>
              Book Your Vaccination Slot
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Vaccination;
