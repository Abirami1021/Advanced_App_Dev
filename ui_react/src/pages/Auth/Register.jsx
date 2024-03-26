import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        // Perform sign-up actions (e.g., user registration)

        // After successful sign-up, navigate to the login page
        navigate('/login');
    };

    return (
        <div className='h-screen flex justify-center items-center bg-cover bg-center' style={{ backgroundImage: "url('https://www.pixelstalk.net/wp-content/uploads/images6/Party-Background-Desktop.jpg')" }}>
            <div className='border border-black bg-black bg-opacity-50 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center w-96 h-96'>
                <form className='flex flex-col gap-4 items-center w-full' onSubmit={handleSignUp}>
                    <input type="text" name="fullname" placeholder='Full Name' className='input-style w-64 h-10' />
                    <input type="email" name="email" placeholder='Email' className='input-style w-64 h-10' />
                    <input type="password" name="password" placeholder='Password' className='input-style w-64 h-10' />
                  
                    <input type="text" name="phoneNumber" placeholder='Phone Number' className='input-style w-64 h-10' />
                   
                    <button type="submit" className='button-style bg-transparent border border-white hover:bg-white hover:text-gray-800 text-white px-4 py-2 rounded'>SIGN UP</button>
                </form>
                <p className='mt-4 text-white'>Already have an account? <span className='text-white cursor-pointer font-bold' onClick={() => navigate('/login')}> LOGIN</span></p>
            </div>
        </div>
    );
};

export default SignUp;
