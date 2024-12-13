import React, { useEffect, useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Import custom CSS for additional styling

function App() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  const getRecipes = async () => {
    try {
      const response = await Axios.get("https://dummyjson.com/recipes");
      setRecipes(response.data.recipes);
    } catch (err) {
      setError("Failed to fetch recipes.");
      console.error(err);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="container my-5">
      <div className="header text-center mb-5">
        <h2 className="title">Recipes (Axios Method)</h2>
        <p className="subtitle">
          Browse through a curated selection of recipes to inspire your next meal.
        </p>
      </div>

      {error && <p className="text-danger text-center">{error}</p>}

      <div className="row">
        {
          recipes.map((recipe) => (
            <div className="col-md-3 mb-5" key={recipe.id}>
              <div className="card recipe-card h-100 shadow-sm">
                <img
                  src={recipe.image || "https://via.placeholder.com/300x200"}
                  className="card-img-top"
                  alt={recipe.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>
                  <p className="card-text">
                    Ingredients: {recipe.ingredients?.join(", ") || "N/A"}
                  </p>
                  <p className="card-text">
                    <strong>Rating:</strong> ⭐ {recipe.rating || "No rating"}
                  </p>
                  <p className="card-text">
                    <strong>Tags:</strong> {recipe.tags?.join(", ") || "No tags"}
                  </p>
                </div>
                <div className="card-footer text-center">
                  <button className="btn btn-primary btn-sm">View Recipe</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
