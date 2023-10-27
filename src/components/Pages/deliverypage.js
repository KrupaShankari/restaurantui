import React from 'react';
import '../Pages/deliverypage.css';
import Leftimg from '../images/Assets Task/advance.svg';
import leftimg2 from '../images/Assets Task/food-for-free.svg';
import rightimg from '../images/Assets Task/free-home.svg';
import arrow from '../images/Assets Task/big-left-arrow.svg';

const DeliveryComp = () => {
  return (
    <div className="contents">
      <div className="lcontent">
        <div className="left-content-top">
          <div style={{width:'200px',backgroundColor:'rgb(244, 245, 247)',margin:'40px'}}>
          <img src={Leftimg} alt="Left Image" className="limage" />
          </div>
          <img src={arrow} alt="arrowImage" className="arrow" style={{marginLeft:'-80px'}}/>
          <div style={{width:'200px',backgroundColor:'rgb(244, 245, 247)'}} >
            <h2>advance table booking</h2>
            <p>Lorem ipsum dolor sit, amet consec adipisicing elit.</p>
          </div>
        </div>
        <div className="left-content-bottom">
          <div style={{width:'200px',backgroundColor:'rgb(244, 245, 247)',margin:'40px'}}>
          <h2>food for free</h2>
          <p>Lorem ipsum dolor sit, amet consec adipisicing elit.</p>
          </div>
          <span id='arrowrsyb'>&#8594;</span>

          <div style={{width:'200px',backgroundColor:'rgb(244, 245, 247)',height:"200px"}}>

          <img src={leftimg2} alt="Bottom Image" className="bottom-image" />
          </div>
        </div>
      </div>
      <div className="rightcontent">
        <img src={rightimg} alt="Image" className="content-image" />
        <h2 className="content-heading" style={{color:'darkblue'}}>Free home delivery at your door step</h2>
        <p className="content-para">
        Lorem ipsum dolor sit, amet consec adipisicing elit.
        Lorem ipsum dolor sit, amet consec adipisicing elit.
        </p>
      </div>
    </div>
  );
};


export default DeliveryComp;
