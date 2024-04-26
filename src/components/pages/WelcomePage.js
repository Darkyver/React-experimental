import React, {useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const WelcomePage = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        if(token !== null) {
            navigate("/shop");
        }
    });

    return (
        <div>
            <h1>Welcome to Our Website!</h1>
            <p>Please choose an option:</p>
            <ul>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    );
};

export default WelcomePage;
