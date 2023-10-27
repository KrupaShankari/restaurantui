import React from 'react';
import '../Pages/bookingpage.css';
import imgc from '../images/Assets Task/caulifloral.png';
import imgz from '../images/Assets Task/cauliflower.png';
import dot1 from '../images/Assets Task/dots-bg1.svg';


const BookingComp = () => {
  return (
    <div className="centered-box">
      <img src={imgc} alt="Left Image" className="left-image" />
      <img src={dot1} alt='dotimg' className='dotimage1'/>
      <div className='centerdiv'>
        <div id='greendiv'></div>
        <h5>advance booking</h5>
        <div className="input-container">
          <div className="input-wrapper">
            <input type="text" placeholder="Search Restaurant" className="input-box" />
            <button className="input-button">Go</button>
          </div>
        </div>
        <div className="text-below-input">
          <p>Date<span className='icon'>&#11167;</span></p>
          <p>Time<span className='icon'>&#11167;</span></p>
          <p>Guest<span className='icon'>&#11167;</span></p>
        </div>
        <div className="text-below-input-values">
          <p>12/31/2023</p>
          <p>7:00 PM</p>
          <p>2 persons</p>
        </div>
      </div>
      <img src={dot1} alt='dotimg' className='dotimage2'/>
      <img src={imgz} alt="Right Image" className="right-image" />
    </div>
  );
}

export default BookingComp;
