import { useAuthState } from 'react-firebase-hooks/auth';
import { motion } from "framer-motion";
import { toast } from 'react-toastify';
import { FaSortAmountUpAlt } from 'react-icons/fa';
import { IoIosPricetags } from 'react-icons/io';
import { MdCategory, MdDeliveryDining, MdDescription, MdFastfood, MdOutlineAddPhotoAlternate } from 'react-icons/md';
import auth from '../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth);

    const handleAddItem = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const category = e.target.category.value;
        const img = e.target.img.value;
        const description = e.target.description.value;
        const quantity = e.target.quantity.value;
        const price = e.target.price.value;
        const supplier = e.target.supplier.value;

        const addQuantity = quantity;
        const addPrice = price;
        if (parseInt(addQuantity) <= 0 || parseInt(addPrice) <= 0) {
            toast("Price and Quantity must be greater than zero");
        } else {
            const item = { email: user.email, name, category, img, description, quantity, price, supplier };

            // POST data from client ...
            fetch('https://limitless-shore-74673.herokuapp.com/food', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
            })
                .then(res => res.json())
                .then(data => {
                    toast('Item added Successfully :)');
                    e.target.reset();
                })
            e.target.reset();
        }
    }

    return (
        <div className="w-full  flex items-center justify-center h-[75vh]">
            <form onSubmit={handleAddItem} className="w-[90%] md:w-[50%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                    <MdFastfood className="text-xl text-gray-700" />
                    <input
                        type="text"
                        name='name'
                        required
                        placeholder="Give a meaningful name..."
                        className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                    />
                </div>
                <p className='text-center -my-3 -mb-4'>Enter any category from here : chicken/curry/rice/fish/fruits/icecreams/drinks</p>
                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                    <MdCategory className="text-xl text-gray-700" />
                    <input
                        type="text"
                        name='category'
                        required
                        placeholder="Catagory"
                        className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                    />
                </div>
                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                    <MdOutlineAddPhotoAlternate className="text-xl text-gray-700" />
                    <input
                        type="url"
                        name='img'
                        required
                        placeholder="Give a photo URL..."
                        className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                    />
                </div>
                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                    <MdDescription className="text-xl text-gray-700" />
                    <input
                        type="text"
                        name='description'
                        required
                        placeholder="Short Description..."
                        className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                    />
                </div>
                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                    <FaSortAmountUpAlt className="text-xl text-gray-700" />
                    <input
                        type="number"
                        name='quantity'
                        required
                        placeholder="Products Quantity..."
                        className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                    />
                </div>
                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                    <IoIosPricetags className="text-xl text-gray-700" />
                    <input
                        type="number"
                        name='price'
                        required
                        placeholder="Product $ Price..."
                        className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                    />
                </div>
                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                    <MdDeliveryDining className="text-xl text-gray-700" />
                    <input
                        type="text"
                        name='supplier'
                        required
                        placeholder="Delivery man..."
                        className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                    />
                </div>
                <div className="flex items-center w-full">
                    <motion.input whileTap={{ scale: 0.75 }}
                        type="submit"
                        className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-400 cursor-pointer hover:bg-emerald-500 hover:text-gray-200 px-12 py-2 rounded-xl text-lg text-white font-semibold"
                        value="Add Item"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddItem;