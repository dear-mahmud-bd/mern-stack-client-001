import React from 'react';
import { FaSortAmountUpAlt } from 'react-icons/fa';
import { IoIosPricetags } from 'react-icons/io';
import { MdDescription, MdFastfood, MdOutlineAddPhotoAlternate } from 'react-icons/md';

const AddItem = () => {
    return (
        <div className="w-full  flex items-center justify-center">
            <div className="w-[90%] md:w-[50%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
                
                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                    <MdFastfood className="text-xl text-gray-700" />
                    <input
                        type="text"
                        required
                        // value={title}
                        // onChange={(e) => setTitle(e.target.value)}
                        placeholder="Give a meaningful name..."
                        className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                    />
                </div>
                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                    <MdOutlineAddPhotoAlternate className="text-xl text-gray-700" />
                    <input
                        type="url"
                        required
                        // value={title}
                        // onChange={(e) => setTitle(e.target.value)}
                        placeholder="Give a photo URL..."
                        className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                    />
                </div>
                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                    <MdDescription className="text-xl text-gray-700" />
                    <input
                        type="url"
                        required
                        // value={title}
                        // onChange={(e) => setTitle(e.target.value)}
                        placeholder="Short Description..."
                        className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                    />
                </div>
                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                    <FaSortAmountUpAlt className="text-xl text-gray-700" />
                    <input
                        type="number"
                        required
                        // value={title}
                        // onChange={(e) => setTitle(e.target.value)}
                        placeholder="Products Quantity..."
                        className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                    />
                </div>
                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                    <IoIosPricetags className="text-xl text-gray-700" />
                    <input
                        type="number"
                        required
                        // value={title}
                        // onChange={(e) => setTitle(e.target.value)}
                        placeholder="Product $ Price..."
                        className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                    />
                </div>
                <div className="flex items-center w-full">
                    <button
                        type="button"
                        className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
                    // onClick={saveDetails}
                    >
                    Add Item
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddItem;