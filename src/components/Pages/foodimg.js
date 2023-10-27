import React from 'react';
import '../Pages/foodimg.css';

const FoodComponent = () => {
  return (
    <div className="container">
      <div className="left-content">
        <div className="box1" >
            <h3>Fire water</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          fringilla augue id quam tincidunt, eu viverra velit feugiat.</p>
          <button>Book now</button>
        </div>
        <div className="box2" >
            <h3>The Wonton</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          fringilla augue id quam tincidunt, eu viverra velit feugiat.</p>
          <button>Book now</button>
        </div>
      </div>
      <div className="right-content">
        <img src="your-image.jpg" alt="Your Image" />
      </div>
    </div>
  );
}

export default FoodComponent;