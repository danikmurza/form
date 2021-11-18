import { useState } from "react";

export const useToken = () => {
    const getToken = () => {
        const tokenString = localStorage.getItem("token");
        const token = JSON.parse(tokenString);
        return token;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = ({ token }) => {
        localStorage.setItem("token", JSON.stringify(token));
        setToken(token);
    };

    return { token, setToken: saveToken };
};

export const validateEmail=(email)=> {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const validatePassword=(password)=> {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    return password.match(re);
}
