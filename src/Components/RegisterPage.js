import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [account_type, setAccountType] = useState('client'); // Default to 'client'

    const handleRegister = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    password_confirmation: passwordConfirmation,
                    account_type,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Registration successful', data);
                alert('Registration Successful');
            } else if (response.status === 422) {
                const errorData = await response.json();
                console.error('Validation failed', errorData);
                alert("Please try again. Use proper email address and check other credentials");
            } else {
                console.error('An error occurred', response.statusText);
            }
        } catch (error) {
            console.error('An error occurred', error);
        }
    };

    return (
        <div>
            <div>
                <h2>Register Page</h2>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
            </div>
            <div>
                <label>
                    Account Type:
                    <input
                        type="radio"
                        value="client"
                        checked={account_type === 'client'}
                        onChange={() => setAccountType('client')}
                    />
                    Client
                </label>
                <label>
                    <input
                        type="radio"
                        value="admin"
                        checked={account_type === 'admin'}
                        onChange={() => setAccountType('admin')}
                    />
                    Admin
                </label>
            </div>
            <div>
                <button onClick={handleRegister} className="btn btn-primary mt-3">
                    Register
                </button>
            </div>
            <div className="mt-3">
                <span>Already have an account? </span>
                <Link to="/" className="btn btn-secondary">
                    Log In
                </Link>
            </div>
        </div>
    );
};

export default RegisterPage;
