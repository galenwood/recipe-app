import { useQuery } from '@tanstack/react-query';
import { getAllMeals } from '../services/api';
import { Link } from 'react-router-dom';
import '../styles/AllRecipesPage.scss';

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
}

function AllRecipesPage() {
  const { data: meals, isLoading, error } = useQuery<Meal[], Error>({
    queryKey: ['meals'],
    queryFn: getAllMeals,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error loading data: {error.message}</p>;

  return (
    <div className="all-recipes-page">
      <h1>All Recipes</h1>
      {meals && meals.length > 0 ? (
        <div className="recipes-list">
          {meals.map((meal) => (
            <div key={meal.idMeal} className="recipe-card">
              <img
                src={meal.strMealThumb || 'default-image.jpg'}
                alt={meal.strMeal}
                className="recipe-thumbnail"
              />
              <h2>{meal.strMeal}</h2>
              <p><strong>Category:</strong> {meal.strCategory}</p>
              <p><strong>Area:</strong> {meal.strArea}</p>
              <Link to={`/recipe/${meal.idMeal}`}>
                <button>View Recipe</button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
}

export default AllRecipesPage;
