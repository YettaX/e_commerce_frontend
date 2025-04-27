import { useState } from 'react';
import { Input, message } from 'antd';
import { useAuth } from '../hooks/useAuth';
import { request } from '../utils/request';
import { useUser } from '../context/UserContext';

export default function LoginForm({ switchToRegister, closeModal }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'Login success!',
            content: 'You have successfully logged in.',
        });
    };

    const { login } = useAuth();
    const { loginUser } = useUser();


    const handleLogin = async () => {


        try {

            const response = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            });

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err?.error || 'Login failed');
            }
            const data = await response.json();
            setErrorMessage('')
            // save token and expiresIn
            login(data.token, data.expiresIn);

            // get user info

            const userInfo = await request('http://localhost:8080/user/account', {
                method: 'GET'
            }, data.token);
            loginUser(userInfo)
            success();
            closeModal();
            window.location.reload();
            console.log('Login Success: ', data);
        } catch (error) {
            console.error('Login error: ', error);
            setErrorMessage(error.message || 'Login error')
        }


    }

    return (
        <div>
            <h2 className="text-3lx font-semibold mb-4">Log in to your account</h2>

            <div className="mb-4">
                <label className="block text-sm mb-1">Email address</label>
                <Input
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm mb-1">Password</label>
                <Input.Password
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>

            {errorMessage && (
                <div className="text-red-500 mb-4 text-sm font-medium">
                    {errorMessage}
                </div>
            )}

            <button className=" w-full h-16 bg-black text-white py-2 font-medium hover:bg-[#333333] active:bg-[#333333]"
                onClick={handleLogin}>
                Log in
            </button>


            <div className="mt-6 text-sm text-gray-600">
                <p className="mb-2">New to Aesop?</p>
                <button className="w-full h-16 text-black py-2 font-medium hover:bg-[#333333] active:bg-[#333333] border-solid border border-black" onClick={switchToRegister}>
                    Create new account
                </button>
            </div>
            {contextHolder}




        </div>
    );
}