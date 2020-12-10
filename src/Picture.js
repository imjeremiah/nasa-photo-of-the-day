import React from "react";

export default function Picture(props) {
  
    return (
      <div className="App">
      <h1><span role="img" aria-label='go!'>🚀</span> NASA's Astronomy Picture of the Day <span role="img" aria-label='go!'>🚀</span>
      </h1>
      <img src={props.photo} alt="space"/>
      </div>
    );
  }