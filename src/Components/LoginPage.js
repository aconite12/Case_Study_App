import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [account_type, setAccountType] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, account_type})
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log('Login successful', data);
                alert('Login Successful');
                if (data.account_type === 'admin') {
                 
                    window.location.href = '/AdminHomePage';
                } else {
                   
                    window.location.href = '/HomePage';
                }
            } else if (response.status === 422) {
                const errorData = await response.json();
                console.error('Validation failed', errorData.errors);
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
                <h2>Login Page</h2>
            </div>
            <div>
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
            </div>
            <div>
                <button onClick={handleLogin} className="btn btn-primary mt-3">
                    Log In
                </button>
            </div>
            <div className="mt-3">
                <span>Don't have an account? </span>
                <Link to="/RegisterPage" className="btn btn-secondary">
                    Register
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;
