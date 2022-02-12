import React from 'react';
import { Link } from 'react-router-dom';

export default function Restaurant({ restaurant }) {
  return (
    <div className='restaurant'>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.cuisine}</p>
      <p>{restaurant.rating}</p>
      <a href={restaurant.website} target="_blank" rel="noreferrer">
        <p>{`Visit ${restaurant.name}'s website`}</p>
      </a>
      <Link to={`/edit/${restaurant.id}`} >
        <p>Update details</p>
      </Link>
    </div>
  );
}
