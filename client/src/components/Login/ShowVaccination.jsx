import { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Nav from "../Main/Nav";
const ShowVaccination = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const nevigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/showvaccine";
      const { data: res } = await axios.post(url, data);
      console.log(data);
      nevigate("/showdata", { state: { email: data.email } });
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
      <Nav />
      <div className={styles.showVaccination_container}>
        <div className={styles.showVaccination_form_container}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
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
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              vaccinationStaus
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ShowVaccination;
