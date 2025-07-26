import React from 'react'

const App = () => {
  return (
    <div>
      <div className="container">
        <nav>
          <div className="nav-right">
            <div className="logo">
            <img src="./images/Logo.svg" alt="" />
          </div>
          <ul>
            <li>Home</li>
            <li className='gap'>Menu<img src="./images/bitta.svg" alt="" /></li>
            <li className='gap'>Services<img src="./images/bitta.svg" alt="" /></li>
            <li>Offers</li>
          </ul>
          </div>
          <div className="nav-box">
            <img src="./images/search.svg" alt="" />
            <div className="phone">
              <img src="./images/phone.svg" alt="" />
              <p>Contact</p>
            </div>
          </div>
        </nav>
        <div className="hero">
          <div className="left">
            <h1>Dive into Delights Of Delectable <span>Food</span></h1>
            <p>Where Each Plate Weaves a Story of Culinary<br /> Mastery and Passionate Craftsmanship</p>
            <div className="hero-pas">
              <button className='btn1'>Order Now</button>
              <button className='btn2'>Watch Video</button>
              <button className='btn3'>
                <img src="./images/watch.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="right">
            <img src="./images/right.svg" alt="" />
          </div>
        </div>
        <main>
          <p className='text'>Customer Favorites</p>
          <h1 className='title'>Popular Categories</h1>
          <div className="row">
            <div className="box">
              <div className="box-img">
                <img src="./images/burger.svg" alt="" />
              </div>
              <h1 className='box-title'>Main Dish</h1>
              <p className='box-text'>(86 dishes)</p>
            </div>
            <div className="box">
              <div className="box-img">
                <img src="./images/bilmiman.svg" alt="" />
              </div>
              <h1 className='box-title'>Break Fast</h1>
              <p className='box-text'>(12 break fast)</p>
            </div>
            <div className="box">
              <div className="box-img">
                <img src="./images/morojniy.svg" alt="" />
              </div>
              <h1 className='box-title'>Dessert</h1>
              <p className='box-text'>(48 dessert)</p>
            </div>
            <div className="box">
              <div className="box-img">
                <img src="./images/sok.svg" alt="" />
              </div>
              <h1 className='box-title'>Browse All</h1>
              <p className='box-text'>(255 Items)</p>
            </div>
          </div>
        </main>
        <div className="main-box">
          <p className='textcha'>Special Dishes</p>
          <h1 className='titlecha'>Standout Dishes<br /> From Our Menu</h1>
          <div className="main-row">
            <div className="boxcha">
              <img src="./images/salad1.svg" alt="" />
              <h1>Fattoush salad</h1>
              <p>Description of the item</p>
              <h3><span>$</span>24.00</h3>
            </div>
            <div className="boxcha">
              <img src="./images/salad2.svg" alt="" />
              <h1>Vegetable salad</h1>
              <p>Description of the item</p>
              <h3><span>$</span>26.00</h3>
            </div>
            <div className="boxcha">
              <img src="./images/salad3.svg" alt="" />
              <h1>Egg vegi salad</h1>
              <p>Description of the item</p>
              <h3><span>$</span>23.00</h3>
            </div>
          </div>
        </div>
        <div className="main-box2">
          <div className="main-left">
            <img src="./images/chef.svg" alt="" />
          </div>
          <div className="main-right">
            <p className='right-text'>Testimonials</p>
            <h1 className='right-title'>What Our Customers<br /> Say About Us</h1>
            <p className='right-text2'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
            <div className="qanaqa">
              <div className="qanaqa-left">
                <img src="./images/mask1.svg" alt="" />
                <img src="./images/mask2.svg" alt="" />
                <img src="./images/mask3.svg" alt="" />
              </div>
              <div className="qanaqa-right">
                <h1>Customer Feedback</h1>
                <p>(18.6k Reviews)</p>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="footer-box1">
          <div className="logo">
            <img src="./images/Logo.svg" alt="" />
          </div>
          <p>Savor the artistry where<br /> every dish is a culinary<br /> masterpiece</p>
        </div>
        <div className="footer-box2">
          <h1>Useful links</h1>
          <div className="p1">
            <p>About us</p>
            <p>Events</p>
            <p>Blogs</p>
            <p>FAQ</p>
          </div>
        </div>
        <div className="footer-box2">
          <h1>Main Menu</h1>
          <div className="p1">
            <p>Home</p>
            <p>Offers</p>
            <p>Menus</p>
            <p>Reservation</p>
          </div>
        </div>
        <div className="footer-box2">
          <h1>Contact Us</h1>
          <div className="p1">
            <p>example@email.com</p>
            <p>+64 958 248 966</p>
            <p>Social media</p>
          </div>
        </div>
        </footer>
        <div className="footer-box">
          <div className="images">
            <div className="footer-img">
              <img src="./images/facebook.svg" alt="" />
            </div>
            <div className="footer-img">
              <img src="./images/instagram.svg" alt="" />
            </div>
            <div className="footer-img">
              <img src="./images/twitter.svg" alt="" />
            </div>
            <div className="footer-img">
              <img src="./images/youtube.svg" alt="" />
            </div>
          </div>
          <p>Copyright 2023 Dscode | All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default App