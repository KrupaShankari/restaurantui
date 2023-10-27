import React from 'react';
import "../Pages/phonepage.css";
import Image1 from "../images/Assets Task/dots-bg3.svg";
import Image2 from "../images/Assets Task/1cauliflower.png";
import appscreen from "../images/Assets Task/app-screen.png";
import playstore from "../images/Assets Task/google-play-badge.png";
import appstore from "../images/Assets Task/App_Store_Badge.png";

function Phonepage() {
    return (
        <div id='container'>
            <div id='gry'>
                {/* left side */}
                <div>
                    <div>
                        <p className='green'><h1><b>Download app for <br/> Exciting Deals</b></h1></p><br/>
                        <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <div className='container-1'>
                        <div>
                            <img src={playstore} alt='playstore' className='playstores'/>
                        </div>
                        <div>
                            <img src={appstore} alt='appstore' className='appstores'/>
                        </div>
                    </div>
                    </div>
                </div>
                {/* right side */}
                <div id='phone'>
                    <div id='dotbg'>
                        <img src={Image1} alt='image1'/>
                    </div>
                    <img src={Image2} alt='image1' id='cauli' />
                    <img src={appscreen} alt='image1' id="appscreen" />
                </div>
            </div>
        </div>
    )
}

export default Phonepage;