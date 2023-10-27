import React from 'react';
import '../Pages/home.css';
import food from '../images/Assets Task/foodplate.png'
import leaf from '../images/Assets Task/caulifloral.png'
import logo from '../images/Assets Task/logo.svg';
import dots from '../images/Assets Task/dots-bg.svg';
import location from '../images/Assets Task/place-holder.svg';
import user from '../images/Assets Task/userpic.png';

function HomePage() {
  return (
    <div id='content'>
    <div className="hero">
      <nav>
          <img src={logo} alt='logo' className="logo"></img>
        <ul>
          <li>
            <a href="#">Menu one</a>
          </li>
          <li>
            <a href="#">Menu two</a>
          </li>
          <li>
            <a href="#">Menu three</a>
          </li>
          <li>
            <a href="#">Menu four</a>
          </li>
        </ul>
        <div className="icon">
          <a href="#" className="user" >
          <i className="fal fa-user"></i>
          <img src={user} alt='user'  className="user"/>
            
          </a>
          <a href="#" className="icon-text">
            User 
          </a>
        </div>
      </nav>
      <div className="right-sidebar"></div>
      <div className="content">
        <div className="left">
          <h2>Food</h2>
          <h3>
            Discover Restaurent<br /> & Delicious Food
          </h3>
          <form>
            <input type="text" placeholder="Search Restaurent, Food" />
            <input type="submit" value="GO" />
          </form>
          <div className="green-div">
              <img src={location} alt="Image" className="locate"/>
             <p className="text">Indore</p>
          </div>

        </div>
        <div className="right">
          <img src={dots} alt='dots' className='dots'></img>
          <img src={leaf} alt="Veg" className="veg" />
          <img src={food} alt="Food Plate" className="plate" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default HomePage;
