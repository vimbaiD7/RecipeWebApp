const { supabase } = require('../supabaseClient');


const createUser = async (userData) => {
    const { data, error } = await supabase
        .from('users')
        .upsert({userData});
    if (error) throw error;
        return data;
    };
   


const getUser = async (userId) => {
    const { data, error } = await supabase
        .from('users')
        .select();
     if (error) throw error;
        return data;   
    }; 
  


const updateUser = async (userId, user) => {
    const { data, error } = await supabase
        .from('users')
        .update(user)
        .eq('id', userId);
     if (error) throw error;
        return data;
    };
  


 const deleteUser = async (userId) => {
    const { data, error } = await supabase
        .from('users')
        .delete()
        .eq('id', userId);
     if (error) throw error;
        return data;
    };

    module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};

    
    