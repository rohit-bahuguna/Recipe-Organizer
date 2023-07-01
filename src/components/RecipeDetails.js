import React from 'react'
import { useParams } from 'react-router-dom'
import { useRecipe } from '../contexts/dataContext'

const RecipeDetails = () => {
    const { recipeId } = useParams()
    const { recipes,
    } = useRecipe()
    const recipe = recipes.reduce((foundRecipe, currentRecipe) => currentRecipe.id === recipeId ? { ...foundRecipe, ...currentRecipe } : foundRecipe, {})
    console.log(recipe)
    return (
        <div className='flex justify-center items-center py-5  mx-5'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-3xl    font-semibold text-center'>{recipe?.recipeName}</h1>
                <div className='flex border shadow-xl   gap-16  w-[95vw] py-5 px-5 rounded-lg'>
                    <img src={recipe?.image} alt="" className=' rounded-xl float-left w-[50vw] h-[70vh] object-cover ' />
                    <div>
                        <div>Cusine : <span>{recipe?.cusine}</span></div>
                        <div>Ingredients  : <span>{recipe?.ingredients.join()}</span></div>
                        <div>Instructions :

                            <div className='flex flex-col gap-3'>
                                {recipe?.instructions.map((instruction, index) => <p key={index + 1}> <span className='font-semibold text-lg'>{index + 1}. </span> <span className=''>{instruction} </span></p>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetails