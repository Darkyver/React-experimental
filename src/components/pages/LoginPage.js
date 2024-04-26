import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit1 = async (e) => {
        e.preventDefault()

        try {
            const formData = new URLSearchParams()
            formData.append('email', email)
            formData.append('password', password)

            const response = await fetch('http://localhost:8080/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formData
            })

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const data = await response.text() // Преобразуем ответ в текст
            if(data !== "no authorized"){
                localStorage.setItem("token", data)
                navigate("/shop");
            }
            console.log(data) // Вывод ответа сервера в консоль
        } catch (error) {
            console.error('There was an error!', error)
        }
    }

    return (
        <div>
            <h2>Login page</h2>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit" className="ml-2" onClick={handleSubmit1} >
                Submit
            </Button>
        </div>
    )
}
export default LoginPage