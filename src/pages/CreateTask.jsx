import React from "react";
import { Link } from "react-router-dom";
const CreateTask = () => {
    return (
        <div>
            <p>Here you can add a new task</p>
            <Link>
                <button>Go to Dashboard</button>
            </Link>
        </div>
    )
}

export default CreateTask;