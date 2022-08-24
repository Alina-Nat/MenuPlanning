import React, {useState} from "react";
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {RECIPES, CATEGORIES} from "../const";
import Typography from "@mui/material/Typography";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import {RecipeCard} from "./RecipeCard";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";
import {HashLink as Link} from 'react-router-hash-link';
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Header = styled(Box)(({theme}) => ({
  background: '#fff',
  position: 'fixed',
  top: 0,
  left: 0,
  paddingTop: '20px',
  zIndex: 10,
  width: '100%',
  borderBottom: `1px solid ${theme.palette.secondary.main}`
}));

const StackOfChips = styled(Stack)(() => ({
  padding: '0 16px 5px 16px',
  maxWidth: 'calc(100% - 16px)',
  overflowX: 'auto',
  '&::-webkit-scrollbar': {
    width: 0,
    height: 0
  },
}));

const CategoriesListWrapper = styled(List)(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '110px'
}));

const CategoriesListItem = styled(ListItem)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}));

const RecipesListWrapper = styled(List)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  width: 'calc(100% + 16px)',
  margin: '0 -8px',
}));

const RecipesListItem = styled(ListItem)(() => ({
  alignItems: 'flex-start',
  width: '50%',
  maxWidth: '320px',
  padding: '0 8px',
}));

const getObj = () => {
  const res = {};
  Object.keys(RECIPES).forEach(key => {
    if (!res[RECIPES[key].category]) {
      res[RECIPES[key].category] = {};
    }
    res[RECIPES[key].category][key] = RECIPES[key];
  });
  return res;
}

export const RecipesList = () => {
  const data = getObj();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState();

  const handleClickCategory = (newSelectedCategoryId) => {
    setSelectedCategory(CATEGORIES[newSelectedCategoryId]);
  }

  const handleClickAdd = () => {
    navigate('/recipes/add');
  }

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -118;
    window.scrollTo({top: yCoordinate + yOffset});
  }

  return (
      <Container sx={{marginBottom: '56px'}}>
        <Header component="div">
          <Typography variant="h4" fontWeight={600} sx={{marginBottom: '10px', marginLeft: '16px'}}>
            Рецепты
            <IconButton onClick={handleClickAdd} aria-label="Добавить рецепт" sx={{marginLeft: '10px'}}>
              <AddCircleOutlineIcon color='primary'/>
            </IconButton>
          </Typography>
          <StackOfChips direction="row" spacing={1}>
            {Object.keys(CATEGORIES).map(categoryId => (
                <Link
                    to={`/recipes#${categoryId}`}
                    scroll={scrollWithOffset}
                    style={{textDecoration: 'none', color: 'inherit', outline: 'none'}}>
                  <Chip
                      key={CATEGORIES[categoryId]}
                      label={CATEGORIES[categoryId]}
                      size='small'
                      onClick={() => handleClickCategory(categoryId)}
                      color={selectedCategory === CATEGORIES[categoryId] ? 'darkSecondary' : 'secondary'}
                      sx={{fontWeight: 500, borderRadius: '8px'}}
                  />
                </Link>
            ))}
          </StackOfChips>
        </Header>
        <CategoriesListWrapper>
          {Object.keys(data).map((category) => {
                return (
                    <CategoriesListItem
                        key={category}
                        disablePadding
                        id={category}
                    >
                      <Typography variant="h6" component='div' fontWeight={600}>{CATEGORIES[category]}</Typography>
                      <RecipesListWrapper>
                        {Object.keys(data[category]).map(recipeId => (
                            <RecipesListItem key={recipeId}>
                              <RecipeCard {...RECIPES[recipeId]}/>
                            </RecipesListItem>
                        ))}
                      </RecipesListWrapper>
                    </CategoriesListItem>
                )
              }
          )}
        </CategoriesListWrapper>
      </Container>
  )
};
