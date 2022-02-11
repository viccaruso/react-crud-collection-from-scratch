import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import RestaurantList from './RestaurantList';
import { getRestaurants } from './services/fetch-utils';

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const history = useHistory();

  function routeChange() {
    history.push('/add-favorite');
  }


  useEffect(() => {
    async function fetch() {
      const data = await getRestaurants();
      setRestaurants(data);
    }

    fetch();

  }, []);


  return (
    <div className='home-page'>
      <RestaurantList restaurants={restaurants} />
      <button type='button' onClick={routeChange}>Add Restaurant</button>
    </div>
  );
}
