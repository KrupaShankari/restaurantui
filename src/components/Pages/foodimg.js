import React from 'react';
import '../Pages/foodimg.css';
import arrowr from '../images/Assets Task/right-arrow.svg';


const FoodComponent = () => {
  return (
    <div className="container">
      <div className="left-content">
        <div className="box1" >
        <div className='box1-content'>
            <h3 style={{color:'white'}}>Fire water</h3>
            <p style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          fringilla augue id quam tincidunt, eu viverra velit feugiat.</p>
          <button style={{color:'darkgreen'}}>Book now&#8594;</button>
          </div>
        </div>
        <div className="box2" >
            <div className='box1-content'>
            <h3 style={{color:'white'}}>The Wonton</h3>
            <p style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          fringilla augue id quam tincidunt, eu viverra velit feugiat.</p>
          <button style={{color:'darkgreen'}}>Book now&#8594;</button>
          </div>
        </div>
      </div>
      <div className="right-content">
        <img src={arrowr} alt="Your Image" style={{backgroundColor:'#346b65'}} />
        <div style={{color:'black',fontSize:"30px"}}>See More</div>
      </div>
    </div>
  );
}

export default FoodComponent;