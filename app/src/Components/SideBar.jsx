import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className='fixed left-0 pr-14 bg-green-100 h-screen flex flex-col items-start justify-start py-10 gap-2'>
            <img src='' />
            <Link to={"/"} className='font-medium hover:text-green-800 rounded-md
             hover:bg-green-300 hover:font-semibold w-full py-1 px-3'>
                Home

            </Link>
            <Link to={"/archive"} className='font-medium hover:text-green-800 rounded-md
             hover:bg-green-300 hover:font-semibold w-full py-1 px-3'>
                Archive
            </Link>
            <Link to={"/create"} className='font-medium hover:text-green-800 rounded-md
             hover:bg-green-300 hover:font-semibold w-full py-1 px-3'>
                New Post
            </Link>
        </div>
    )
}

export default SideBar