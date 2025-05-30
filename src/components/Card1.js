import React, { useEffect, useRef, useState } from 'react';

function Card1() {
  const dataRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [searchQuery,setSearchQuery] = useState('polar bear')

  // Don't steal
  const API_KEY = '38920764-d1d94105f5b0190097849ebcb'; 
  useEffect(()=> {
      fetch('https://random-word-api.herokuapp.com/word?number=1')
      .then(res => res.json())
      .then(([word]) => {
        console.log(word);
        setSearchQuery(word);}).catch(()=>{
        setSearchQuery('polar bear')});

  }
  ,[])


  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=38920764-d1d94105f5b0190097849ebcb&q=${encodeURIComponent(searchQuery)}+flowers&image_type=photo`)
      .then(res => res.json())
      .then(data => {
        if (data.hits && data.hits.length > 0) {
          console.log(data)
          const url = data.hits[0].webformatURL;
          setImageUrl(url);
          dataRef.current = url;
        } else {
          setImageUrl(null);
        }
      })
      .catch(() => {
        setImageUrl(null);
      });
  }, []);

  return (
    <div className="card">
      <h3>Pixabay Image</h3>
      {imageUrl ? (
        <img src={imageUrl} alt="Pixabay result" style={{ width: '100%', borderRadius: '8px' }} />
      ) : (
        <p>Image not found or still loading...</p>
      )}
    </div>
  );
}

export default Card1;
