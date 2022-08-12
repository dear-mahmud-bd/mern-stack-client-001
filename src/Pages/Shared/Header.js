import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '../../image/logo.png';
import UserPic from '../../image/avatar.png';
import { MdShoppingCart, MdAdd, MdLogout, MdLogin, MdHome, MdList, MdDeleteForever } from 'react-icons/md';
import { CgUserList } from 'react-icons/cg';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const navigateService = () => {
        navigate('/service');
    }

    const handleSignOut = () => {
        signOut(auth);
    }

    // Dropdown Menu Item ...
    const [isMenu, setIsMenu] = useState(false);
    const dropdownMenu = async () => {
        setIsMenu(!isMenu);
    }
    return (
        <header className=' z-50 w-screen p-4 px-7 md:p-5 md:px-16 bg-primary'>
            {/* fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary */}

            {/* Desktop & Tablet */}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                <Link to='/' className='flex items-center gap-2'>
                    <img src={Logo} className='w-10 object-cover' alt="Logo" />
                    <p className=' text-heaingColor text-xl font-bold'>Food Corner</p>
                </Link>
                <div className='flex items-center gap-8'>
                    <motion.ul initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 200 }} className='flex items-center gap-7 ml-auto'>
                        <Link to='/'><li className=' text-base text-textColor hover:text-heaingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li></Link>
                        <li className=' text-base text-textColor hover:text-heaingColor duration-100 transition-all ease-in-out cursor-pointer'>Blogs</li>
                        <Link to='allitem'><li className=' text-base text-textColor hover:text-heaingColor duration-100 transition-all ease-in-out cursor-pointer'>All Item</li></Link>
                        <li className=' text-base text-textColor hover:text-heaingColor duration-100 transition-all ease-in-out cursor-pointer'><Link to="/service" onClick={navigateService}>Service</Link></li>
                    </motion.ul>
                    <div className='relative flex items-center justify-center'>
                        <MdShoppingCart className='text-textColor hover:text-heaingColor cursor-pointer text-2xl' />
                        <div className='absolute bottom-4 left-4 w-4 h-4 rounded-full bg-cartNumBg'>
                            <p className='text-xs text-white font-semibold text-center'>0</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <motion.img whileTap={{ scale: 0.7 }} src={UserPic} className='w-11 h-11 min-w-[40px] min-h-[40px] rounded-full drop-shadow-2xl cursor-pointer' alt="User Profile" onClick={dropdownMenu} />
                        {/* <motion.img whileTap={{ scale: 0.7 }} src={user ? user?.photoURL : UserPic} className='w-11 h-11 min-w-[40px] min-h-[40px] rounded-full drop-shadow-2xl cursor-pointer' alt="User Profile" onClick={dropdownMenu} /> */}
                        <div className=''>
                            {
                                isMenu && (
                                    <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-11 right-0'>
                                        <p className='px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-slate-200 transition-all duration-200 ease-in-out text-textColor text-base' onClick={() => setIsMenu(false)}><CgUserList /> My Item</p>
                                        <Link to='/additem'><p className='px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-slate-200 transition-all duration-200 ease-in-out text-textColor text-base' onClick={() => setIsMenu(false)}><MdAdd /> Add Item</p></Link>
                                        <p className='px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-slate-200 transition-all duration-200 ease-in-out text-textColor text-base' onClick={() => setIsMenu(false)}><MdDeleteForever /> Delete Item</p>
                                        {
                                            user ?
                                                <p className='px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-slate-200 transition-all duration-200 ease-in-out text-textColor text-base' onClick={handleSignOut}><MdLogout /> LogOut</p>
                                                :
                                                <Link to='/login'><p className='px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-slate-200 transition-all duration-200 ease-in-out text-textColor text-base' onClick={() => setIsMenu(false)}><MdLogin /> LogIn</p></Link>
                                        }
                                    </motion.div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>









            {/* Mobile */}
            <div className='flex items-center justify-between md:hidden'>
                <div className='relative flex items-center justify-center'>
                    <MdShoppingCart className='text-textColor hover:text-heaingColor cursor-pointer text-2xl' />
                    <div className='absolute bottom-4 left-4 w-4 h-4 rounded-full bg-cartNumBg'>
                        <p className='text-xs text-white font-semibold text-center'>0</p>
                    </div>
                </div>
                <Link to='/' className='flex items-center gap-2'>
                    <img src={Logo} className='w-10 object-cover' alt="Logo" />
                    <p className=' text-heaingColor text-xl font-bold'>Food Corner</p>
                </Link>
                <div className='relative'>
                    <motion.img whileTap={{ scale: 0.7 }} src={UserPic} className='w-11 h-11 min-w-[40px] min-h-[40px] rounded-full drop-shadow-2xl cursor-pointer' alt="User Profile" onClick={dropdownMenu} />
                    <div className=''>
                        {
                            isMenu && (
                                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-11 right-0'>
                                    <Link to='/'><p className='px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-slate-200 transition-all duration-200 ease-in-out text-textColor text-base' onClick={() => setIsMenu(false)}><MdHome /> Home</p></Link>
                                    <p className='px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-slate-200 transition-all duration-200 ease-in-out text-textColor text-base' onClick={() => setIsMenu(false)}><MdList /> All Item</p>
                                    <p className='px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-slate-200 transition-all duration-200 ease-in-out text-textColor text-base' onClick={() => setIsMenu(false)}><CgUserList /> My Item</p>
                                    <Link to='/additem'><p className='px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-slate-200 transition-all duration-200 ease-in-out text-textColor text-base' onClick={() => setIsMenu(false)}><MdAdd /> Add Item</p></Link>
                                    <p className='px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-slate-200 transition-all duration-200 ease-in-out text-textColor text-base' onClick={() => setIsMenu(false)}><MdDeleteForever /> Delete Item</p>
                                    {
                                        user ?
                                            <p className='px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-slate-200 transition-all duration-200 ease-in-out text-textColor text-base'><MdLogout /> LogOut</p>
                                            :
                                            <Link to='/login'><p className='px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-slate-200 transition-all duration-200 ease-in-out text-textColor text-base'><MdLogin /> LogIn</p></Link>
                                    }
                                </motion.div>
                            )
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;