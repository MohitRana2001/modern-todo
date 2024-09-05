import { UserPlus } from 'lucide-react';




const Header = () => {
    return (
        <div className=" w-full flex justify-between items-center mb-6">
            <h2 className='text-lg font-semibold px-2'>Welcome back, John 👋</h2>
            <div className="flex items-center space-x-4">
                <button className="flex text-red-500 text-sm rounded-md border border-red-500 px-2"><UserPlus className='pr-2' /> Invite</button>
                <i className="fas fa-calendar-alt"></i>
            </div>
        </div>
    )
}

export default Header;