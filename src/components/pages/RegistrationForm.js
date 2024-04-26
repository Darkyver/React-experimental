import React, {useState} from 'react'
import {Button, Form, FormLabel} from 'react-bootstrap'
import {Link} from "react-router-dom"

const RegistrationForm = () => {
    const [email, setEmail] = useState('')
    const [labelText, setLabel] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = {
            email: email,
            password: password
        }

        try {
            const response = await fetch('http://localhost:8080/api/v1/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (!response.ok) {
                throw new Error('Failed to register user')
            }

            console.log('User successfully registered')
            setLabel('User successfully registered')
        } catch (error) {
            console.error('Error registering user:', error.message)
        }
    }

    return (
        <div>
            <div >
                <h2>Registration Form</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="ml-2">
                        Submit
                    </Button>

                    <Link to="/">
                        <Button>Cancel</Button>
                    </Link>

                    <FormLabel>
                        {labelText}
                    </FormLabel>
                </Form>
            </div>
        </div>
    )
}

export default RegistrationForm
