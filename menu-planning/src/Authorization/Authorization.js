import React from "react";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Authorization = () => {
    return (
        <Container maxWidth="sm">
            <Paper elevation={3}>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <h1>Авторизация</h1>
                    <TextField id="email" label="E-mail" variant="outlined" />
                    <TextField id="password" label="Пароль" type="password" variant="outlined" />
                    <Button variant="contained">Войти</Button>
                </Box>
            </Paper>
        </Container>
    )
};
