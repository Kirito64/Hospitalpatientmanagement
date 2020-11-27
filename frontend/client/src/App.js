import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './components/Header/Navbar'
import Login from './components/body/loginpage'
function App() {
  return (
    <React.Fragment>
      <ButtonAppBar></ButtonAppBar>
      <Login />
    </React.Fragment>

  );
}

export default App;

