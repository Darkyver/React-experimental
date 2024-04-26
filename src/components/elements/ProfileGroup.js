import {logOut} from "../functions/BackEndFunctions";
import React from "react";
import {useNavigate} from "react-router-dom";
import MyButton from "./MyButton";

export default function ProfileGroup() {
    let token = localStorage.getItem("token")
    const navigate = useNavigate()
    if (token !== null) {
        return (
            <div>
                <h1>Добро пожаловать!</h1>
                <p>Это специальная часть сайта, доступная только авторизованным пользователям.</p>
                <MyButton
                    text="Log out"
                    func={() => logOut().then(() => navigate("/"))}/>

            </div>
        )
    } else {
        return (
            <div>
                <h1>Привет!</h1>
                <p>Пожалуйста, авторизуйтесь, чтобы получить доступ к специальной части сайта.</p>
                <MyButton text="Log in" func={() => navigate("/login")}/>
                <MyButton text="Register" func={() => navigate("/register")}/>
            </div>
        )
    }
}