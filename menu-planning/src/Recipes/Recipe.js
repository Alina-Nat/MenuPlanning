import React from "react";
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Day from "./Day";
import {DAYS, MEAL} from "../const";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export const Recipe = ({img, name, time, category}) => (
    <Paper>
            <Box component="div" sx={{width: '100px', height: '100px', background: `url(${img})`, backgroundSize: 'cover'}}/>
            <Box component="div">
                {time}
            </Box>
            <Box component="div">
                <Typography variant="h4" component="div">
                    {name}
                </Typography>
            </Box>
    </Paper>
);
