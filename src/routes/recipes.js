const express = require('express')
const router = express.Router()

const {authenticateToken} = require('../utilities/authToken')
const { createRecipe, getRecipe,  getAllRecipesForUser, updateRecipe, deleteRecipe } = require('../services/recipes')

router.post('/recipe/add', async (req, res) => {
  try {
    const recipe = await createRecipe(req.body)
    res.status(200).json({ message: 'Recipe Posted', recipe })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

router.get('/recipe/:id', async (req, res) => {
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

/*router.get('/recipes', async (req, res) => {
  try {
    const userId = req.query.user_id;
    if (!userId) {
      return res.status(400).json({ message: 'user_id is required' });
    }
    const recipes = await getAllRecipesForUser(userId);
    res.status(200).json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});*/

router.get('/recipes', authenticateToken, async (req, res) => {
  try
 { const userId = req.body['user'].user_id
  const recipes = await getAllRecipesForUser(userId)
  res.status(200).json(recipes)
}catch (error) {
  console.error(error);
    res.status(500).json({ error: error.message })
}

});



module.exports = router