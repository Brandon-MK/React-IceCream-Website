import React from "react";
import area from "./place.jpg";
import icecream2 from "./icecream.jpg";
import "./App.css";
import { HashRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <h1 className="head">
          500 Terry Francois Street San Francisco, CA 94158 | Daily 10AM-10PM
        </h1>
        <nav>
          <div className="Nav">
            <a
              style={{ color: "grey", cursor: "pointer" }}
              href="/"
              className="nav-link "
            >
              Home
            </a>
            <a
              href="/Bookings"
              style={{ cursor: "pointer", color: "white" }}
              className="nav-link "
            >
              Booking
            </a>
            <h4 className="title" style={{ cursor: "pointer" }}>
              Gelato
            </h4>
            <a
              href="/Flavours"
              style={{ cursor: "pointer", color: "white" }}
              className="nav-link "
            >
              Flavours
            </a>
            <a
              href="/About"
              style={{ cursor: "pointer", color: "white" }}
              className="nav-link "
            >
              About
            </a>
          </div>
        </nav>
        <div className="firstImage">
          <div>
            <div className="welcome">
              Welcome to Gelato
              <div style={{ fontSize: 35 }}>Natrual and Hand made!</div>
              <div>
                <Link to="/Flavours">
                  <button
                    type="button"
                    class="btn btn-dark btn-lg"
                    style={{ fontSize: 20 }}
                  >
                    Flavours
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="cont-2">
          <img src={icecream2} className="flavours" />
          <div className="cont-2-words">
            <div style={{ fontSize: 50 }} className="font1">
              Our Flavours
            </div>
            <div style={{ fontSize: 30 }} className="font2">
              Fresh and Tasty!
            </div>
            <div style={{ fontSize: 20, width: 300 }} className="font3">
              With our 70+ natural sweet flavours and 10 syrups to choose from
              and lets not forget the various toppings.
            </div>
            <Link to="/Flavours">
              <button
                type="button"
                class="btn btn-dark btn-lg"
                style={{ marginTop: 50 }}
              >
                View Menu
              </button>
            </Link>
          </div>
        </div>
        <div className="secondImage">
          <div className="welcome">
            Enjoy
            <div style={{ fontSize: 170 }} className="font4">
              Diary Free
            </div>
            <Link to="/Flavours">
              <button
                type="button"
                class="btn btn-outline-dark btn-lg"
                style={{ marginTop: 50 }}
              >
                View Menu
              </button>
            </Link>
          </div>
        </div>
        <div style={{ marginBottom: 90 }}>
          <img src={area} className="events" />
          <div className="event-words">
            <div style={{ fontSize: 50 }} className="font1">
              Our Place
            </div>
            <div style={{ fontSize: 30 }} className="font2">
              Ice cream by the sea!
            </div>
            <div style={{ fontSize: 20 }} className="font3">
              A place of comfort and design not only is the delicious but its
              also the place is a home away from home.
            </div>
            <Link to="/About">
              <button
                type="button"
                class="btn btn-dark btn-lg"
                style={{ marginTop: 50 }}
              >
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer">
          <div className="Address">
            <h2>Address</h2>
            <div>
              <h3>500 Terry Francois St.</h3>
              <h3>San Francisco,</h3>
              <h3>CA 94158</h3>
            </div>
          </div>
          <div className="contact">
            <h2>Contact</h2>
            <div>
              <h3>Gelato@gmail.com</h3>
              <h3>Tel: 214-365-8709 </h3>
            </div>
          </div>
          <div className="Hours">
            <h2>Hours</h2>
            <div>
              <h3>OPEN DAILY</h3>
              <h3>10AM-10PM</h3>
            </div>
          </div>
          <div className="Mail-listing">
            <h2>Mail Listings</h2>
            <form class="form-inline">
              <div class="form-group mx-sm-3 mb-2">
                <input
                  type="Email"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Enter your email"
                />
              </div>
              <button type="submit" class="btn btn-outline-light mb-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="copyright">
          <h3>© Made by Brandon</h3>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
