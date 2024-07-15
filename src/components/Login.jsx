import React, { useState } from 'react';
import LoginForm from './LoginForm';
import userService from '../services/UserService'

const LoginView = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleLogin = async(event) => {
        event.preventDefault();

        try {
            console.log(user);
            const user = await userService.loginUser({
                username,
                password
            });
            window.localStorage.setItem(
                "loggedAppUser", JSON.stringify(user)
            )
            setUser(user);
            setUsername('');
            setPassword('');
        } catch (error) {
            setErrorMessage("Wrong credentials");
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000);
        }
    }

    if(errorMessage) {
        return <p>{errorMessage}</p>
    }

    if(user) {
        return <p>User is logged</p>
    }

    return(
        <div className="rg-login">
            <h1>Registro de Gastos</h1>
            <img
                className='rg-login-logo'
                alt="Logo de la aplicacion"
                src="https://www.ruta67.com/wp-content/uploads/2020/01/Registro-de-gastos.jpg"></img>
            <div>
                <LoginForm
                    username={username}
                    password={password}
                    handleUsernameChange={(target) => setUsername(target.value)}
                    handlePasswordChange={(target) => setPassword(target.value)}
                    handleSubmit={handleLogin}/>
            </div>
        </div>
    );
};
export default LoginView;