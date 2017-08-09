import React, { Component } from "react";
import "./App.css";
import "./Background.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";

import Title from "./Title";
import Menu from "./Menu";
import RestLocation from "./RestLocation";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Hours from "./Hours";

import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import FlatButton from "material-ui/FlatButton";
import logo from "./logo.png";
import orbLogo from "./orb_logo.png";
import { white, darkBlack, fullBlack } from "material-ui/styles/colors";

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: darkBlack,
    accent1Color: "#dc3522"
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            className="App-header"
            title={<img src={logo} className="App-logo" />}
            iconElementRight={<img src={orbLogo} className="App-logo" />}
          />
          <ul className="cb-slideshow">
            <li><span>Image 01</span></li>
            <li><span>Image 02</span></li>
            <li><span>Image 03</span></li>
            <li><span>Image 04</span></li>
            <li><span>Image 05</span></li>
            <li><span>Image 06</span></li>
            <li><span>Image 07</span></li>
            <li><span>Image 08</span></li>
            <li><span>Image 09</span></li>
            <li><span>Image 10</span></li>
            <li><span>Image 11</span></li>
            <li><span>Image 12</span></li>
            <li><span>Image 13</span></li>
          </ul>
          <div className="App-content">
            <div className="App-section App-about">
              <AboutUs />
            </div>
            <div className="App-section App-menu">
              <h2>OUR AWESOME Menu</h2>
              <Menu />
            </div>

            <div className="App-section App-location">
              <h2>Location</h2>
              <RestLocation />
            </div>

            <div className="App-section App-hours">
              <h2>HOURS OF OPERATION</h2> 
              <Hours/>
              
            </div>

            <div className="App-section App-contactus">
              <h2>CONTACT US</h2> 
              <div itemscope itemtype="http://schema.org/LocalBusiness">
                <span itemprop="telephone">
                  <a href="tel:+18506484200">
                   1786-274-8935
                  </a>
                </span>
              </div>
              </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
