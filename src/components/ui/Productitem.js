import { FiPlus } from "react-icons/fi";
import { useWindowWidth } from '@react-hook/window-size'
import { useState } from "react";
import { useSelector } from "react-redux";
import Login from "components/modals/Login";
import { Link } from "react-router-dom";

export default function Productitem({ product, isWater=false}){

    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [openRegisterModal, setOpenRegisterModal] = useState(false);

    const addToCart = () => {
        if(user){
            console.log("sepete eklendi")
        } else {
            setOpenLoginModal(true)
        }
    }

    const user = useSelector(state => state.settings.user)

    const windowWidth = useWindowWidth()

    return (
        <Link to={`/urun/${product.title}-${product.id}`} className="bg-white flex flex-col gap-y-1 relative items-center text-center text-sm font-semibold p-3">
            <button onClick={addToCart} className="transition-colors absolute top-3 right-3 bg-white w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg text-brand-color shadow-md hover:border-brand-color">
                <FiPlus size={16}/>
            </button>
            <img src={product.image} alt={product.title} className={isWater && (windowWidth >= 768) ? "w-[200px] h-[200px] cursor-pointer" : "cursor-pointer"}/>
            <div className="text-brand-color">{product.price}</div>
            <div className="text-gray-900">{product.title}</div>
            <div className="text-gray-500 font-normal">{product.alt}</div>
            {openLoginModal && <Login closeModal={setOpenLoginModal} openRegisterModal={setOpenRegisterModal}/>}
        </Link>
    )
}