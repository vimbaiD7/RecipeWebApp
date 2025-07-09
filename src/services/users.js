import { supabase } from '../supabaseClient';


export const createUser = async (userData) => {
    const { data, error } = await supabase
        .from('users')
        .upsert({userData});
    if (error) throw error;
        return data;
    }
   


export const getUser = async (userId) => {
    const { data, error } = await supabase
        .from('users')
        .select();
     if (error) throw error;
        return data;   
    } 
  


export const updateUser = async (userId, user) => {
    const { data, error } = await supabase
        .from('users')
        .update(user)
        .eq('id', userId);
     if (error) throw error;
        return data;
    }
  


export const deleteUser = async (userId) => {
    const { data, error } = await supabase
        .from('users')
        .delete()
        .eq('id', userId);
     if (error) throw error;
        return data;
    }


    
    