import React from "react";
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import {Day} from "./Day";
import {DAYS} from "../const";

const Menu = () => (
    <Container sx={{marginBottom: '60px'}}>
      <Typography variant="h4" component="div" fontWeight={600} sx={{marginTop: '20px'}}>
        Меню
      </Typography>
      {DAYS.map(({dayName, recipes}) => (
          <Day dayName={dayName} recipes={recipes} key={dayName}/>
      ))}
    </Container>
);

export default Menu;