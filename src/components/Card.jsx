import React from "react";

function Card({ image }) {
    const handleDownload =  (imageSrc) => {
        window.open(imageSrc, "_blank");
    };

    return (
        <div className="card">
            <img src={image.webformatURL} alt="Result" />
            <div className="card-info">
                <p>Likes: {image.likes}</p>
                <button onClick={() => handleDownload(image.largeImageURL)}>
                    View
                </button>
            </div>
        </div>
    );
}

export default Card;
