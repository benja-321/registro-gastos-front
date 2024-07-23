import React, { useContext, useState } from 'react';
import LoginForm from './LoginForm';
import userService from '../services/UserService';
import { useNavigate  } from 'react-router-dom';
import { UserContext } from '../context/user';

const Login = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const {setUser} = useContext(UserContext);

    const handleLogin = async(event) => {
        event.preventDefault();
        try {
            console.log(username);
            console.log(password);
            const user = await userService.loginUser({
                username,
                password
            });
            setUser({
                name: user.name,
                lastName: user.lastName,
                user: username
            });

            navigate('/home');
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

    return(
        <div className="rg-login">
            <h1>Registro de Gastos</h1>
            <img
                className='rg-login-logo'
                alt="Logo de la aplicacion"
                src="https://www.ruta67.com/wp-content/uploads/2020/01/Registro-de-gastos.jpg"></img>
            <LoginForm
                username={username}
                password={password}
                handleUsernameChange={(event) => setUsername(event.target.value)}
                handlePasswordChange={(event) => setPassword(event.target.value)}
                handleSubmit={handleLogin}/>
        </div>
    );
};
export default Login;