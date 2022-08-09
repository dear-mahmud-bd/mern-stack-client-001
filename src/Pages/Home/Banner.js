import React, { useState } from 'react';
import Delivery from '../../image/delivery.png';
import HeroBg from '../../image/heroBg.png';
import { useEffect } from 'react';


const Banner = () => {
    const [banner, setBanner] = useState([]);
    useEffect(() => {
        fetch('banner.json')
            .then(res => res.json())
            .then(data => setBanner(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
            <div className='py-2 flex-1 flex flex-col items-start justify-center gap-4'>
                <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
                    <p className="text-base text-orange-500 font-semibold">Bike Delivery</p>
                    <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
                        <img src={Delivery} className='w-full h-full object-contain' alt="Delivery" />
                    </div>
                </div>
                <p className="text-[2.5rem] lg:text-[4.25rem] font-bold tracking-wide text-heaingColor"><span className='text-orange-500 text-[3rem] lg:text-[5rem]'>Food Corner</span> is the best site for food...</p>
                <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, repudiandae sapiente aperiam at temporibus soluta animi iste, perferendis nulla optio quod possimus neque suscipit a. Enim officia illo sapiente placeat?</p>
                <button type='button'
                    className=' bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 '
                >Order Now</button>
            </div>

            <div className='py-2 flex-1 flex items-center relative'>
                <img src={HeroBg} className="ml-auto h-420 lg:h-650 w-full lg:w-auto" alt="hero-bg" />
                <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-6 py-4 gap-4 flex-wrap">
                    {
                        banner.map(item =>
                            <div key={item.id} className="lg:w-190 p-2 bg-colorOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg">
                                <img src={item.img} className="w-20 lg:w-40 -mt-10 lg:-mt-20" alt="Ice Creem1" />
                                <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>{item.name}</p>
                                <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>{item.description}</p>
                                <p className='text-sm font-semibold text-heaingColor'>
                                    <span className=' text-red-600'>$ </span>{item.price}
                                </p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Banner;