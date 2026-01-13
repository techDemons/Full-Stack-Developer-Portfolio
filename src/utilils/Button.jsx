import { FiSend } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
const Button = () => {
  const notify = ()=>{
    toast("Resume downloaded")
  }
  return (
    <div className="flex items-center justify-center">
      <NeumorphismButton />
    </div>
  );
};

const NeumorphismButton = () => {
  return (
    <a
      href="/resume.pdf"
      download
      className={`
        cursor-pointer
        font-mono
        px-4 py-2 rounded-full 
        flex items-center gap-2 
        text-slate-100

        shadow-[-1px_-3px_15px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-violet-500
      `}
    >
      <FiSend />
      <span>Resume</span>
    </a>
  );
};

export default Button;
