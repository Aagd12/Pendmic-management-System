import React, { useState } from 'react'
import Contact_img from '../../images/contact.jpg';
import Contact_phone from '../../images/phone.jpg';
import Contact_email from '../../images/email.jpg';
import Contact_facebook from '../../images/facebook.jpg';
import Contact_instagram from '../../images/instagram.jpg';
import Contact_twiter from '../../images/twiter.jpg';
import axios from 'axios';
import './contact.css'
import styles from "./styles.module.css";
import Nav from "./Nav";
const Contact = () => {
    const [data, setData] = useState({
		name: "",
		email: "",
		number: "",
		text: "",
	});
	const [error, setError] = useState("");
	const [msg,setMsg]=useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};


   const handleSubmit = async (e) => {
       e.preventDefault();
       try {
           const url = "http://localhost:8080/api/contact";
           const { data: res } = await axios.post(url, data);
           setMsg(res.message);
           setData(...data,[]);
           
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
      <section className="home">
            <div className="content">
                <h1>Contact Us</h1>
                <p>Our team of customer care is ready to hear from you.</p>
            </div>
       </section>   
    <section className="contact">
        <div className="container">
            <div className="contactInfo">
                <h1>Customer Care</h1>
                <p>Not sure where to start? Need help adding that extra mojo
                    to your landing page? Just visit our <span>help center </span>
                    or get in touch with us:
                </p>
                <div className="box">
                   <img className='icon'src={Contact_img} alt="loading.."/>
                    <div className="text">
                        <h3>Address</h3>
                        <p>IIIT Guwahati, IT Park, 
                            Sontala Bongora, Assam</p>
                    </div>
                </div>
                <div className="box">
                <img className='icon'src={Contact_phone} alt="loading"/>
                    <div className="text">
                        <h3>Phone</h3>
                        <p>+91-6387319072</p>
                        <p>+91-9264903537</p>
                        <p>+91-7891233630</p>
                    </div>
                </div>
                <div className="box">
                <img className='icon'src={Contact_email} alt="loading.."/>
                    <div className="text">
                        <h3>Email</h3>
                        <p>saurabh.pandey@iiitg.ac.in</p>
                        <p>manish.kumar@iiitg.ac.in</p>
                        <p>navrang.singh@iiitg.ac.in</p>
                    </div>
                </div>
            </div>
            <div className="contactForm">
                <form action="/contact_us" method="post" onSubmit={handleSubmit}>
                    <h2>Reach out to us!</h2>
                    <p>Got a question about Lander? Are you interested in partering withus?
                        Have some suggestions or just want to say hi? Contact us:
                    </p>
                    <div className="inputBox">
                        <input type="text" name="name"
                        onChange={handleChange}
						value={data.name} 
                        placeholder="Full Name" required/>
                    </div>
                    <div className="inputBox">

                        <input type="email" name="email" placeholder="Email Address" required
                            onChange={handleChange}
							value={data.email}
                        />
                    </div>
                    <div className="inputBox">
                        <input type="number" name="number" placeholder="Phone Number" maxLength="10" required
                         onChange={handleChange}
							value={data.number}
                        />
                    </div>
                    <div className="inputBox">
                        <textarea type="text" rows="5" name="text"
                         placeholder="Type your massage..."
                          onChange={handleChange}
							value={data.text}
                        />
                    </div>
                    {error && <div className={styles.error_msg}>{error}</div>}
						{msg && <div className={styles.success_msg}>{msg}</div>}
                    <div className="inputBox1 ">
                        <button className="btn" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <section className="footer">
        <div className="foot">
            <h2>About Lander</h2>
            <p>Features</p>
            <p> Templates</p>
            <p>Integration Team</p>
        </div>
        <div className="foot">
            <h2>Help & Resources</h2>
            <p>Contact </p>
            <p> Help Center </p>
            <p>Blog</p>
        </div>
        <div className="foot foot1">
            <h2>Get In Touch with Joy</h2>
            <div className="social"><img src={Contact_instagram} alt="loading.."/>Instagram</div>
            <div className="social"><img src={Contact_facebook} alt="loading.."/>Faceboq</div>
            <div className="social"><img src={Contact_twiter} alt="loading.."/>Twiter</div>
        </div>
    </section>
    </>
         
    
  )
};
export default Contact;
