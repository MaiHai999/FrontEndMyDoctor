import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Regiter from "../UIComponents/regiter";
import * as service from "../../services/AuthServices";




function RegiterContainer(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVer, setPasswordVer] = useState("");

    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordVerError, setPasswordVerError] = useState("");



    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handlePasswordVerChange = (event) => {
        setPasswordVer(event.target.value);
    };

    const validateEmail = (email) => {
        if(email.length === 0){
            setUsernameError('Email không hợp lệ');
            return false;
        }else{
            setUsernameError('');
            return true;
        }
    };

    const validatePassword = (password) => {
        if (password.length === 0){
            setPasswordError('Mật khẩu không hợp lệ');
            return false;
        }else{
            setPasswordError('');
            return true;
        }
    };

    const validatePasswordVer = (passwordVer , password) => {
        if (passwordVer.length === 0){
            setPasswordVerError('Không được bỏ trống');
            return false;
        }else if(password !== passwordVer){
            setPasswordVerError('Mật khẩu không khớp');
            return false;
        }
        else{
            setPasswordVerError('');
            return true;
        }
    };



    //hàm này khi bấm vào tạo tài khoản 
    const navigate = useNavigate();

    const onRegiter = (event) => {
        const is_email = validateEmail(username);
        const is_password = validatePassword(password);
        const is_passwordVer = validatePasswordVer(passwordVer , password);

        if (is_email && is_password && is_passwordVer) {
            const data = {
                email: username,
                password: password
            };

            service.AuthServicesRegister(data).then(res => {
                navigate('/vertification_login');

            }).catch(error => {
                console.log(error);
                
            })
        }
    };


    return(
        <Regiter
        onUsernameChange = {handleUsernameChange}
        onPasswordChange = {handlePasswordChange}
        onPasswordChangeVer = {handlePasswordVerChange}
        onRegiter = {onRegiter}
        usernameError = {usernameError}
        passwordError = {passwordError}
        passwordErrorVer = {passwordVerError}
        onLoginGG = {() => {}}
        />
    );
}

export default RegiterContainer;