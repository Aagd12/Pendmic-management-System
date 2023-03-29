import React from 'react'
import "./contact.css"
import Contact_facebook from '../../images/facebook.jpg';
import Contact_instagram from '../../images/instagram.jpg';
import Contact_twiter from '../../images/twiter.jpg';
const Footer = () => {
  return (
    <>
          <section className="footer">
        <div className="foot">
            <h2>About pendmic </h2>
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
}

export default Footer