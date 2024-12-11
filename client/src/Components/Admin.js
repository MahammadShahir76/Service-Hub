// Updated JSX File (Admin.jsx)
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("User");
        if (auth) {
            navigate("/AdminPage");
        }
    }, [navigate]);

    const handleLogin = async () => {
        let result = await fetch("http://localhost:5000/login", {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
        });
        result = await result.json();
        if (result.name) {
            localStorage.setItem("User", JSON.stringify(result));
            navigate("/AdminPage");
        } else {
            alert("Enter correct details");
        }
    };

    return (
        <div className="mainlog454">
        <div className="mainLogin8934">
            <div className="loginContainer8934">
                <h1 className="loginTitle8934">Login Page</h1>
                <input
                    className="loginInput8934"
                    type="text"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    className="loginInput8934"
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button
                    className="loginButton8934"
                    type="button"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
        </div>
        </div>
    );
};

export default Admin;
