import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
function App() {
  const [images, setImages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.API}&q=${text}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => setImages(data.hits))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <div className="search-container">
        <h1>Image Gallery</h1>
        <input
          className="input"
          type="text"
          placeholder="Search for images"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="container">
        {images.map((img) => (
          <Card key={img.id} image={img} />
        ))}
      </div>
    </div>
  );
}

export default App;
