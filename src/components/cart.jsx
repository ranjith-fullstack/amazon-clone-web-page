import React from 'react'
import './cart.css'
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

export const Cart = () => {
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
    <div class="cart">
        <div class="cart-left">
            <h1>Shopping Cart</h1>
            <hr/>
            <div class="product-cart-list">
                <img src={Img49} alt=""/>
                <div>
                    <div class="product-cart-titleprice">
                        <p>Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 64GB, Wi-Fi,
                            12MP front/8MP Back Camera, Touch ID, All-Day Battery Life – Space Gray</p>
                        <p><b>$249.00</b></p>
                    </div>
                    <p class="product-cart-bestseller"><span>#1 Best Seller</span> in Computer Tablets</p>
                    <p class="product-cart-stock">In Stock</p>
                    <p class="product-cart-delivery">FREE delivery <b>Mon, Jan 29</b> available at checkout</p>
                    <p class="product-cart-returns">FREE Returns &#11191</p>
                    <p class="product-cart-giftoption">Gift options not available. <span>Learn more</span></p>
                    <div class="product-cart-specs">
                        <p><b>Style:</b></p>
                        <p>WiFi</p>
                        <p><b>Size:</b></p>
                        <p>64GB</p>
                        <p><b>Color:</b></p>
                        <p>Space Gray</p>
                    </div>
                    <div class="product-cart-list-action">
                        <select>
                            <option value="Qty: 1">Qty: 1</option>
                            <option value="Qty: 2">Qty: 2</option>
                            <option value="Qty: 3">Qty: 3</option>
                            <option value="Qty: 4">Qty: 4</option>
                            <option value="Qty: 5">Qty: 5</option>
                        </select>
                        <hr/>
                        <p class="action-btn">Delete</p>
                        <hr/>
                        <p class="action-btn">Save for later</p>
                        <hr/>
                        <p class="action-btn">Compare with similar items</p>
                        <hr/>
                        <p class="action-btn">Share</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div class="product-cart-list">
                <img src={Img50} style={{width:"180px"}}  alt=""/>
                <div>
                    <div class="product-cart-titleprice">
                        <p>BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over
                            Ear Headphones with Mic, LED Light, Bass Surround</p>
                        <p><b>$25.99</b></p>
                    </div>
                    <p class="product-cart-bestseller"><span>#1 Best Seller</span> in PC Game Headsets</p>
                    <p class="product-cart-stock">In Stock</p>
                    <p class="product-cart-delivery">FREE delivery <b>Mon, Jan 29</b> on $35 of items shipped by Amazon
                    </p>
                    <p class="product-cart-returns">FREE Returns &#11191</p>
                    <p class="product-cart-giftoption"><input type="checkbox"/> This is a gift <span>Learn more</span>
                    </p>
                    <div class="product-cart-specs">
                        <p><b>Style:</b></p>
                        <p>Wired</p>
                        <p><b>Size:</b></p>
                        <p>Free</p>
                        <p><b>Color:</b></p>
                        <p>Blue</p>
                    </div>
                    <div class="product-cart-list-action">
                        <select>
                            <option value="Qty: 1">Qty: 1</option>
                            <option value="Qty: 2">Qty: 2</option>
                            <option value="Qty: 3">Qty: 3</option>
                            <option value="Qty: 4">Qty: 4</option>
                            <option value="Qty: 5">Qty: 5</option>
                        </select>
                        <hr/>
                        <p class="action-btn">Delete</p>
                        <hr/>
                        <p class="action-btn">Save for later</p>
                        <hr/>
                        <p class="action-btn">Compare with similar items</p>
                        <hr/>
                        <p class="action-btn">Share</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div class="cart-list-subtotal">
                Subtotal (2 items): <b>$274.99</b>
            </div>
        </div>
        <div class="cart-right">
            <div class="cart-free-delivery">
                <p>&#x2705</p>
                <p>Your order qualifies for FREE Shipping. <br/> Choose this option at checkout. <br/> See details</p>
            </div>
            <p class="cart-subtotal">Subtotal (2 items): <b>$274.99</b></p>
            <p class="cart-right-gift"><input type="checkbox"/> This order contains a gift</p>
            <button>Proceed to checkout</button>
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
