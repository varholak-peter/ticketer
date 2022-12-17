import * as React from "react";
import footer from "assets/footer.JPEG";

const { Fragment } = React;



const footerStyle = {
  width: "100%",
  position: "fixed",
  bottom: 0,
  zIndex: 2,
};


export const Footer = () => (
  <Fragment>
    <img src={footer} alt="" style={footerStyle} />
  </Fragment>
);
