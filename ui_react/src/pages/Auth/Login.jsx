import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform login actions (e.g., authentication)
        if (email === 'abiashwinps@gmail.com' && password === 'Abi@2004') {
            // Correct email and password, navigate to the user dashboard
            navigate('/udash');
        } else {
            // Incorrect email or password, display error message
            setError('Invalid email or password');
        }
    };

    return (
        <div className='h-screen flex justify-center items-center bg-cover bg-center' style={{ backgroundImage: "url('https://www.pixelstalk.net/wp-content/uploads/images6/Party-Background-Desktop.jpg')" }}>
            <div className='border border-black bg-black bg-opacity-50 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center w-96 h-96'>
                <form className='flex flex-col gap-7 items-center w-full' onSubmit={handleLogin}>
                    <input type="email" name="email" id="email" placeholder='Email' className='input-style w-64 h-10' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" name="password" id="password" placeholder='Password' className='input-style w-64 h-10' value={password} onChange={(e) => setPassword(e.target.value)} />
                    {error && <p className="text-red-500">{error}</p>}
                    <button type="submit" className='button-style bg-transparent border border-white hover:bg-white hover:text-gray-800 text-white px-4 py-2 rounded'>LOGIN</button>
                </form>
                <p className='mt-4 text-white'>Don't have an account? <span className='text-white cursor-pointer font-bold' onClick={() => navigate('/register')}> SIGN UP</span></p>
            </div>
        </div>
    );
};

export default Login;
