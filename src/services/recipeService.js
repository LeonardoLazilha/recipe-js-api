import Recipe from "../models/Recipe.js";

export function createRecipe(data){
    return Recipe.create(data);
}

export function listRecipes(){
    return Recipe.find();
}

export function getRecipe(id){
    return Recipe.findById(id);
}

export function updateRecipe(id, data){
  return Recipe.findByIdAndUpdate(id, data, { new: true });
}

export function deleteRecipe(id){
    return Recipe.findByIdAndDelete(id);
}