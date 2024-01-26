import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const apiKey = "ZZtRlQ288dCVUgpPvJ9Os1I8pKxM7VAxostC9hkqc28LSCZ8SeaGPcpZ";
        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${query}`,
          {
            headers: {
              Authorization: apiKey,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setImages(data.photos);
        } else {
          console.error("Failed to fetch images");
        }
      } catch (error) {
        console.error("Error fetching images", error);
      }
    };

    if (query) {
      fetchImages();
    }
  }, [query]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Search Results for "{query}"</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {images.map((image) => (
          <div key={image.id} className="col">
            <div className="card h-100">
              <img
                src={image.src.medium}
                className="card-img-top"
                alt={image.photographer}
              />
              <div className="card-body">
                <p className="card-text">
                  Photographer: {image.photographer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
