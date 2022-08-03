import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../../image/logo.png';
import UserPic from '../../image/avatar.png';
import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='fixed z-50 w-screen p-6 px-16'>
            {/* Desktop & Tablet */}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={Logo} className='w-10 object-cover' alt="Logo" />
                    <p className=' text-heaingColor text-xl font-bold'>Food Corner</p>
                </Link>
                <div className='flex items-center gap-7'>
                    <ul className='flex items-center gap-7 ml-auto'>
                        <li className=' text-base text-textColor hover:text-heaingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                        <li className=' text-base text-textColor hover:text-heaingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                        <li className=' text-base text-textColor hover:text-heaingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                        <li className=' text-base text-textColor hover:text-heaingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
                    </ul>
                    <div className='relative flex items-center justify-center'>
                        <MdShoppingCart className='text-textColor hover:text-heaingColor cursor-pointer text-2xl' />
                        <div className='absolute bottom-4 left-4 w-4 h-4 rounded-full bg-cartNumBg'>
                            <p className='text-xs text-white font-semibold text-center'>0</p>
                        </div>
                    </div>
                    <motion.img whileTap={{ scale: 0.7 }} src={UserPic} className='w-11 h-11 min-w-[40px] min-h-[40px] rounded-full drop-shadow-2xl cursor-pointer' alt="User Profile" />
                </div>
            </div>

            {/* Mobile */}
            <div className='flex md:hidden'>

            </div>
        </header>
    );
};

export default Header;