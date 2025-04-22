import { CloseOutlined } from '@ant-design/icons';
import { Modal, Input, Button } from 'antd';

export default function RegisterForm({ switchToLogin }) {


    return (
        <div>
            <h2 className="text-3lx font-semibold mb-4">Create your  Aesop account</h2>

            <div className="mb-4">
                <label className="block text-sm mb-1">First Name</label>
                <Input placeholder="" />
            </div>

            <div className="mb-4">
                <label className="block text-sm mb-1">Last Name</label>
                <Input placeholder="" />
            </div>

            <div className="mb-4">
                <label className="block text-sm mb-1">Email address</label>
                <Input placeholder="you@example.com" />
            </div>

            <div className="mb-4">
                <label className="block text-sm mb-1">Password</label>
                <Input.Password placeholder="••••••••" />
            </div>

            <button className=" w-full h-16 bg-black text-white py-2 font-medium hover:bg-[#333333] active:bg-[#333333]">
                Register
            </button>
            <p className='description text-center cursor-pointer  hover:underline' onClick={switchToLogin}>Do you already have an Aesop account?</p>
        </div>
    );
}