//import { supabase } from '../supabaseClient';
const { supabase } = require('../config/supabaseClient');



const createRecipe = async (recipeData) => {
    const { data, error } = await supabase
        .from('recipes')
        .upsert([recipeData])
        .select();
    if (error) throw error;
        return data;
    };    


 const getRecipe = async (recipeId) => {
    const { data, error } = await supabase
        .from('recipes')
        .select()
        .eq('id', recipeId);
     if (error) throw error;
        return data;   
    };    
 
const getAllRecipesForUser = async (userId) => {
  const { data, error } = await supabase
    .from('recipes')
    .select('*')
    .eq('user_id', userId);

  if (error) throw error;
  return data;
};




const updateRecipe = async (recipeId, recipe) => {
    const { data, error } = await supabase
        .from('recipes')
        .update(recipe)
        .eq('id', recipeId);
     if (error) throw error;
        return data;
    };  


const deleteRecipe = async (recipeId) => {
    const { data, error } = await supabase
        .from('recipes')
        .delete()
        .eq('id', recipeId);
     if (error) throw error;
        return data;
    };    
    module.exports= {
        createRecipe, getRecipe, updateRecipe, deleteRecipe, getAllRecipesForUser
    };