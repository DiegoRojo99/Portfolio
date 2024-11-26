import React from "react";
import "./Extras.css";

export default function Separator({ text }) {
  return (
    <div className="separator">
      <div className="scrolling-wrapper">
        <p className="scrolling-text">
          {text}
        </p>
      </div>
    </div>
  );
}
