import React from 'react';
import Restaurant from './Restaurant';

export default function RestaurantList({ restaurants }) {

  return (
    <>
      <h1>My Favorite Restaurants</h1>
      <div className='restaurant-list'>
        {restaurants.map((restaurant) => <Restaurant restaurant={restaurant} key={restaurant.id} />)}
      </div>
    </>
  );
}
