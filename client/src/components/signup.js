import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './signup.css'

const Register = () => {

    const navigate = useNavigate();

    const [ user, setUser] = useState({
        name: "", 
        username:"", 
        password:"", 
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const signup = () => {
        const { name, username, password } = user
        if( name && username && password){
            axios.post("http://localhost:3001/signup", user)
            .then( res => {
                alert(res.data.message)
                navigate("/login")
            })
            .catch(err => console.log("req error"));
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="kumar">
    <div className="lappy">
        <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh">
        <div className="signup">
            {console.log("User", user)}
            <p
            className="graph"
            >create your account and become a part  of us</p>
            <h1>Sign Up</h1>
            <TextField
                variant="outlined"
                type="text"
                label="Name"
                name="name"
                value={user.name}
                onChange={handleChange}
            /> <br/><br/>
            <TextField
                variant="outlined"
                type="text"
                label="Username"
                name="username"
                value={user.username}
                onChange={handleChange}
            /> <br/><br/>
            <TextField
                variant="outlined"
                type="password"
                label="Password"
                name="password"
                value={user.password}
                onChange={handleChange}
            /> <br/><br/>
        
            <Button variant="contained" className="submitbtn" onClick={signup} >
                submit
            </Button>
            &ensp;  
            <p>click here if already have an account</p>
            <Button variant="contained" className="loginbtn" onClick={() => navigate("/login")} >
                Login
            </Button>
        </div>
        </Box>
        </div>
        </div>
    )
}

export default Register