import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/pages/WelcomePage';
import RegisterPage from './components/pages/RegistrationForm';
import LoginPage from './components/pages/LoginPage';
import ShopPage from "./components/pages/ShopPage";
import {ShopPageRefactored} from "./components/pages/ShopPageRefactored";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/shopRef" element={<ShopPageRefactored />} />
            </Routes>
        </Router>
    );
};

export default App;

