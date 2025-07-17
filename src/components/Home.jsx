import React, { useEffect, useState } from "react";
import ImageContainer from "./api/ImageContainer";



function Home() {
const ACCESS_KEY = 'alpye9XZWtjg-VwBO9huP8WGjwLLm6i9U82DOowhIms'
const [images,setImages] = useState([])

useEffect(() => {
  fetch(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`)
  .then(res => {
    return res.json()
  })
  .then(data => {
    setImages(data)
  })
},[])


  return (
    <div className="mx-4 my-2">
      {images && <ImageContainer images={images}/>}
    </div>
  );
}

export default Home;
