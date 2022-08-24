import React, {useEffect} from "react";
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import {INGR, GROCERY} from "../const";
import Typography from "@mui/material/Typography";
import {Divider, ListItemButton} from "@mui/material";
import Box from "@mui/material/Box";
import DoneIcon from '@mui/icons-material/Done';

export const GroceryList = () => {
  const [data, setData] = React.useState(GROCERY);
  const [checked, setChecked] = React.useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  useEffect(() => {
    const uncheckedItems = [];
    const checkedItems = [];
    data.forEach(item => {
      if (checked.includes(item.id)) {
        checkedItems.push(item);
      } else {
        uncheckedItems.push(item);
      }
    })
    setData([...uncheckedItems, ...checkedItems]);
  }, [checked]);

  return (
      <Container maxWidth="sm">
        <Typography variant="h4" component="div" fontWeight={600} sx={{margin: '20px 0 10px 10px'}}>
          Список продуктов
        </Typography>
        {data.length ?
            <List dense>
              {data.map(({id, img, count}) => {
                    const labelId = `checkbox-list-secondary-label-${id}`;
                    const isChecked = checked.includes(id);
                    return (
                        <>
                          <ListItem
                              key={id}
                              secondaryAction={
                                <Checkbox
                                    edge="end"
                                    onChange={handleToggle(id)}
                                    checked={checked.indexOf(id) !== -1}
                                    inputProps={{'aria-labelledby': labelId}}
                                    color='primary'
                                />
                              }
                              disablePadding
                              sx={isChecked ? {
                                opacity: 0.5,
                                background: '#eee'
                              } : {}}
                          >
                            <ListItemButton
                                role={undefined}
                                onClick={handleToggle(id)}
                                dense
                                sx={{
                                  paddingTop: '5px',
                                  paddingBottom: '5px',
                                  paddingLeft: '5px'
                                }}>
                              <Box
                                  component="img"
                                  src={img}
                                  sx={{width: '20px', height: '20px', borderRadius: '5px', marginRight: '15px'}}
                              />
                              <ListItemText
                                  primary={
                                    <Box>
                                      {INGR[id]}
                                      <Box
                                          component="span"
                                          sx={{
                                            marginLeft: '10px',
                                            opacity: 0.4,
                                            fontSize: '0.75rem'
                                          }}
                                      >
                                        {count}г
                                      </Box>
                                    </Box>
                                  }
                                  id={labelId}
                              />
                            </ListItemButton>
                          </ListItem>
                          <Divider/>
                        </>
                    )
                  }
              )}
            </List>
            :
            <Box
                component="div"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '50vh',
                  color: '#a5a5a5',
                  fontSize: '1.2rem',
                  fontWeight: 500
                }}
            >
              <DoneIcon sx={{width: '70px', height: '70px'}}/>
              <br/>
              Ваш список продуктов пуст
            </Box>
        }
      </Container>
  )
};
