import * as React from "react";

const dividerStyle = {
  padding: "22px 0",
  position: "relative",
  textAlign: "center",
};

const dateStyle = {
  position: "absolute",
  top: 18,
  right: 0,
  left: 0,
  margin: "0 auto",
  color: "#c3c3c3",
  fontSize: "15px",
  fontWeight: "500",
};

export const Divider = ({ date }) => (
  <div style={dividerStyle}>
    <span style={dateStyle}>{date}</span>
  </div>
);
