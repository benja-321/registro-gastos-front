import React from 'react';

const LoginForm = ({handleSubmit, ...props}) => {
    return(
        <form id="loginForm" className='rg-login-form' onSubmit={handleSubmit}>
            <div className="rg-login-form-field input-group mb-3">
                <label for="userText" className='input-group-text'>Usuario</label>
                <input id="userText" className="form-control" type="text"
                    value={props.username || ''}
                    onChange={props.handleUsernameChange}></input>
            </div>
            <div className="rg-login-form-field input-group mb-3">
                <label for="passwordText" className='input-group-text'>Contraseña</label>
                <input id="passwordText" className='form-control' type='password'
                    value={props.password || ''}
                    onChange={props.handlePasswordChange}></input>
            </div>
            <button className="rg-login-from-logButton">Iniciar Sesión</button>
        </form>
    );
};
export default LoginForm;