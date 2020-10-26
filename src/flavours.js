import React, { Component } from "react";
import "./flavs.css";
import oreo from "./Flavours/oreo.png";
import choclate from "./Flavours/choclate.png";
import vanillaStrawberry from "./Flavours/VanillaStrawberry.png";
import cherryCheese from "./Flavours/cherryCheeseCake.png";
import BananaHoney from "./Flavours/BananaHoney.png";
import Brambleberry from "./Flavours/Brambleberry.png";
import Caramel from "./Flavours/Caramel.png";
import Hazelunt from "./Flavours/HazelnutCookies.png";
import Lime from "./Flavours/Lime.png";
import Pistachio from "./Flavours/Pistachio.png";
import strawberry from "./Flavours/strawberry.png";
import rasberry from "./Flavours/Rasberry.png";

class Flavours extends Component {
  render() {
    return (
      <div className="Flavours">
        <h1 className="head">
          500 Terry Francois Street San Francisco, CA 94158 | Daily 10AM-10PM
        </h1>
        <nav>
          <div className="Nav">
            <a
              style={{ color: "white", cursor: "pointer" }}
              href="/React-IceCream-Website/"
              className="nav-link "
            >
              Home
            </a>
            <a
              href="/React-IceCream-Website/Bookings"
              style={{ cursor: "pointer", color: "white" }}
              className="nav-link "
            >
              Booking
            </a>
            <h4 className="title" style={{ cursor: "pointer" }}>
              Gelato
            </h4>
            <a
              href="/React-IceCream-Website/Flavours"
              style={{ cursor: "pointer", color: "grey" }}
              className="nav-link "
            >
              Flavours
            </a>
            <a
              href="/React-IceCream-Website/About"
              style={{ cursor: "pointer", color: "white" }}
              className="nav-link "
            >
              About
            </a>
          </div>
        </nav>
        <div className="Header">
          <h3>Our</h3>
          <h1>Flavours</h1>
        </div>
        <div className="FlavSection">
          <div>
            <div className="inner">
              <h2>Ice Cream Flavours</h2>
              <div className="border"></div>
            </div>
            <div className="one">
              <div className="item1">
                <img src={oreo} />
                <h2>Oreo</h2>
                <h4>$9</h4>
              </div>
              <div className="item1">
                <img src={choclate} />
                <h2>Chocolate</h2>
                <h4>$9</h4>
              </div>
              <div className="item1">
                <img src={vanillaStrawberry} style={{ marginTop: -5 }} />
                <h2>Vanilla Strawberry</h2>
                <h4>$9</h4>
              </div>
            </div>
            <div className="one">
              <div className="item1">
                <img src={cherryCheese} />
                <h2>Cherry Cheese Cake</h2>
                <h4>$9</h4>
              </div>
              <div className="item1">
                <img src={Pistachio} />
                <h2>Pistachio</h2>
                <h4>$9</h4>
              </div>
              <div className="item1">
                <img src={Hazelunt} style={{ marginTop: -5 }} />
                <h2>Hazelnut & Cookies</h2>
                <h4>$9</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="FlavSection">
          <div>
            <div className="inner">
              <h2>Diary Free Flavours</h2>
              <div className="border"></div>
            </div>
            <div className="one">
              <div className="item1">
                <img src={Caramel} />
                <h2>Salted Carmel Soy</h2>
                <h4>$9</h4>
              </div>
              <div className="item1">
                <img src={Brambleberry} />
                <h2>Brambleberry Sorbet</h2>
                <h4>$9</h4>
              </div>
              <div className="item1">
                <img src={BananaHoney} style={{ marginTop: -5 }} />
                <h2>Banana & Honey</h2>
                <h4>$9</h4>
              </div>
            </div>
            <div className="one">
              <div className="item1">
                <img src={rasberry} />
                <h2>Raspberry Sorbet</h2>
                <h4>$9</h4>
              </div>
              <div className="item1">
                <img src={strawberry} />
                <h2>Strawberry Sorbet</h2>
                <h4>$9</h4>
              </div>
              <div className="item1">
                <img src={Lime} style={{ marginTop: -5 }} />
                <h2>Lime Sorbet</h2>
                <h4>$9</h4>
              </div>
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
      </div>
    );
  }
}

export default Flavours;
