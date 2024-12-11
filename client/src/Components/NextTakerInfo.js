import React from 'react';
import './NextTakerInfo.css';

function NextTakerInfo() {
  return (
    <div className="main469">
      <div className="nextTakerInfoContainer">
        <h1 className="nextTakerInfoText">
          Your data has been collected and will reach out to you soon
        </h1>
        {/* Shapes added to the background */}
        <div className="cube shape"></div>
        <div className="circle shape"></div>
        <div className="triangle shape"></div>
        <div className="rect shape"></div>
        <div className="cube2 shape"></div>
        <div className="rect2 shape"></div>
        {/* You can add more shapes if you want */}
      </div>
    </div>
  );
}

export default NextTakerInfo;
