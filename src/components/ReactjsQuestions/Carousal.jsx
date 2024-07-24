import React, { useEffect, useState } from 'react'

export const Carousal = () => {
  const [images, setImages] = useState([])
  const [activeImage, setActiveImage] = useState(1)

  let URL = "https://jsonplaceholder.typicode.com/photos";

  let fetchImages = async () => {
    let res = await fetch(URL);
    let result = await res.json();
    setImages(result)
  }

  useEffect(()=>{

    fetchImages()
  },[])

  console.log("images", images);

  return (
    <div>
      <div>
        { images.length > 0 && images.map((image)=> <img key={image.id} src={image.url} alt={image.title} style={{display: activeImage == image.id ? "block" : "none" }} /> )}
      </div>
      {activeImage > 1 && <button onClick={()=>setActiveImage((prev)=>prev-1)}>prev</button>}
      {activeImage.length-1 !== activeImage && <button onClick={()=>setActiveImage((prev)=>prev+1)}>next</button>}
    </div>
  )
}
