import React from "react";
import "../Pages/footer.css";
import fb from "../images/Assets Task/fb.svg";
import linkedin from "../images/Assets Task/lin.svg";
import insta from "../images/Assets Task/insta.svg";
import arrow from "../images/Assets Task/arrow.svg";

function Footer(){

    return(
        <div className="foot-container">
            <div className="sub-container">
                <div className="content-container">
                    <h2><span>Get notified</span><span> about new amazing products</span></h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga fugit reprehenderit dolorem nostrum, illo accusamus </p>
                    <div className="inp">
                    <input type="text" placeholder="E-mail"/>
                    <img src={arrow} alt="" />
                    </div>
                    <div className="about">
                        <span>Product</span>
                        <span>Company</span>
                        <span>Learn More</span>
                        <span>Get in touch</span>
                    </div>
                    <div className="foot-content">
                    <img src={fb} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={insta} alt="" />
                    <span>&#169; 2022 Techverse world</span>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer;