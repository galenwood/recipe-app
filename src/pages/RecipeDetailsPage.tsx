import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getMealById } from '../services/api';
import '../styles/RecipeDetailsPage.scss';

interface Meal {
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
}

function RecipeDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: ['meal', id],
    queryFn: () => getMealById(id!),
    enabled: !!id,  // Запит виконується лише якщо ID є
  });

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Something went wrong: {error.message}</p>;

  if (!data) return <p>No data found.</p>;

  return (
    <div className="recipe-details">
      <h1>{data.strMeal}</h1>
      <img src={data.strMealThumb || 'default-image.jpg'} alt={data.strMeal} />
      <p><strong>Category:</strong> {data.strCategory}</p>
      <p><strong>Area:</strong> {data.strArea}</p>
      <p><strong>Instructions:</strong></p>
      <p>{data.strInstructions}</p>
    </div>
  );
}

export default RecipeDetailsPage;
