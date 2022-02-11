import React from 'react';
import { useEffect, useState } from 'react';
import { getRestaurants } from './services/fetch-utils';

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetch() {
      const data = await getRestaurants();
      setRestaurants(data);
      console.log(data);
    }
    fetch();
  }, []);


  return (
    <div className='home-page'>Home</div>
  );
}
