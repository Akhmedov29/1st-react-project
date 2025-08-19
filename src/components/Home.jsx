import React, { useEffect, useState } from "react";
import ImageContainer from "./api/ImageContainer";
import Loader from './Loader';

function Home() {
const ACCESS_KEY = 'alpye9XZWtjg-VwBO9huP8WGjwLLm6i9U82DOowhIms';
  const PER_PAGE = 10;  // Har bir so'rovda olinadigan rasm soni

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (pageNumber) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.unsplash.com/photos?page=${pageNumber}&per_page=${PER_PAGE}&client_id=${ACCESS_KEY}`
      );
      const data = await res.json();
      setImages(prev => [...prev, ...data]);
    } catch (error) {
      console.error("Rasm yüklanishida xatolik:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(page);
  }, [page]);

  const handleShowMore = () => {
    setPage(prev => prev + 1);
  };



  return (

    <div>
      <div className="mx-4 my-2">
      {images && images.length > 0 ? (
        <ImageContainer images={images}/> 
      ) : (
        <Loader/>
      )}
    </div>
    <div className="flex justify-center">
    <div className="flex justify-center my-4">
        <button
          className="btn btn-outline"
          onClick={handleShowMore}
          disabled={loading}
        >
          {loading ? 'Yuklanmoqda...' : 'Show more...'}
        </button>
      </div>
    </div>
    </div>
  );
}

export default Home;
