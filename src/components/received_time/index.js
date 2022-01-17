import * as React from "react";

const receivedTimeStyle = {
  marginTop: -10,
  padding: "2px 18px 15px",
  color: "#c3c3c3",
  fontSize: "15px",
};

const o2Style = {
  color: "#3e66c5",
};

export const ReceivedTime = ({ receivedTime }) => (
  <div style={receivedTimeStyle}>
    {receivedTime}
    <span style={o2Style}> • via O2 - SK</span>
  </div>
);
