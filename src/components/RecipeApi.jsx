import Axios from "axios";
import React from 'react'

export const RecipeApi = (recipeName) => {
    return Axios.get(`https://api.edamam.com/search?q=${recipeName}&app_id=951ac3c2&app_key=f73cf220f39abddf20b60967dc81a591`)
}
