<<<<<<< Updated upstream
import { supabase } from '../supabaseClient';


export const createUser = async (userData) => {
=======
const { supabase } = require('../supabaseClient');


const createUser = async (userData) => {
>>>>>>> Stashed changes
    const { data, error } = await supabase
        .from('users')
        .upsert({userData});
    if (error) throw error;
        return data;
    }
   


<<<<<<< Updated upstream
export const getUser = async (userId) => {
=======
const getUser = async (userId) => {
>>>>>>> Stashed changes
    const { data, error } = await supabase
        .from('users')
        .select();
     if (error) throw error;
        return data;   
    } 
  


<<<<<<< Updated upstream
export const updateUser = async (userId, user) => {
=======
const updateUser = async (userId, user) => {
>>>>>>> Stashed changes
    const { data, error } = await supabase
        .from('users')
        .update(user)
        .eq('id', userId);
     if (error) throw error;
        return data;
    }
  


<<<<<<< Updated upstream
export const deleteUser = async (userId) => {
=======
 const deleteUser = async (userId) => {
>>>>>>> Stashed changes
    const { data, error } = await supabase
        .from('users')
        .delete()
        .eq('id', userId);
     if (error) throw error;
        return data;
    }

<<<<<<< Updated upstream
=======
    module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
>>>>>>> Stashed changes

    
    