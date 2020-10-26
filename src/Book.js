import React, { Component } from "react";
import "./Book.css";
import icecream2 from "./1.jpg";
import { HashRouter } from "react-router-dom";

class Book extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="Book">
          <h1 className="head">
            500 Terry Francois Street San Francisco, CA 94158 | Daily 10AM-10PM
          </h1>
          <nav>
            <div className="Nav">
              <a
                style={{ color: "white", cursor: "pointer" }}
                href="/"
                className="nav-link "
              >
                Home
              </a>
              <a
                href="/Bookings"
                style={{ cursor: "pointer", color: "grey" }}
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
          <div className="Header">
            <h3>Catering & More</h3>
            <h1>EVENTS</h1>
          </div>
          <div className="whiteback">
            <div className="par1">
              <div>
                <h2>The Best IceCream</h2>
                <h4 className="font4">For the best party!</h4>
                <h5 className="explain">
                  With our cheap prices for the exquiste and delicous icecreams
                  and our good catering services we assure you that nothing will
                  go wrong!
                </h5>
              </div>
            </div>
            <div className="cards">
              <div className="cardone">
                <div className="cardtitle">ICE CREAM CART</div>
                <div>4 hr</div>
                <div>$200</div>
                <button
                  type="button"
                  class="btn btn-dark btn-sm "
                  style={{ marginTop: 10 }}
                >
                  Book Now
                </button>
              </div>
              <div className="cardtwo">
                <div className="cardtitle">ICE CREAM RESTAURANT</div>
                <div>7 hr</div>
                <div>$500</div>
                <button
                  type="button"
                  class="btn btn-dark btn-sm"
                  style={{ marginTop: 10 }}
                >
                  Book Now
                </button>
              </div>
            </div>
            <div className="imgconatiner">
              <img src={icecream2} className="last" />
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
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Book;
