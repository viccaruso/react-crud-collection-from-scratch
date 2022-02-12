import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { editFavoriteRestaurant, getSingleRestaurant, deleteRestaurant } from './services/fetch-utils';

export default function UpdatePage() {
  const history = useHistory();
  const { id } = useParams();
  const [name, setName] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [rating, setRating] = useState(1);
  const [website, setWebsite] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const restaurant = { name, cuisine, rating, website };
    await editFavoriteRestaurant(id, restaurant);
    history.push('/home');
  }

  async function handleDelete(id) {
    await deleteRestaurant(id);
    history.push('/home');
  }

  function clearFields() {
    setName('');
    setCuisine('');
    setRating('');
    setWebsite('');
  }

  useEffect(() => {
    async function fetch() {
      const restaurant = await getSingleRestaurant(id);

      setName(restaurant.name);
      setCuisine(restaurant.cuisine);
      setRating(restaurant.rating);
      setWebsite(restaurant.website);
    }

    fetch();

  }, [id]);


  return (
    <>
      <h1>Edit Restaurant Details</h1>
      <div className='restaurant-form-container'>
        <form className='restaurant-form' onSubmit={handleSubmit}>
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
          <div className='button-div'>
            <button type='button' onClick={clearFields}>Reset Fields</button>
            <button type='submit' style={{ background: 'lightgreen' }}>Update</button>
            <button type='button' onClick={() => history.push('../home')}>Cancel</button>
          </div>
        </form>
        <button type='button' id='delete-button' onClick={() => handleDelete(id)}>DELETE</button>
      </div>
    </>
  );
}
