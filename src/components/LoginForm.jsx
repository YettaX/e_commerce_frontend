import { CloseOutlined } from '@ant-design/icons';
import { Modal, Input, Button } from 'antd';

export default function LoginForm({ switchToRegister }) {

    return (
        <div>
            <h2 className="text-3lx font-semibold mb-4">Log in to your account</h2>

            <div className="mb-4">
                <label className="block text-sm mb-1">Email address</label>
                <Input placeholder="you@example.com" />
            </div>

            <div className="mb-4">
                <label className="block text-sm mb-1">Password</label>
                <Input.Password placeholder="••••••••" />
            </div>

            <button className=" w-full h-16 bg-black text-white py-2 font-medium hover:bg-[#333333] active:bg-[#333333]">
                Log in
            </button>


            <div className="mt-6 text-sm text-gray-600">
                <p className="mb-2">New to Aesop?</p>
                <button className="w-full h-16 text-black py-2 font-medium hover:bg-[#333333] active:bg-[#333333] border-solid border border-black" onClick={switchToRegister}>
                    Create new account
                </button>
            </div>
        </div>
    );
}