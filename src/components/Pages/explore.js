import React from 'react';
import "../Pages/explore.css";
import hamSandwich1 from "../images/Assets Task/ham-sandwich.png"
import hamSandwich2 from "../images/Assets Task/1ham-sandwich.png"
import hamSandwich3 from "../images/Assets Task/2ham-sandwich.png"
import hamSandwich4 from "../images/Assets Task/3ham-sandwich.png"
import hamSandwich5 from "../images/Assets Task/4ham-sandwich.png"
import hamSandwich6 from "../images/Assets Task/5ham-sandwich.png"

function ExploreFood(){

    return(
        <div className='main-container'>
            <div className='head-contain'>
                <h3>Explore Our Foods</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aut excepturi a voluptatibus doloribus soluta alias quis tempora, mollitia hic</p>
            </div>
            <div className='grids'>
                <div className="grid-container">
                    <img src={hamSandwich1} alt="" />
                    <div className='sub-grid-contain'>
                        <h4>Ham Sandwich</h4>
                        <h2>$10.50</h2>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consec adipisicing elit.</p>
                </div>
                <div className="grid-container">
                    <img src={hamSandwich2} alt="" />
                    <div className='sub-grid-contain'>
                        <h4>Ham Sandwich</h4>
                        <h2>$10.50</h2>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consec adipisicing elit.</p>
                </div>
                <div className="grid-container">
                    <img src={hamSandwich3} alt="" />
                    <div className='sub-grid-contain'>
                        <h4>Ham Sandwich</h4>
                        <h2>$10.50</h2>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consec adipisicing elit.</p>
                </div>
                <div className="grid-container">
                    <img src={hamSandwich4} alt="" />
                    <div className='sub-grid-contain'>
                        <h4>Ham Sandwich</h4>
                        <h2>$10.50</h2>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consec adipisicing elit.</p>
                </div>
                <div className="grid-container">
                    <img src={hamSandwich5} alt="" />
                    <div className='sub-grid-contain'>
                        <h4>Ham Sandwich</h4>
                        <h2>$10.50</h2>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consec adipisicing elit.</p>
                </div>
                <div className="grid-container">
                    <img src={hamSandwich6} alt="" />
                    <div className='sub-grid-contain'>
                        <h4>Ham Sandwich</h4>
                        <h2>$10.50</h2>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consec adipisicing elit.</p>
                </div>
            </div>
        </div>
    )
}

export default ExploreFood