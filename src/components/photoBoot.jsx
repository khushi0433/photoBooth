import react from "react";
import { useState, useEffect } from 'react';


const PhotoBoot = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://api.unsplash.com/photos/?client_id=5H5Sx7JakH3Oic5qs0meThOP9vClKWLYNBWMCieV_e0")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network error");
            }
            return response.json();
        })
        .then((response) => setPhotos((response)))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    }, []);
    if (loading) return <p className="text-align-center">Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
      <div className="flex flex-wrap mt-2 gap-3 justify-between">
        {photos.map((photo) => (
          <div key={photo.id}>
            <img
              src={photo.urls.regular}
              alt={photo.alt_description}
              style={{ width: "400px", height: "300px", objectFit: "cover" }}
              onClick={() => window.open(photo.links.html, "_blank")}
              className="rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    );
}

    export default PhotoBoot;