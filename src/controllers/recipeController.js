import {createRecipe, listRecipes, getRecipe, updateRecipe, deleteRecipe} from "../services/recipeService.js";

export async function create(req, res) {
    try {
        const recipe = await createRecipe(req.body);
        res.status(201).json(recipe);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export async function get(req, res) {
    const recipes = await listRecipes(req.params.id);
    res.status(200).json(recipes);
}

export async function update(req, res){
    const updated = await updateRecipe(req.params.id, req.body);
    res.status(200).json(updated);
}

export async function remove(req, res){
    await deleteRecipe(req.params.id);
    res.status(200).json({message: "Recipe deleted"});
}