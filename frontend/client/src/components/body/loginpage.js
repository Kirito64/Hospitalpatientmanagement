import React, { useState } from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import {TextField, Container, Box} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import s from './Login.module.css';

 const Login = ()=>{
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const handleSubmit = (evt) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'username': username,
                'password': password
            })
        };
        fetch('http://localhost:4000/login', requestOptions)
            .then(response => response.json());
    }
    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    return(
        <Box className={s.main} >
            <form className={s.container} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField className = {s.items} id="standard-basic" label="Username" value={username} onChange={handleChangeUsername} />
                <TextField className = {s.items} id="standard-basic" type="password" label="Password" value={password} onChange={handleChangePassword} />
                <Button className = {s.items} variant="contained" type="submit" >Submit</Button>
            </form>
        </Box>
    )
}

export default withStyles(s)(Login);