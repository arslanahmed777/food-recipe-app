import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Recipe = () => {
    const {recipes} = useContext(GlobalContext);
    console.log( recipes);
    
    return (
        <div className="container mt-3">
            <div className="row">
                {recipes.map((recipe)=>(
                    <div className="col-md-4 text-center my-3 ">
                        <div className="card" >
                            <div className="card-header">
                                <img className="img-thumbnail rounded-circle " src={recipe.recipe.image} alt=''></img>
                            </div>
                            <h3 className="text-success py-2">{recipe.recipe.label}</h3>
                                <ul className="list-group list-group-flush">
                                    
                                </ul>
                                <div className="card" >
                                    <ul className="list-group list-group-flush">
                                        {recipe.recipe.ingredients.map(ingredients => (
                                            <li className="list-group-item">{ingredients.text}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                    </div>
                ))}
                
            </div>
        </div>
        
    )
}
