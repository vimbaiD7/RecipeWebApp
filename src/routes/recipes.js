const express = require('express')
const router = express.Router()

const {authenticateToken} = require('../utilities/authToken')
const { createRecipe, getRecipe,  getAllRecipesForUser, updateRecipe, deleteRecipe } = require('../services/recipes')

router.post('/recipe/add', authenticateToken, async (req, res) => {
  try {
    const recipe = await createRecipe(req.body)
    res.status(200).json({ message: 'Recipe Posted', recipe })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

router.get('/recipe/:id', authenticateToken, async (req, res) => {
  try{
    const recipeId = req.params.id
    const recipe = await getRecipe(recipeId)
    if (!recipe || recipe.length === 0) { 
    res.status(404).json({message:'Recipe not found'})
  }
  res.status(200).json(recipe)
  }
  catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}) 


router.get('/recipes', authenticateToken, async (req, res) => {
  try{
     const userId = req.body.user.user_id
     console.log(userId)
     const recipes = await getAllRecipesForUser(userId)
  res.status(200).json(recipes)
}catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message })
}

});

router.put('/recipe/:id', authenticateToken, async (req, res) => {
  try {
    const recipeId = req.params.id;
    const updatedRecipe = await updateRecipe(recipeId, req.body);
    if (!updatedRecipe || updatedRecipe.length === 0) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json({ message: 'Recipe updated', updatedRecipe });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.delete('/recipe/:id',authenticateToken, async (req, res) =>{
  try {
    const recipeId = req.params.id;
    const deleted = await deleteRecipe(recipeId);
    if (!deleted) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json({ message: 'Recipe deleted' });
  } catch (error){
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

module.exports = router