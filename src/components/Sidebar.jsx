import React from "react";
import profile_pic from "../assets/profile_pic.svg"
import { CircleHelp, Settings, ListCollapse, BookCheck, CircleAlert, LayoutDashboard, LogOut } from 'lucide-react';
import { Link , useNavigate} from "react-router-dom";
import Dashboard from "@/pages/Dashboard";

const Sidebar = () => {

    const navigate = useNavigate();

    return (
        <aside className="min-h-screen w-64 bg-red-500 text-white p-6    rounded-r-md flex flex-col justify-between mr-4">
            <div>
            <div className="flex flex-col items-center space-x-4">
                <img src={profile_pic} alt="profile" className="w-24 h-24 rounded-full object-cover mb-"/>
                <div>
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="text-sm">johndoe@gmail.com</p>
                </div>
            </div>
            <nav className="mt-10 align-center">
                <ul>
                    <li className="flex mb-4 bg-white rounded-lg items-center py-2 px-2">
                        <LayoutDashboard className="text-red-500 items-center fill-red-500"/>
                        <Link to="/" className="text-md text-red-500 text- hover:text-black pl-2">Dashboard</Link>
                    </li>
                    <li className="flex mb-4">
                        <CircleAlert />
                        <Link to="/vital-task" className="text-md hover:text-gray-200 pl-2">Vital Task</Link>
                    </li>
                    <li onClick={
                        () => {

                        }                    
    
                    } className="flex mb-4">
                        <BookCheck />
                        <Link to="/my-task" className="text-md hover:text-gray-200 pl-2">My Task</Link>
                    </li>
                    <li className="flex mb-4">
                        <ListCollapse />
                        <Link to="/task-categories" className="text-md hover:text-gray-200 pl-2">Task Categories</Link>
                    </li>
                    <li className="flex mb-4">
                        <Settings />
                        <Link to="/settings" className="text-md hover:text-gray-200 pl-2">Settings</Link>
                    </li>
                    <li className="flex mb-4">
                        <CircleHelp />
                        <Link to="/help" className="text-md hover:text-gray-200 pl-2">Help</Link>
                    </li>
                </ul>
            </nav>
            </div>
            <div>
                <ul>
                    <li className="flex">
                        <LogOut />
                        <button className="bg-transparent text-white rounded-md hover:bg-gray-700 pl-2">
                            Logout
                        </button>
                    </li>
                </ul>
            </div>

        </aside>
    )
}

export default Sidebar;