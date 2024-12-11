import React from 'react'
import { useEffect, useState } from 'react';
import './VideoTakeInfo.css'
function VideoTakerInfo() {

    const [result, setResult] = useState([]);

  useEffect(() => {
    getReview();
  }, []);

  const getReview = async () => {
    let result = await fetch('http://localhost:5000/VideoOverview');
    result = await result.json();
    setResult(result);
  };

  return (
    <div className="main-video-info-7642">
        <h1>Service Seekers</h1>
        <div className="video-info-container-7642">
            {
                result.length > 0 ? result.map((items, index) =>
                    <div key={index} className="video-info-card-7642">
                        <h3>{items.Fullname}</h3>
                        <h3>{items.Email}</h3>
                        <h3>{items.Address}</h3>
                        <h4>{items.ServiceCategory}</h4>
                        <h3>{items.Budget}</h3>
                        <h4>{items.Description}</h4>
                        <h4>{items.ProblemDStartedOn}</h4>
                        <a href="http://localhost:3001/" target="_blank" rel="noopener noreferrer">Hoist a Video Call</a>
                    </div>
                ) : <h1>No Reviews Found</h1>
            }
        </div>
    </div>
);

}
export default VideoTakerInfo