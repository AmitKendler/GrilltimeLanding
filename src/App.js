import React, { Component } from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import {
  LandingCanvas,
  GenericBrick,
  StrongMessageBrick
} from "landricks-components";

import Title from "./Title";
import Menu from "./Menu";
import RestLocation from "./RestLocation";

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
        <LandingCanvas>
          <AppBar
            className="App-header"
            title={<img src={logo} className="App-logo" />}
            iconElementRight={<img src={orbLogo} className="App-logo" />}
          />

          <div>
            <Title mainTitle="GRILL TIME RESTAURANT" subTitle="FUSION STEAK HOUSE" />
          </div>

          <GenericBrick
            className="Menu-area"
            theme={{
              fontFamily: "Lato",
              baseFontSize: "18px",
              backgroundColor: "#FAFAFA"
            }}
          >
            <h2>OUR AWESOME Menu</h2>
            <Menu />
          </GenericBrick>
          <GenericBrick
            wrapperStyle={{ padding: 0 }}
            theme={{
              fontFamily: "sans-serif",
              baseFontSize: "18px",
              backgroundColor: "#dc3522",
              textColor: "white"
            }}
          >
            <StrongMessageBrick
              wrapperStyle={{ padding: "1%" }}
              messageLevel1="If you have any problem ... We are available 24/7"
            />
            <RestLocation />
          </GenericBrick>
          <GenericBrick
            theme={{
              fontFamily: "Lato",
              baseFontSize: "18px",
              backgroundColor: "#29D9C2",
              textColor: "white"
            }}
            backgroundImage="http://digitalcenturysf.com/themes/chili/wordpress/wp-content/uploads/2016/08/footer-bg.jpg"
            title="About"
          />

        </LandingCanvas>
      </MuiThemeProvider>
    );
  }
}

export default App;
