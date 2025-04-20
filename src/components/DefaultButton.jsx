import { RightOutlined } from '@ant-design/icons';

export default function DefaultButton({ label = 'Explore', onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-72 h-16 px-4 flex justify-between items-center
        text-[#333333] border border-[#333333] bg-transparent
        hover:bg-[#333333] hover:text-white
        active:bg-[#333333] active:text-white
        transition duration-200 ease-in-out
        ${className}
      `}
    >
      <span>{label}</span>
      <RightOutlined />
    </button>
  );
}
