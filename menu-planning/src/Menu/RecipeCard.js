import React from "react";
import Typography from "@mui/material/Typography";
import {MEAL} from "../const";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import styled from "styled-components";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import LoopIcon from '@mui/icons-material/Loop';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
`;

const Photo = styled.div`
  width: 100px;
  min-width: 100px;
  height: 70px;
  background: url(${({img}) => img});
  background-size: cover;
  border-radius: 10px;
  margin-right: 10px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Name = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1rem;
`;

const Timer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.7rem;
  //margin-top: 5px;
`;

export const RecipeCard = ({name, img, category, time}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClickDetails = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseDetails = () => {
    setAnchorEl(null);
  };
  const handleClickReplace = () => {
    handleCloseDetails();
  }
  const handleClickReschedule = () => {
    handleCloseDetails();
  }
  const handleClickDelete = () => {
    handleCloseDetails();
  }

  return (
      <Wrapper key={name}>
        <Content component="div">
          <Photo img={img}/>
          <Info>
            <Box component="div">
              <Name variant="subtitle2">
                {name}
              </Name>
              <Typography variant="caption" component="div" color="#b1b1b1">
                {MEAL[category]}
              </Typography>
            </Box>
            <Timer>
              <AccessTimeIcon sx={{marginRight: '3px', fontSize: '1rem', color: '#b2b2b2'}}/>
              {time}
            </Timer>
          </Info>
        </Content>
        <IconButton
            onClick={handleClickDetails}
            aria-label="Детали"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
        >
          <MoreHorizIcon color='primary'/>
        </IconButton>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseDetails}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
        >
          <MenuItem onClick={handleClickReplace}>
            <LoopIcon color='primary' sx={{marginRight: '10px'}}/> Заменить</MenuItem>
          <MenuItem onClick={handleClickReschedule}>
            <EventRepeatIcon color='primary' sx={{marginRight: '10px'}}/> Перенести на другой день</MenuItem>
          <MenuItem onClick={handleClickDelete}>
            <DeleteOutlineIcon color='error' sx={{marginRight: '10px'}}/> Удалить из меню</MenuItem>
        </Menu>
      </Wrapper>
  )
}
