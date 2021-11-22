import React from 'react';

const Recipes = props => (
    <div className="container">
        <div className="row">
            {props.recipes.map((recipe) =>{
                return (
                    <div className="col-md-4">
                        <div className="recipes__box">
                            <div key={recipe.id}>
                                <img className="recipes__box-img" src={recipe.image} alt={`${recipe.title}`}/>
                                <div className="recipes__text">
                                    <h5 className="recipes__title">{ recipe.title.length < 20 ? `${recipe.title}`: 
                                        `${recipe.title.substring(0, 25)}...`  }</h5>
                                    <p className="recipes__subtitle">Source : <span> { recipe.sourceName } </span></p>
                                </div>
                                <button className="recipe_buttons">View Recipe</button>
                            </div>
                        </div>
                    </div>
                )
            })} 
        </div>
    </div>
    
);

export default Recipes;