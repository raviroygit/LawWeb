import React from "react";
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import MyTitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import ContactForm from "./pages/contact-form/contact-form.component";
import { Parallax } from "react-parallax";

import FooterPanel from "./components/footer/footer.component";

import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyCarousal />
      <MyTitleMessage />
      <MyNavbar />
      
      <div>
        <Parallax className="parallax"
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallax/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Parallax className="parallax"
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallax/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>
      </Parallax>
      <hr />
      <FooterPanel />
    </div>
  );
};

export default App;