import React from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import styled from "styled-components";
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PostAddIcon from '@mui/icons-material/PostAdd';

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 20px
`;

const PhotoBlock = styled.div`
  position: relative;

  ::after {
    content: '';
    border-radius: 10px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, rgb(0 0 0 / 50%), rgba(0, 0, 0, 0));
  }
`;

const Photo = styled.div`
  width: 100%;
  min-width: 100px;
  height: 28vw;
  max-height: 220px;
  background: url(${({img}) => img});
  background-size: cover;
  border-radius: 10px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 3px;
`;

const Name = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1rem;
  margin-top: 5px;
`;

const Timer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  position: absolute;
  color: #fff;
  font-weight: 500;
  bottom: 5px;
  left: 5px;
  z-index: 1;
`;

export const RecipeCard = ({name, img, time}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClickDetails = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseDetails = () => {
    setAnchorEl(null);
  };
  const handleClickAdd = () => {
    handleCloseDetails();
  };
  const handleClickDelete = () => {
    handleCloseDetails();
  };

  return (
      <Wrapper>
        <PhotoBlock>
          <Photo img={img}/>
          <Timer>
            <AccessTimeIcon sx={{marginRight: '3px', fontSize: '1rem', color: '#fff'}}/>
            {time}
          </Timer>
        </PhotoBlock>
        <Info>
          <Name variant="subtitle2">
            {name}
          </Name>
          <IconButton
              onClick={handleClickDetails}
              size='small'
              aria-label="Детали"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
          >
            <MoreHorizIcon color='primary' fontSize="small"/>
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
            <MenuItem onClick={handleClickAdd}>
              <PostAddIcon color='primary' sx={{marginRight: '10px'}}/>Добавить в меню</MenuItem>
            <MenuItem onClick={handleClickDelete}>
              <DeleteOutlineIcon color='error' sx={{marginRight: '10px'}}/>Удалить рецепт</MenuItem>
          </Menu>
        </Info>
      </Wrapper>
  )
}
