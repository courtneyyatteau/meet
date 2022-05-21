import React from "react";
import "./WelcomeScreen.css";
import { Card } from "react-bootstrap";
import image from "./welcome_image.png";

function WelcomeScreen(props) {
  return props.showWelcomeScreen ? (
    <div className="WelcomeScreen">
      <div className="light x1"></div>
      <div className="light x2"></div>
      <div className="light x3"></div>
      <div className="light x4"></div>
      <div className="light x5"></div>
      <div className="light x6"></div>
      <div className="light x7"></div>
      <div className="light x8"></div>
      <div className="light x9"></div>
      <div className="Welcome">
        <Card className="card">
          <Card.ImgOverlay>
            <Card.Img src={image} alt="Card image" className="card-img" />
            <h2>
              Log in to see upcoming events around the world for full-stack
              developers!
            </h2>
            <div className="button_cont" align="center">
              <div className="google-btn">
                <div className="google-icon-wrapper">
                  <img
                    className="google-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log
o.svg"
                    alt="Google sign-in"
                  />
                </div>
                <button
                  onClick={() => {
                    props.getAccessToken();
                  }}
                  rel="nofollow noopener"
                  className="btn-text"
                >
                  <b>Sign in with google</b>
                </button>
              </div>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>

      <a
        href="https://courtneyyatteau.github.io/meet/privacy.html"
        rel="nofollow noopener noreferrer"
        target="_blank"
      >
        Privacy policy
      </a>
    </div>
  ) : null;
}
export default WelcomeScreen;
