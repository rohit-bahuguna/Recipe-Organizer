import React, { useEffect, useState } from 'react'
import { useRecipe } from '../contexts/dataContext'
import RecipeCard from './RecipeCard'

const Recipe = () => {
    const { recipes, addNewRecipe, searchRecipe } = useRecipe()
    const [data, setData] = useState({
        ingredient: "",
        instruction: ""
    })
    const [filter, setFilter] = useState({
        search: "",
        searchBy: ""
    })
    const [showModal, setShowModal] = useState(false)
    const [recipeData, setRecipeData] = useState({
        recipeName: "",
        image: "",
        cusine: "",
        ingredients: [],
        instructions: [],
        id: recipes[recipes.length - 1].id + 14
    })

    const getData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const getRecipeData = (e) => {
        setRecipeData({ ...recipeData, [e.target.name]: e.target.value })
    }

    const addRecipe = () => {
        if (recipeData.recipeName || recipeData.cusine) {
            addNewRecipe(recipeData)
        }
    }
    useEffect(() => {
        if (filter.search && filter.searchBy) {
            searchRecipe(filter.search, filter.searchBy)
        }
    }, [filter.search, filter.searchBy])

    return (
        <div className='flex justify-start px-10 items-center py-5 relative'>
            <div>
                <div className='flex  w-[95vw] border px-5'>
                    <input type="text" placeholder='Search the iteam you want' value={filter.search} onChange={(e) => setFilter({ ...filter, search: e.target.value })} className='w-[50vw] text-lg px-2 py-3 mr-3 hover:outline-none' />
                    <div className='flex items-center gap-5'>
                        <label className='text-lg font-semibold mr-1'>Filter By</label>

                        <label className='flex items-center gap-2' NameFor="Name">
                            <input onClick={() => setFilter({ ...filter, searchBy: "fullName" })} className='w-4 h-4' type="radio" id="Name" name="filter" value="fullName" />
                            <span>Name</span>
                        </label>

                        <label className='flex items-center gap-2' htmlFor="Ingredients">
                            <input onClick={() => setFilter({ ...filter, searchBy: "ingredients" })} className='w-4 h-4' type="radio" id="Ingredients" name="filter" value="ingredients" />
                            <span>Ingredients</span></label>
                        <label className='flex items-center gap-2' htmlFor="Cuisine">
                            <input onClick={() => setFilter({ ...filter, searchBy: "cusine" })} className='w-4 h-4' type="radio" id="Cuisine" name="filter" value="cusine" />

                            <span>Cuisine</span></label>
                    </div>
                </div>
                <div className='flex gap-10 mt-10 py-5'>

                    {
                        recipes && recipes.map(recipe => <RecipeCard recipe={recipe} />)
                    }
                    <div className='flex justify-center items-center'>
                        <span className='text-5xl rounded-full border-2 px-4 py-1.5' onClick={() => setShowModal(true)}>+</span>
                    </div>
                </div>
            </div>

            {showModal && <div className='absolute flex gap-10 bg-white border border-black shadow-lg p-3 max-w-[90vw] '>
                <div className='  gap-5  px-10  flex flex-col items-center  text-center '>
                    <h1 className='text-xl py-3'>Add New Recipe </h1>
                    <div className='flex flex-col gap-5'>
                        <label className='flex  gap-3' >
                            <span className='text-lg font-semibold w-[8vw]'>Recipe Name</span>     <input onChange={getRecipeData} name="recipeName" className='border-2 w-[35vw] px-2 py-1' type="text" value={recipeData.recipeName} />
                        </label>
                        <label className='flex  gap-3' >
                            <span className='text-lg font-semibold w-[8vw]'>Cusine Type</span>     <input onChange={getRecipeData} name="cusine" className='border-2 w-[35vw] px-2 py-1' type="text" value={recipeData.cusine} />
                        </label>
                        <label className='flex  gap-3' >
                            <span className='text-lg font-semibold w-[8vw]'>Ingredients</span>     <input onChange={getData} name="ingredient" className='border-2 w-[35vw] px-2 py-1' type="text" value={data.ingredient} />
                            <button className='text-xl border hover:bg-gray-300 px-3 rounded-full' disabled={data.ingredient.length < 0}
                                onClick={() => {
                                    if (data.ingredient) {
                                        setRecipeData({ ...recipeData, ingredients: [...recipeData.ingredients, data.ingredient] })
                                        setData({ ...data, ingredient: "" })
                                    }
                                }}
                            >+</button>
                        </label>
                        <label className='flex  gap-3' >
                            <span className='text-lg font-semibold w-[8vw]'>Instructions</span>     <input onChange={getData} name="instruction" className='border-2 w-[35vw] px-2 py-1' type="text" value={data.instruction} />
                            <button className='text-xl border rounded-full hover:bg-gray-300 px-3 ' disabled={data.instruction.length < 0} onClick={() => {
                                if (data.instruction) {
                                    setRecipeData({ ...recipeData, instructions: [...recipeData.instructions, data.instruction] })
                                    setData({ ...data, instruction: "" })

                                }
                            }}>+</button>
                        </label>
                        <label className='flex  gap-3' >
                            <span className='text-lg font-semibold w-[8vw]'>Recipe Image</span>     <input onChange={getRecipeData} name="image" className='border-2 w-[35vw] px-2 py-1' type="file" />
                        </label>

                    </div>
                    <div className='flex gap-16'>
                        <button className='text-xl px-3 py-2 text-indigo-700 hover:bg-indigo-100 border' onClick={addRecipe}>Add Recipe</button>
                        <button className='text-xl px-3 py-2 text-red-500 hover:bg-red-100 border' onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </div>

                <div className=' overflow-auto w-[50vw]'>
                    <p><span>Recipe Name </span> : {recipeData?.recipeName}</p>
                    <p><span>Cusine </span> : {recipeData?.cusine}</p>
                    <p>Ingredients : {recipeData?.ingredients.join()}</p>
                    <div>
                        <span>Instructions : </span>
                        {
                            recipeData?.instructions.map((instruction, index) => <p>

                                <span>{index} .</span> <span>{instruction}</span>
                            </p>)
                        }
                    </div>
                </div>
            </div>}

        </div>
    )
}

export default Recipe