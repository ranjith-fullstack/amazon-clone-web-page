import React from 'react'
import './product.css'
import Img from '../assets/amazon_logo.png';
import Img1 from '../assets/location_icon.png';
import Img2 from '../assets/dropdown_icon.png';
import Img3 from '../assets/search_icon.png';
import Img4 from '../assets/us_flag.png';
import Img5 from '../assets/user.png';
import Img6 from '../assets/cart_icon.png';
import Img7 from '../assets/menu_icon.png';

import Img37 from '../assets/product2-1.jpg';
import Img38 from '../assets/product2-2.jpg';
import Img39 from '../assets/product2-3.jpg';
import Img40 from '../assets/product2-4.jpg';
import Img41 from '../assets/product2-5.jpg';
import Img42 from '../assets/product2-6.jpg';
import Img43 from '../assets/product2-7.jpg';
import Img44 from '../assets/product2-8.jpg';
import Img45 from '../assets/product2-9.jpg';
import Img46 from '../assets/product2-10.jpg';
import Img47 from '../assets/product2-11.jpg';
import Img48 from '../assets/image.png';
import Img49 from '../assets/ipad_img.jpg';
import Img50 from '../assets/product_img.jpg';
import Img51 from '../assets/location_icon_dark.png';
import Img52 from '../assets/circle_icon.png';
import Img53 from '../assets/rating_img.png';

export const Product = () => {
  return (
    <div>
         <nav>
        <a href="/"><img src={Img} style={{width:"100px"}} alt=""/></a>
        <div class="nav-country">
            <img src={Img1} style={{height:"20px"}} alt=""/>
            <div>
                <p>Deliver to</p>
                <h1>United Kingdom</h1>
            </div>
        </div>
        <div class="nav-search">
            <div class="nav-search-category">
                <p>All</p>
                <img src={Img2} style={{height:"12px"}} alt=""/>
            </div>
            <input type="text" class="nav-search-input" placeholder="Search Amazon"/>
            <img src={Img3} class="nav-search-icon" alt=""/>
        </div>
        <div class="nav-language">
            <img src={Img4} style={{width:"25px"}} alt=""/>
            <p>EN</p>
            <img src={Img2} style={{width:"8px"}} alt=""/>
        </div>
        <div class="nav-texts">
            <p><a href="/login.html">Hello, sign in</a></p>
            <h1>Account & Lists <img src={Img2} style={{width:"8px"}} alt=""/> </h1>
        </div>
        <div class="nav-texts">
            <p>Returns</p>
            <h1>& Orders</h1>
        </div>
        <a href="/login.html" class="mobile-user-icon" style={{display: "none"}}>
            <img src={Img5}/>
        </a>
        <a href="/cart.html" class="nav-cart">
            <img src={Img6} style={{width:"35px"}} alt=""/>
            <h4>Cart</h4>
        </a>
    </nav>
    <div class="nav-bottom">
        <div>
            <img src={Img7} style={{width:"25px"}} alt=""/>
            <p>All</p>
        </div>
        <p>Fresh</p>
        <p>Amazon miniTV </p>
        <p>Sell</p>
        <p>Best Sellers</p>
        <p>Mobiles</p>
        <p>Today's Deals</p>
        <p>Electronics</p>
        <p>Prime</p>
        <p>Customer Service</p>
        <p>New Releases</p>
        <p>Home&kitchen</p>
        <img src={Img48} alt='' className='imggggg'/>
    </div>
    <p class="breadcrum">
        Video Games - PC - Accessories - Headset
    </p>

    <div class="product-display">
        <div class="product-d-image">
            <div class="product-list-image">
                <img src={Img50} style={{width:"60px"}} alt=""/>
                <img src={Img50} style={{width:"60px"}} alt=""/>
                <img src={Img50} style={{width:"60px"}} alt=""/>
                <img src={Img50} style={{width:"60px"}} alt=""/>
                <img src={Img50} style={{width:"60px"}} alt=""/>
            </div>
            <div class="product-main-image">
                <img src={Img50} style={{width:"400px"}} alt=""/>
            </div>
        </div>
        <div class="product-d-details">
            <p class="product-title">
                BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear
                Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs (Blue)
            </p>
            <p class="product-store">
                Visit the BENGOO Store
            </p>
            <div class="product-rating">
                <div>
                    <div>4.3 <img src={Img53} style={{height:"20px"}} alt=""/></div>
                    <p>104,185 ratings | Search this page</p>
                </div>
                <p><span>#1 Best Seller</span> in PC Game Headsets</p>
                <h5>10K+ bought in past month</h5>
                <hr/>
            </div>
            <div class="product-prices">
                <div>
                    <p>-35%</p>
                    <h1>$<span>25</span>.99</h1>
                </div>
                <h5>List Price: <span>$39.99</span></h5>
                <p>Get <b>Fast, Free Shipping</b> with <span>Amazon Prime</span></p>
                <p><span>FREE Returns</span></p>
                <p><span>Join Prime to buy this item at $22.99</span></p>
                <p>Available at a lower price from <span>other sellers</span> that may not offer free Prime shipping.
                </p>
            </div>
            <div class="product-color-selection">
                <p>Color: <b>Blue</b></p>
                <div class="product-color-options">
                    <div class="option">
                        <img src={Img50} style={{width:"30px"}} alt=""/>
                        <p>Black</p>
                    </div>
                    <div class="option">
                        <img src={Img50} style={{width:"30px"}} alt=""/>
                        <p>Blue</p>
                    </div>
                    <div class="option">
                        <img src={Img50} style={{width:"30px"}} alt=""/>
                        <p>Green</p>
                    </div>
                    <div class="option">
                        <img src={Img50} style={{width:"30px"}} alt=""/>
                        <p>Pink</p>
                    </div>
                    <div class="option">
                        <img src={Img50} style={{width:"30px"}} alt=""/>
                        <p>Purple</p>
                    </div>
                    <div class="option">
                        <img src={Img50} style={{width:"30px"}} alt=""/>
                        <p>Red</p>
                    </div>
                </div>
            </div>
            <div class="product-info">
                <p><b>Brand</b></p>
                <p>BENGOO</p>
                <p><b>Model Name</b></p>
                <p>G9000</p>
                <p><b>Color</b></p>
                <p>Blue</p>
                <p><b>Form Factor</b></p>
                <p>Over Ear</p>
                <p><b>Connectivity Technology</b></p>
                <p>Wired</p>
            </div>
            <hr/>
            <div class="product-description">
                <h1>About this item</h1>
                <ul>
                    <li>【Multi-Platform Compatible】Support PlayStation 4, New Xbox One, PC, Nintendo 3DS, Laptop, PSP, Tablet, iPad, Computer, Mobile Phone. Please note you need an extra Microsoft Adapter (Not Included) when connect with an old version Xbox One controller.</li>
                    <li>【Surrounding Stereo Subwoofer】Clear sound operating strong brass, splendid ambient noise isolation and high precision 40mm magnetic neodymium driver, acoustic positioning precision enhance the sensitivity of the speaker unit, bringing you vivid sound field, sound clarity, shock feeling sound. Perfect for various games like Halo 5 Guardians, Metal Gear Solid, Call of Duty, Star Wars Battlefront, Overwatch, World of Warcraft Legion, etc.</li>
                    <li>【Noise Isolating Microphone】Headset integrated onmi-directional microphone can transmits high quality communication with its premium noise-concellng feature, can pick up sounds with great sensitivity and remove the noise, which enables you clearly deliver or receive messages while you are in a game. Long flexible mic design very convenient to adjust angle of the microphone.</li>
                    <li>【Great Humanized Design】Superior comfortable and good air permeability protein over-ear pads, muti-points headbeam, acord with human body engineering specification can reduce hearing impairment and heat sweat.Skin friendly leather material for a longer period of wearing. Glaring LED lights desigend on the earcups to highlight game atmosphere.</li>
                    <li>【Effortlessly Volume Control】High tensile strength, anti-winding braided USB cable with rotary volume controller and key microphone mute effectively prevents the 49-inches long cable from twining and allows you to control the volume easily and mute the mic as effortless volume control one key mute.</li>
                </ul>
            </div>
        </div>
        <div class="product-d-purchase">
            <div class="title">
                <h3>Buy new:</h3><img src={Img52} style={{width:"20px"}} alt=""/>
            </div>
            <h1 class="price">$<span>25</span>99</h1>
            <div class="gap">
                <p>Get <b>Fast, Free Shipping</b> with <span>Amazon Prime</span></p>
                <p><span>FREE Returns</span></p>
            </div>
            <div class="gap">
                <p><span>FREE delivery</span> <b>Saturday</b>,</p>
                <p><b>January 27</b> on orders shipped by Amazon over $35</p>
            </div>
            <div class="gap">
                <p>Or fastest delivery <b>Tomorrow</b>, <b>January 23</b>. Order within <span>10 hrs 56 mins</span></p>
            </div>
            <div class="pincode-section">
                <img src={Img51} style={{width:"20px"}} alt=""/>
                <p><span>Deliver to New York 10014</span></p>
            </div>
            <h2 class="product-stock">In Stock</h2>
            <select class="product-quantity">
                <option value="1">Quantity: 1</option>
                <option value="2">Quantity: 2</option>
                <option value="3">Quantity: 3</option>
            </select>
            <button class="btn">
                Add to Cart
            </button>
            <button class="btn product-buy">
                Buy Now
            </button>
            <div class="product-seller-info">
                <p>Ships from</p>
                <p class="product-info-value">Amazon</p>
                <p>Sold by</p>
                <p class="product-info-value">Bengoo Inc.</p>
                <p>Returns</p>
                <p class="product-info-value">Eligible for Return, Refund or Replacement within 30 days of receipt</p>
                <p>Payment</p>
                <p class="product-info-value">Secure transaction</p>
            </div>
            <hr/>
            <button class="product-addtolist">Add to List</button>
        </div>
    </div>
    <div class="products-slider-with-price">
        <h2>Deals Under $25</h2>
        <div class="products">
            <div class="product-card">
                <div class="product-img-container">
                    <img src={Img37} alt="Product Image"/>
                </div>
                <div class="product-offer">
                    <p>27% off</p> <span>Deal</span>
                </div>
                <p class="product-price">$ <span>14.49</span> List Price:$19.95</p>
                <h4>This product is the best for you</h4>
            </div>
            <div class="product-card">
                <div class="product-img-container">
                    <img src={Img38} alt="Product Image"/>
                </div>
                <div class="product-offer">
                    <p>27% off</p> <span>Deal</span>
                </div>
                <p class="product-price">$ <span>14.49</span> List Price:$19.95</p>
                <h4>This product is the best for you</h4>
            </div>
            <div class="product-card">
                <div class="product-img-container">
                    <img src={Img39} alt="Product Image"/>
                </div>
                <div class="product-offer">
                    <p>27% off</p> <span>Deal</span>
                </div>
                <p class="product-price">$ <span>14.49</span> List Price:$19.95</p>
                <h4>This product is the best for you</h4>
            </div>
            <div class="product-card">
                <div class="product-img-container">
                    <img src={Img40} alt="Product Image"/>
                </div>
                <div class="product-offer">
                    <p>27% off</p> <span>Deal</span>
                </div>
                <p class="product-price">$ <span>14.49</span> List Price:$19.95</p>
                <h4>This product is the best for you</h4>
            </div>
            <div class="product-card">
                <div class="product-img-container">
                    <img src={Img41} alt="Product Image"/>
                </div>
                <div class="product-offer">
                    <p>27% off</p> <span>Deal</span>
                </div>
                <p class="product-price">$ <span>14.49</span> List Price:$19.95</p>
                <h4>This product is the best for you</h4>
            </div>
            <div class="product-card">
                <div class="product-img-container">
                    <img src={Img42} alt="Product Image"/>
                </div>
                <div class="product-offer">
                    <p>27% off</p> <span>Deal</span>
                </div>
                <p class="product-price">$ <span>14.49</span> List Price:$19.95</p>
                <h4>This product is the best for you</h4>
            </div>
            <div class="product-card">
                <div class="product-img-container">
                    <img src={Img43} alt="Product Image"/>
                </div>
                <div class="product-offer">
                    <p>27% off</p> <span>Deal</span>
                </div>
                <p class="product-price">$ <span>14.49</span> List Price:$19.95</p>
                <h4>This product is the best for you</h4>
            </div>
            <div class="product-card">
                <div class="product-img-container">
                    <img src={Img44} alt="Product Image"/>
                </div>
                <div class="product-offer">
                    <p>27% off</p> <span>Deal</span>
                </div>
                <p class="product-price">$ <span>14.49</span> List Price:$19.95</p>
                <h4>This product is the best for you</h4>
            </div>
            <div class="product-card">
                <div class="product-img-container">
                    <img src={Img45} alt="Product Image"/>
                </div>
                <div class="product-offer">
                    <p>27% off</p> <span>Deal</span>
                </div>
                <p class="product-price">$ <span>14.49</span> List Price:$19.95</p>
                <h4>This product is the best for you</h4>
            </div>
            <div class="product-card">
                <div class="product-img-container">
                    <img src={Img46} alt="Product Image"/>
                </div>
                <div class="product-offer">
                    <p>27% off</p> <span>Deal</span>
                </div>
                <p class="product-price">$ <span>14.49</span> List Price:$19.95</p>
                <h4>This product is the best for you</h4>
            </div>
            <div class="product-card">
                <div class="product-img-container">
                    <img src={Img47} alt="Product Image"/>
                </div>
                <div class="product-offer">
                    <p>27% off</p> <span>Deal</span>
                </div>
                <p class="product-price">$ <span>14.49</span> List Price:$19.95</p>
                <h4>This product is the best for you</h4>
            </div>
        </div>
    </div>
    <footer>
        <img src={Img} style={{width:"100px"}} alt=""/>
        <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
    </footer>
    </div>
  )
}
