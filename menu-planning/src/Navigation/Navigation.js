import React from "react";
import Container from "@mui/material/Container";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from "@mui/material/Paper";
import {styled} from '@mui/material/styles';
import {useLocation, useNavigate} from "react-router-dom";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

const Wrapper = styled(Paper)(({theme}) => ({
  position: 'fixed',
  bottom: '20px',
  left: 'calc(50% - 250px)',
  right: 0,
  width: '500px',
  borderRadius: '30px',
  [theme.breakpoints.down('md')]: {
    left: 0,
    bottom: 0,
    width: '100%',
    borderRadius: 0
  },
}));

export const Navigation = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  return (
      <Container>
        <Wrapper elevation={12}>
          <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
                navigate(newValue);
              }}
              sx={{borderRadius: '30px', zIndex: 10}}
          >
            <BottomNavigationAction label="Меню" icon={<RestaurantMenuIcon/>} value="/menu"/>
            <BottomNavigationAction label="Список" icon={<FormatListBulletedIcon/>} value="/list"/>
            <BottomNavigationAction label="Рецепты" icon={<ReceiptLongIcon/>} value="/recipes"/>
          </BottomNavigation>
        </Wrapper>
      </Container>
  );
}
