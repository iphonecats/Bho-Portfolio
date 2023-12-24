"use client" 
import React, { useState } from 'react'

interface Breed {
  name: string;
  description: string;
}

interface CatData {
  url: string;
  breeds?: Breed[];
  width: number;
  height: number;
}

const CatImageGenerator = () => {
  const [catData, setCatData] = useState<CatData | null>(null);
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

  const hasBreeds = (data: CatData): data is CatData & { breeds: Breed[] } => {
    return !!data.breeds && data.breeds.length > 0;
  };

  return (
    <section id="cat">
        <div className="my-10 text-center font-bold font-mono text-4xl pt-40">
        <button onClick={generateRandomCat}>Click Me =^_^=</button>
        <hr className="w-10 h-2 mx-auto my-3 bg-gray-400 border-0 rounded"></hr>
        {catData && (
            <div className="mt-4">
            <img
                src={catData.url}
                alt="Random Cat"
                className="w-full h-full object-cover rounded-3xl"
            />
            {hasBreeds(catData) && (
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