import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {RECIPES} from "../const";
import {RecipeCard} from "./RecipeCard";

export const Day = ({dayName, recipes = []}) => {
  return (
      <Box component="div" sx={{marginTop: '30px'}}>
        <Typography variant="h6" component="div" sx={{marginBottom: '15px'}}>
          {dayName}
        </Typography>
        {recipes.map((recipeId) => <RecipeCard {...RECIPES[recipeId]} />)}
      </Box>
  )
}
