import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Auth.css';

const AuthPage = () => {
    const [isSignup, setIsSignup] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [imageBuddyData, setImageBuddyData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [isImageBuddyLogin, setIsImageBuddyLogin] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const toggleAuthMode = () => {
        setIsSignup((prev) => !prev);
        setError('');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (isImageBuddyLogin) {
            setImageBuddyData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleImageBuddyLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('https://backendimagebuddy.onrender.com//api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: imageBuddyData.email,
                    password: imageBuddyData.password,
                }),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong!');
            }

            // Fetch images from ImageBuddy and pass them to Cloud Vision API
            const images = data.images; // Assume the response contains images
            console.log(images);
            // Redirect to upload page or another page where the images are processed
            navigate('/photos', { state: { images } });

        } catch (err) {
            setError(err.message || 'An error occurred during ImageBuddy login.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const endpoint = isSignup
            ? 'http://localhost:8080/api/customers/signup'
            : 'http://localhost:8080/api/auth/login';

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: isSignup ? formData.username : undefined,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong!');
            }

            // Redirect to Upload.jsx after success
            navigate('/upload');
        } catch (err) {
            setError(err.message || 'An error occurred.');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card" style={{ border: "5px solid gray" }}>
                <h2>{isSignup ? 'Sign Up' : 'Log In'}</h2>
                <form onSubmit={isImageBuddyLogin ? handleImageBuddyLogin : handleSubmit}>
                    {isImageBuddyLogin ? (
                        <>
                            <div className="auth-form-group">
                                <label htmlFor="email">ImageBuddy Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={imageBuddyData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your ImageBuddy email"
                                    required
                                />
                            </div>
                            <div className="auth-form-group">
                                <label htmlFor="password">ImageBuddy Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={imageBuddyData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your ImageBuddy password"
                                    required
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            {isSignup && (
                                <div className="auth-form-group">
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        placeholder="Enter your username"
                                        required
                                    />
                                </div>
                            )}
                            <div className="auth-form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div className="auth-form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    required
                                    minLength={6}
                                />
                            </div>
                        </>
                    )}
                    {error && <div className="alert alert-danger">{error}</div>}
                    {/* 
                    <div
                        className="auth-buttons"
                        style={{
                            display: "flex",
                            gap: "10px", // Adds spacing between buttons
                            justifyContent: "center", // Centers buttons horizontally
                            alignItems: "center", // Aligns buttons vertically
                            marginTop: "20px", // Adds spacing above the button container
                        }}
                    >
                        <button type="submit" className="btn btn-primary">
                            {isImageBuddyLogin ? "Login with ImageBuddy" : isSignup ? "Sign Up" : "Log In"}
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={toggleAuthMode}
                        >
                            {isImageBuddyLogin
                                ? "Switch to Default Login"
                                : isSignup
                                    ? "Log In"
                                    : "Sign Up"}
                        </button>
                        {!isImageBuddyLogin && (
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => setIsImageBuddyLogin(true)}
                            >
                                Login with ImageBuddy
                            </button>
                        )}
                    </div> */}

                    <div
                        className="auth-buttons"
                        style={{
                            display: "flex",
                            flexWrap: "wrap", // Allow buttons to wrap if needed
                            gap: "15px", // Adds more spacing between buttons
                            justifyContent: "center", // Centers buttons horizontally
                            marginTop: "20px", // Adds spacing above the button container
                        }}
                    >
                        <button type="submit" className="btn btn-primary">
                            {isImageBuddyLogin ? "Login with ImageBuddy" : isSignup ? "Sign Up" : "Log In"}
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={toggleAuthMode}
                        >
                            {isImageBuddyLogin
                                ? "Switch to Default Login"
                                : isSignup
                                    ? "Log In"
                                    : "Sign Up"}
                        </button>
                        {!isImageBuddyLogin && (
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => setIsImageBuddyLogin(true)}
                            >
                                Login with ImageBuddy
                            </button>
                        )}
                    </div>

                </form>
                <div className="auth-footer">
                    By continuing, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
