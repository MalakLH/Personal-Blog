import Sidebar from '@/Components/AdminComponents/Sidebar'
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function layout({children}){
    return (<>
    <div className="flex">
        <ToastContainer/>
        <Sidebar />
        <div className='flex flex-col w-full border-[#D183A9] border-2'>
            <div className='flex items-center w-full py-4 max-h-[55px] px-16 border-b border-[#D183A9]'>
                <h3 className='font-medium text-[#4B1535]'>Admin Panel</h3>
            </div>
            {children}
        </div>
    </div>
    </>
    )
}