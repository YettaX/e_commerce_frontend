import { CloseOutlined } from '@ant-design/icons';
import { Modal, Input, message } from 'antd';
import { use, useState } from 'react';

export default function RegisterForm({ switchToLogin, closeModal }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'Register success!',
            content: 'You have successfully register, please login in.',
        });
    };

    const handleRegister = async () => {
        try {
            const response = await fetch("http://localhost:8080/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    firstName: firstName,
                    lastName: lastName
                }),
            });

            if (!response.ok) {

                const err = await response.json();
                throw new Error(err?.error || 'Register failed');
            }



            const data = await response.json();
            console.log('Register Success: ', data);
            success();

            setTimeout(() => {
                switchToLogin();
            }, 3000);

        } catch (error) {
            console.error('Register error:', error);
            setErrorMessage(error.message || 'Register failed');

        }
    }

    return (
        <div>

            <h2 className="text-3lx font-semibold mb-4">Create your  Aesop account</h2>

            <div className="mb-4">
                <label className="block text-sm mb-1">First Name</label>
                <Input placeholder="" value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} />
            </div>

            <div className="mb-4">
                <label className="block text-sm mb-1">Last Name</label>
                <Input placeholder="" value={lastName}
                    onChange={(e) => setLastName(e.target.value)} />
            </div>

            <div className="mb-4">
                <label className="block text-sm mb-1">Email address</label>
                <Input placeholder="you@example.com" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="mb-4">
                <label className="block text-sm mb-1">Password</label>
                <Input.Password placeholder="••••••••" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            {errorMessage && (
                <div className="text-red-500 mb-4 text-sm font-medium">{errorMessage}</div>
            )}

            <button className=" w-full h-16 bg-black text-white py-2 font-medium hover:bg-[#333333] active:bg-[#333333]"
                onClick={handleRegister}>
                Register
            </button>
            {contextHolder}
            <p className='description text-center cursor-pointer  hover:underline' onClick={switchToLogin}>Do you already have an Aesop account?</p>
        </div>
    );
}