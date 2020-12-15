import React , {useState}from 'react'
import axios from 'axios'
import './loginform.css'

const LoginForm = ()=>{
    const [username, setUser] = useState('');
    const [password, setPassword] = useState('')
    
    const handleSubmit = async()=>{
        const requestOptions = {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'username': username,
                'password': password
            })
        };
        const response = await axios.post('http://localhost:4000/login', requestOptions)
        console.log(response.json())
    }
    const handleUsername = (e)=>{
        setUser(e.target.value)
    }

    const handlePassword = (e)=>{
        setPassword(e.target.password)
    }

    return(
        <div className = 'container'>
            <form formNoValidate autoComplete='off' onSubmit = {handleSubmit} className = 'formContainer'>
                <input className = "items" type='text' label = "Username" value={username} onChange={handleUsername} placeholder='Username'></input>
                <input type='password' label = "Password" value={password} onChange={handlePassword} placeholder='Password'></input>
                <button type = "submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm