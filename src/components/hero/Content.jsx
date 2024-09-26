import React from 'react'
import './content.css'

function Content() {
  return (
    <div>
      <main className='content'>
        <div className="page_content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="btns">
            <button className="shop-btn">Shop Now</button>
            <button className="category-btn">Category</button>
          </div>
          <div className="lastpart">
            <p>Also Available On </p>
            <div className="last-img">
              <img src="flipkart.png" alt="" />
              <img src="amazon.png" alt="" />
            </div>
          </div>
        </div>
        <div className="img-content">
          <img src="shoe_image.png" alt="" />
        </div>
      </main>
    </div>
  );
}

export default Content