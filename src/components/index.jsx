import React from 'react';
import './index.css'
import Img from '../assets/amazon_logo.png';
import Img1 from '../assets/location_icon.png';
import Img2 from '../assets/dropdown_icon.png';
import Img3 from '../assets/search_icon.png';
import Img4 from '../assets/us_flag.png';
import Img5 from '../assets/user.png';
import Img6 from '../assets/cart_icon.png';
import Img7 from '../assets/menu_icon.png';
import Img8 from '../assets/header1.jpg';
import Img9 from '../assets/header2.jpg';
import Img10 from '../assets/header3.jpg';
import Img11 from '../assets/header4.jpg';
import Img12 from '../assets/header5.jpg';
import Img13 from '../assets/header6.jpg';
import Img14 from '../assets/box1-1.jpg';
import Img15 from '../assets/box1-2.jpg';
import Img16 from '../assets/box1-3.jpg';
import Img17 from '../assets/box1-4.jpg';
import Img18 from '../assets/box2-1.jpg';
import Img19 from '../assets/box2-2.jpg';
import Img20 from '../assets/box2-3.jpg';
import Img21 from '../assets/box2-4.jpg';
import Img22 from '../assets/product_img.jpg';
import Img23 from '../assets/product1-1.jpg';
import Img24 from '../assets/product1-2.jpg';
import Img25 from '../assets/product1-3.jpg';
import Img26 from '../assets/product1-4.jpg';
import Img27 from '../assets/product1-5.jpg';
import Img28 from '../assets/product1-6.jpg';
import Img29 from '../assets/product1-7.jpg';
import Img30 from '../assets/product1-8.jpg';
import Img31 from '../assets/product1-9.jpg';
import Img32 from '../assets/product1-10.jpg';
import Img33 from '../assets/box3-1.jpg';
import Img34 from '../assets/box3-2.jpg';
import Img35 from '../assets/box3-3.jpg';
import Img36 from '../assets/box3-4.jpg';
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


export const Index = () => {
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

    <div class="header-slider" id="slider">
        <a href="#" class="control_prev">&#129144</a>
        <a href="#" class="control_next">&#129146</a>
        <ul>
            <img class="header-img" src={Img8} alt=""/>
            <img class="header-img" src={Img9} alt=""/>
            <img class="header-img" src={Img10} alt=""/>
            <img class="header-img" src={Img11} alt=""/>
            <img class="header-img" src={Img12} alt=""/>
            <img class="header-img" src={Img13} alt=""/>
        </ul>
    </div>

    <div class="header-box box-row">
        <div class="box-col">
            <h3>Free international returns</h3>
            <img src={Img14} alt=""/>
            <a href="/">Shop More</a>
        </div>
        <div class="box-col">
            <h3>Lunar New Year</h3>
            <img src={Img15} alt=""/>
            <a href="/">Shop More</a>
        </div>
        <div class="box-col">
            <h3>Toy under $25</h3>
            <img src={Img16} alt=""/>
            <a href="/">Shop More</a>
        </div>
        <div class="box-col">
            <h3>Deals in PCs</h3>
            <img src={Img17} alt=""/>
            <a href="/">Shop More</a>
        </div>
    </div>

    <div class="box-row">
        <div class="box-col">
            <h3>Grooming Products</h3>
            <img src={Img18} alt=""/>
            <a href="/">Shop More</a>
        </div>
        <div class="box-col">
            <h3>Latest Devices</h3>
            <img src={Img19} alt=""/>
            <a href="/">Shop More</a>
        </div>
        <div class="box-col">
            <h3>Pets Food</h3>
            <img src={Img20} alt=""/>
            <a href="/">Shop More</a>
        </div>
        <div class="box-col">
            <h3>Fashion Mart</h3>
            <img src={Img21} alt=""/>
            <a href="/">Shop More</a>
        </div>
    </div>

    <div class="products-slider">
        <h2>Best Sellers in Sports & Outdoors</h2>
        <div class="products">
            <a href="/product.html"><img src={Img22} alt=""/></a>
            <img src={Img23} alt=""/>
            <img src={Img24} alt=""/>
            <img src={Img25} alt=""/>
            <img src={Img26} alt=""/>
            <img src={Img27} alt=""/>
            <img src={Img28} alt=""/>
            <img src={Img29} alt=""/>
            <img src={Img30} alt=""/>
            <img src={Img31} alt=""/>
            <img src={Img32} alt=""/>
        </div>
    </div>

    <div class="box-row">
        <div class="box-col">
            <h3>Stationery</h3>
            <img src={Img33} alt=""/>
            <a href="/">Shop More</a>
        </div>
        <div class="box-col">
            <h3>Laptops for study</h3>
            <img src={Img34} alt=""/>
            <a href="/">Shop More</a>
        </div>
        <div class="box-col">
            <h3>Office chairs</h3>
            <img src={Img35} alt=""/>
            <a href="/">Shop More</a>
        </div>
        <div class="box-col">
            <h3>Gaming Monitor</h3>
            <img src={Img36} alt=""/>
            <a href="/">Shop More</a>
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

    <div class="products-slider">
        <h2>Best Sellers in Sports & Outdoors</h2>
        <div class="products">
            <img src={Img23} alt=""/>
            <img src={Img24} alt=""/>
            <img src={Img25} alt=""/>
            <img src={Img26} alt=""/>
            <img src={Img27} alt=""/>
            <img src={Img28} alt=""/>
            <img src={Img29} alt=""/>
            <img src={Img30} alt=""/>
            <img src={Img31} alt=""/>
            <img src={Img32} alt=""/>
        </div>
    </div>

    <div class="box-row">
        <div class="box-col">
            <h3>Grooming Products</h3>
            <img src={Img18} alt=""/>
            <a href="/">Shop More</a>
        </div>
        <div class="box-col">
            <h3>Latest Devices</h3>
            <img src={Img19} alt=""/>
            <a href="/">Shop More</a>
        </div>
        <div class="box-col">
            <h3>Pets Food</h3>
            <img src={Img20} alt=""/>
            <a href="/">Shop More</a>
        </div>
        <div class="box-col">
            <h3>Fashion Mart</h3>
            <img src={Img21} alt=""/>
            <a href="/">Shop More</a>
        </div>
    </div>
    
    <footer>
        <img src={Img} style={{width:"100px"}} alt=""/>
        <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
    </footer>
    </div>
  )
}
