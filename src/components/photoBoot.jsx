import react from "react";
import { useState, useEffect } from 'react';


const PhotoBoot = () => {
    const [photos, setPhotos] = useState([]);
    const [urlphotos, setnewPhotoUrl] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/photos")
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

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch("http://localhost:5000/api/photos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: urlphotos, description: "User photo" }),
        });
        if (!response.ok) throw new Error('Failed to add photos');

        const data = await response.json();
        setPhotos((prev) => [data, ...prev]);
        setnewPhotoUrl("")
      } catch (err) {
        setError(err);
      }
    };
        
        if (loading) return <p className="text-align-center">Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
      <div className="p-4">
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            value={urlphotos}
            onChange={(e) => setnewPhotoUrl(e.target.value)}
            placeholder="Enter photo URL"
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="ml-2 p-2 bg-blue-500 text-white rounded"
          >
            Add Photo
          </button>
        </form>
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
      </div>
    );
  };  

    export default PhotoBoot;