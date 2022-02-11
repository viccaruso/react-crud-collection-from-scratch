import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createFavoriteRestaurant } from './services/fetch-utils';

export default function AddFavorite() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [rating, setRating] = useState(1);
  const [website, setWebsite] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const restaurant = { name, cuisine, rating, website };
    await createFavoriteRestaurant(restaurant);
    history.push('/home');
  }

  function clearFields() {
    setName('');
    setCuisine('');
    setRating('');
    setWebsite('');
  }

  return (
    <div className='add-favorite-form'>
      <form onSubmit={handleSubmit}>
        <label>Restaurant Name
          <input required type='text' value={name} onChange={e => setName(e.target.value)}></input>
        </label>
        <label> Cuisine Type
          <input required type='text' value={cuisine} onChange={e => setCuisine(e.target.value)}></input>
        </label>
        <label> Rating
          <select value={rating} onChange={e => setRating(e.target.value)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </label>
        <label> Website
          <input required type='text' value={website} onChange={e => setWebsite(e.target.value)}></input>
        </label>
        <button type='submit'>Add Favorite</button>
        <button type='button' onClick={clearFields}>Reset</button>
        <button type='button' onClick={() => history.push('./home')}>Cancel</button>

      </form>          
    </div>
  );
}
