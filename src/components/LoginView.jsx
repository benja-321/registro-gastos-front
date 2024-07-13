import React from 'react';

const LoginView = () => {
    return(
        <div className="rg-login">
            <h1>Registro de Gastos</h1>
            <img
                className='rg-login-logo'
                alt="Logo de la aplicacion"
                src="https://www.ruta67.com/wp-content/uploads/2020/01/Registro-de-gastos.jpg"></img>
            <div>
                <form id="loginForm" className='rg-login-form'>
                    <div className="rg-login-form-field input-group mb-3">
                        <label for="userText" className='input-group-text'>Usuario</label>
                        <input id="userText" className="form-control" type="text"></input>
                    </div>
                    <div className="rg-login-form-field input-group mb-3">
                        <label for="passwordText" className='input-group-text'>Contraseña</label>
                        <input id="passwordText" className='form-control' type='text'></input>
                    </div>
                    <button className="rg-login-from-logButton">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
};
export default LoginView;