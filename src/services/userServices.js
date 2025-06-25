import { supabase } from '../supabaseClient';

//create
export const createUser = async (userData) => {
    const { data, error } = await supabase
        .from('users')
        .upsert({userData});
    if (error) throw error;
        return data;
    }
export const createRecipe = async (recipeData) => {
    const { data, error } = await supabase
        .from('recipes')
        .upsert({recipeData});
    if (error) throw error;
        return data;
    }    

//read 
export const getUser = async (userId) => {
    const { data, error } = await supabase
        .from('users')
        .select();
     if (error) throw error;
        return data;   
    } 
export const getRecipe = async (recipeId) => {
    const { data, error } = await supabase
        .from('recipes')
        .select()
        .eq('id', recipeId);
     if (error) throw error;
        return data;   
    }    

//update 
export const updateUser = async (userId, user) => {
    const { data, error } = await supabase
        .from('users')
        .update(user)
        .eq('id', userId);
     if (error) throw error;
        return data;
    }
export const updateRecipe = async (recipeId, recipe) => {
    const { data, error } = await supabase
        .from('recipes')
        .update(recipe)
        .eq('id', recipeId);
     if (error) throw error;
        return data;
    }  

//delete
export const deleteUser = async (userId) => {
    const { data, error } = await supabase
        .from('users')
        .delete()
        .eq('id', userId);
     if (error) throw error;
        return data;
    }
export const deleteRecipe = async (recipeId) => {
    const { data, error } = await supabase
        .from('recipes')
        .delete()
        .eq('id', recipeId);
     if (error) throw error;
        return data;
    }    

    
    