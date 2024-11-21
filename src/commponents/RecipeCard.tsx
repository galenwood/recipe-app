import React from 'react';

interface RecipeCardProps {
    name: string;
    category: string;
    area: string;
    thumbnail: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ name, category, area, thumbnail }) => {
    return (
        <div className="recipe-card">
            <img src={thumbnail} alt={name} />
            <h3>{name}</h3>
            <p>{category} - {area}</p>
        </div>
    );
};

export default RecipeCard;