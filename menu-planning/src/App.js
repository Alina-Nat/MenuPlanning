import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Authorization} from './Authorization';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Menu from "./Menu/Menu";
import {GroceryList} from "./GroceryList/GroceryList";
import {RecipesList} from "./Recipes/RecipesList";
import {Navigation} from "./Navigation/Navigation";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {RecipeAddForm} from "./Recipes/RecipeAddForm";
// const Home = lazy(() => import("./Home"));

const theme = createTheme({
  palette: {
    primary: {
      main: '#86bb18',
    },
    secondary: {
      main: '#f0f0f0',
      light: '',
      dark: '',
      contrastText: '#000'
    },
    darkSecondary: {
      main: 'rgb(167,167,167)',
      light: 'rgb(167 167 167 / 62%)',
      dark: 'rgb(131, 131, 131)',
      contrastText: '#fff'
    }
  },
});

const App = () => (
    <ThemeProvider theme={theme}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/auth" element={<Authorization/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/list" element={<GroceryList/>}/>
            <Route path="/recipes" element={<RecipesList/>}/>
            <Route path="/recipes/add" element={<RecipeAddForm/>}/>
            <Route path="/" element={<Menu/>}/>
          </Routes>
        </Suspense>
        <Navigation/>
      </Router>
    </ThemeProvider>
);

export default App;