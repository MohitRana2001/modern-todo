import Sidebar from "../components/Sidebar";
import Appbar from "../components/Appbar";
import Header from "../components/Header";
import React from "react";
import { Link } from "react-router-dom";
import TaskStatusOverview from "@/components/TaskStatusOverview";

const Dashboard = () => {
    return (
        <div>
            <Appbar />
            <div className="flex">
                <Sidebar />
                <div>
                    <Header />
                    <TaskStatusOverview />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;