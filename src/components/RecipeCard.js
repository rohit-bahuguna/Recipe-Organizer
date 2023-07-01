import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
    const { recipeName, image, ingredients, instructions, cusine, id } = recipe
    return (
        <div className='flex flex-col gap-5 items-center border rounded-xl shadow py-2'>
            <div className='flex justify-between w-full px-3 '>
                <button className='text-lg border-2 px-5 py-1 rounded-full text-indigo-700 hover:bg-indigo-100'>Edit</button><button className='text-lg border px-5 py-1 rounded-full text-red-500 hover:bg-red-100'>Delete</button>
            </div>
            <img src={image} alt={recipeName} className='w-60 p-2 rounded-xl' />
            <h1 className='text-2xl font-semibold '>{recipeName}</h1>
            <div className='flex flex-col gap-3'>
                <p className='flex justify-between w-[15vw] '><span>Cusine Type</span> <span>{cusine}</span></p>
                <p className='flex justify-between w-[15vw] '><span>Ingredients</span> <Link to={`/recipe/detail/${id}`}><span>See Recipe  </span></Link> </p>
                <p className='flex justify-between w-[15vw] '><span>Instructions</span> <Link to={`/recipe/detail/${id}`}><span>See Recipe  </span></Link> </p>
            </div>
        </div>
    )
}

export default RecipeCard