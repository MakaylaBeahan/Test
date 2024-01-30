import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './RecipeDetails.scss'


function RecipeDetails() {
    const [recipe, setRecipe] = useState(null);
    const { recipe_id } = useParams();
    useEffect(() => {
        fetchData();
    }, [])
    async function fetchData() {
        try {
            const response = await axios.get(`http://localhost:5000/recipe/${recipe_id}`)
                .then((response) => {
                    setRecipe(response.data);
                    return response.data;
                })
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            {recipe && (
                <div className="recipe-details">
                    <h1>{recipe.name}</h1>
                    <img src={recipe.image} alt={recipe.name} />
                    <p>{recipe.blogslogan}</p>
                </div>
            )}
        </div>
    )
}

export default RecipeDetails