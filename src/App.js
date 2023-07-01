
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Recipe from './components/Recipe';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div className=' h-screen' >
      <Routes>
        <Route path='/' element={<Recipe />} />
        <Route path='/recipe/detail/:recipeId' element={<RecipeDetails />} />

      </Routes>

    </div>
  );
}

export default App;
