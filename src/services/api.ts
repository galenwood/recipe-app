import axios from 'axios';

const API_URL = 'https://www.themealdb.com/api/json/v1/1';

export const getAllMeals = async () => {
  const { data } = await axios.get(`${API_URL}/search.php?s=`);
  return data.meals;
};

export const getMealById = async (id: string) => {
  const { data } = await axios.get(`${API_URL}/lookup.php?i=${id}`);
  return data.meals[0];
};

export const getMealsByCategory = async (category: string) => {
  const { data } = await axios.get(`${API_URL}/filter.php?c=${category}`);
  return data.meals;
};
