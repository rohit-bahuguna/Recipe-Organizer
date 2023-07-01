import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecipeProvider } from './contexts/dataContext';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <RecipeProvider>
    <App />
    </RecipeProvider>

  </BrowserRouter>


);
