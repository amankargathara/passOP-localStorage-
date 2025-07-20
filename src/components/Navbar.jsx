import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-green-800 text-white  '>
            <div className="mycontainer flex justify-between items-center py-5 h-14 px-4 ">

                <div className="logo font-bold px-4 text-white text-2xl">
                    <span className='text-green-600'>&lt;</span>
                    <span >Pass</span><span className='text-green-600'>Op/&gt;</span>

                </div>
                {/* <ul>

                    <li className="flex gap-4 ">
                        <a className='hover:font-bold' href='/'>Home</a>
                        <a className='hover:font-bold' href='#'>About</a>
                        <a className='hover:font-bold' href="#">Contact</a>
                    </li>
                </ul> */}
                <button className='flex gap-1  py-1 px-2 rounded-full bg-green-600 justify-center hover:bg-green-700 '>
                <div className='invert'>
                    <img width={30} src="icons/github.svg" alt="" />
                </div>
                <span className='font-semibold'>GitHub</span>
                </button>
            </div>

        </nav>
    )
}

export default Navbar
