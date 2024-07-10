import { useState, useEffect } from "react"
const RandomUser = ()=>{
    const [foodRec, setFoodRec]= useState()
    const data = [{
        recName:"pakoda",
        cat:"Desi",
        tag:['tasty', 'Rain']
    }]
    // setFoodRec(data)
   
    return(
        <div className="container-fd">
        <div className="recipe-card">
            <img src="recipe-image.jpg" alt="Recipe Image" className="recipe-image"/>
            <div className="recipe-content">
                <div className="recipe-left">
                    <h2 className="recipe-name">Delicious Pasta</h2>
                    <p className="recipe-category">Category: Italian</p>
                    <p className="recipe-tags">Tags: Vegetarian, Dinner</p>
                    <h3>Ingredients:</h3>
                    <ul className="recipe-ingredients">
                        <li>200g pasta</li>
                        <li>2 tomatoes</li>
                        <li>1 onion</li>
                        <li>2 cloves of garlic</li>
                        <li>Olive oil</li>
                        <li>Salt and pepper</li>
                    </ul>
                    <button className="get-meal-button">Get Meal</button>
                </div>
                <div className="recipe-right">
                    <p className="recipe-description">
                        This delicious pasta is made with fresh tomatoes, onions, and garlic, 
                        tossed in a savory olive oil sauce. Perfect for a quick and satisfying dinner.
                    </p>
                </div>
            </div>
        </div>
    </div>  
    )
}

export default RandomUser