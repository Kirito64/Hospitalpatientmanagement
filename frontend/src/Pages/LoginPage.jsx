import React from 'react'
import Navbar from '../components/header/Navbar'
import LoginForm from '../components/body/loginpage/loginform'


import './LoginPage.css'


const LoginPage = ()=>{
    return(
        <div className='box'>
            <Navbar ></Navbar>
            <div className = 'main'>
                <LoginForm ></LoginForm>
            </div>
        </div>
        
    )
}
export default LoginPage;