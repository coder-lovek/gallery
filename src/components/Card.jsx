import React from "react";

function Card({ image }) {
    const handleSubmit=()=>{
        
    }
  return (
    <div className="card">
      <img src={image.webformatURL} alt="Result" />
      <div className="card-info">
        <p> likes-{image.likes}</p>
        <button onClick={handleSubmit}>download</button>
      </div>
    </div>
  );
}

export default Card;
