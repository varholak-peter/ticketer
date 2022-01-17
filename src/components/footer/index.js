import * as React from "react";
import footer from "assets/footer.png";

const { Fragment } = React;

const cursorStyle = {
  position: "fixed",
  bottom: 18,
  left: "29%",
  fontSize: 28,
  fontWeight: 300,
  zIndex: 3,
  animation: "1s blink step-end infinite",
};

const footerStyle = {
  width: "100%",
  position: "fixed",
  bottom: 0,
  zIndex: 2,
};

export const Footer = () => (
  <Fragment>
    <span style={cursorStyle}>|</span>
    <img src={footer} alt="" style={footerStyle} />
  </Fragment>
);
