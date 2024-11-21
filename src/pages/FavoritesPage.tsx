import React, { useState, useEffect } from 'react';
import '../styles/FavoritesPage.scss';

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
}

function FavoritesPage() {
  const [favorites, setFavorites] = useState<Meal[]>([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(savedFavorites);
  }, []);

  const handleRemoveFavorite = (id: string) => {
    const updatedFavorites = favorites.filter(fav => fav.idMeal !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((recipe) => (
            <div key={recipe.idMeal} className="recipe-card">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <h3>{recipe.strMeal}</h3>
              <p>{recipe.strCategory}</p>
              <p>{recipe.strArea}</p>
              <button onClick={() => handleRemoveFavorite(recipe.idMeal)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
