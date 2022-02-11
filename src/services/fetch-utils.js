import { client, checkError } from './client';

export async function getUser() {
  return client.auth.session();
}

export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function signUp(email, password) {
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function getRestaurants() {
  const response = await client
    .from('favorite-restaurants')
    .select();

  return checkError(response);
}

export async function createFavoriteRestaurant(restaurant) {
  const response = await client
    .from('favorite-restaurants')
    .insert(restaurant);

  return checkError(response);
}