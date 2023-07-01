import { createContext, useContext, useState } from 'react';
import { recipeData } from '../utils/appData';

const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {


    const [recipes, setRecipes] = useState(JSON.parse(localStorage.getItem('recipes')) || recipeData);


    const addNewRecipe = (recipe) => {
        setRecipes([...recipes, recipe])
        localStorage.setItem('recipes', JSON.stringify([...recipes, recipe]))

    }

    const searchRecipe = (search, searchBy) => {
        setRecipes(recipes.filter(recipe => recipe[searchBy].includes(search)))
    }
    // 	setData({ ...data, posts: sortedPost });
    // };


    return (
        <RecipeContext.Provider
            value={{
                recipes,
                setRecipes,
                addNewRecipe,
                searchRecipe
            }}>
            {children}
        </RecipeContext.Provider>
    );
};

const useRecipe = () => useContext(RecipeContext);

export { useRecipe, RecipeProvider };
