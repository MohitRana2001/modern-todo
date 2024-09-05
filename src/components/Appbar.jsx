import { Search, Bell, CalendarDays, Calendar } from 'lucide-react';


const Appbar = () => {
    return (
        <div className="w-full flex justify-between px-6 py-2 items-center shadow-md bg-yellow-50 mb-6">
            <div className='flex items-center text-lg'>
                <h2 className="text-red-500 font-bold">Zen</h2>
                <h2 className="text-black font-bold">List</h2>
            </div>
            <div className='flex items-center'>
                <input type="text" placeholder="Search your task here..." className="text-sm rounded-full shadow-md p-2 w-96"/>
                <Search className='fill-red-500 stroke-1 stroke-white bg-red-500 rounded-md p-1 ml-2 '/>
            </div>
            <div className='flex items-center space-x-2'>
                <button><Bell className='fill-red-500 stroke-1 stroke-white bg-red-500 rounded-md p-1 mr-2'/></button>
                <button><Calendar className='fill-red-500 stroke-1 stroke-white bg-red-500 rounded-md p-1 mr-2'/></button>
            </div>
            <div className='flex flex-col items-end'>
                <p className='text-sm font-semibold'>Tuesday</p>
                <p className='text-sm font-semibold text-blue-400'>05/09/2024</p>
            </div>
        </div>
    )
}


export default Appbar;