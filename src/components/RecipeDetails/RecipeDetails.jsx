import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./RecipeDetails.scss";
import { Breadcrumb } from "antd";

function RecipeDetails() {
  const [recipe, setRecipe] = useState(null);
  const { recipe_id } = useParams();
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const response = await axios
        .get(`http://localhost:5000/recipe/${recipe_id}`)
        .then((response) => {
          setRecipe(response.data);
          return response.data;
        });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="recipe-details">
      <Breadcrumb
        separator=">"
        items={[
          {
            title: "Home",
            href: "/",
            className: "bold",
          },
          {
            title: "Recipes",
            href: "/recipe",
            className: "bold ",
          },
          {
            title: recipe && recipe.name,
            href: `/recipe/${recipe_id}`,
            className: "bold text-primary",
          },
        ]}
      />
      {recipe && (
        <div className="recipe-details-container">
          <div className="recipe-details-heading">
            <h1>{recipe.name}</h1>
          </div>
          <div className="recipe-details-user">
            <span className="recipe-details-user-card">
              <img src={recipe.userimage} alt="userimage" />
              <h4>{recipe.username}</h4>
            </span>
            <span className="recipe-details-user-card">31 Jan 2024</span>
            <span className="recipe-details-user-card">22 Comments</span>
            <span className="recipe-details-user-card">9 Saves</span>
            <span className="recipe-details-user-card">
              <div className="card-rating">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                >
                  <g clipPath="url(#clip0_613_9969)">
                    <path
                      d="M11.2924 12.6288L6.9611 9.65618L2.62981 12.6288L4.29284 7.82805L-0.0361328 4.87435H5.30852L6.9611 0.0654297L8.61368 4.87435H13.9578L9.62936 7.82805L11.2924 12.6288Z"
                      fill="#B55D51"
                      fillOpacity="0.972549"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_613_9969">
                      <rect width="13.9214" height="13" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                >
                  <g clipPath="url(#clip0_613_9969)">
                    <path
                      d="M11.2924 12.6288L6.9611 9.65618L2.62981 12.6288L4.29284 7.82805L-0.0361328 4.87435H5.30852L6.9611 0.0654297L8.61368 4.87435H13.9578L9.62936 7.82805L11.2924 12.6288Z"
                      fill="#B55D51"
                      fillOpacity="0.972549"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_613_9969">
                      <rect width="13.9214" height="13" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                >
                  <g clipPath="url(#clip0_613_9969)">
                    <path
                      d="M11.2924 12.6288L6.9611 9.65618L2.62981 12.6288L4.29284 7.82805L-0.0361328 4.87435H5.30852L6.9611 0.0654297L8.61368 4.87435H13.9578L9.62936 7.82805L11.2924 12.6288Z"
                      fill="#B55D51"
                      fillOpacity="0.972549"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_613_9969">
                      <rect width="13.9214" height="13" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                >
                  <g clipPath="url(#clip0_613_9969)">
                    <path
                      d="M11.2924 12.6288L6.9611 9.65618L2.62981 12.6288L4.29284 7.82805L-0.0361328 4.87435H5.30852L6.9611 0.0654297L8.61368 4.87435H13.9578L9.62936 7.82805L11.2924 12.6288Z"
                      fill="#B55D51"
                      fillOpacity="0.972549"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_613_9969">
                      <rect width="13.9214" height="13" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="13"
                  viewBox="0 0 15 13"
                  fill="none"
                >
                  <g clipPath="url(#clip0_613_11515)">
                    <path
                      d="M11.9779 12.6288L7.64665 9.65618L3.31536 12.6288L4.97838 7.82805L0.649414 4.87435H5.99406L7.64665 0.0654297L9.29923 4.87435H14.6433L10.3149 7.82805L11.9779 12.6288Z"
                      fill="#A5A5A5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_613_11515">
                      <rect
                        width="13.9214"
                        height="13"
                        fill="white"
                        transform="translate(0.685547)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>{" "}
              4.0 / 10 Reviews
            </span>
          </div>
          <hr />
          <div className="recipe-details-image">
            <img src={recipe.image} alt={recipe.name} />
            <p>{recipe.blogslogan}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeDetails;
