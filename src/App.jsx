import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from "./components/Login.jsx";
import Home from './components/Home.jsx';
import { UserProvider } from './context/user.jsx';

const App = () => {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/home' element={<Home/>}/>
                </Routes>
                
            </BrowserRouter>
        </UserProvider>
    )
};

export default App;