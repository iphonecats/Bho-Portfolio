"use client" 
import React, { useState } from 'react'

const CatImageGenerator = () => {
  const [catData, setCatData] = useState(null);
  const apiKey = 'live_Xk1fGFfhR6PFjOs4UN2Y6GsmYoKAMlw1mDyl6K1rznsH1wg45jgAzvZFTIlFjpvw'

  const generateRandomCat = async () => {
    
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search', {
        headers: {
          'x-api-key': apiKey,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch cat image: ${response.statusText}`)
      }

      const data = await response.json();
      setCatData(data[0]);
      console.log(data[0])
    } catch (error) {
      console.error('Error fetching cat image:', error)
    }
  };

  return (
    <section id="cat">
        <div className="my-10 text-center font-bold font-mono text-4xl">
        <button onClick={generateRandomCat}>Click Me =^_^=</button>
        {catData && (
            <div className="mt-4">
            <img
                src={catData.url}
                alt="Random Cat"
                className="w-full h-full object-cover rounded-3xl"
            />
            {catData.breeds.length > 0 && (
                <p className="mt-2 text-gray-600">
                Breed: {catData.breeds[0].name} - {catData.breeds[0].description}
                </p>
            )}
            </div>
        )}
        </div>
    </section>

  );
};

export default CatImageGenerator