import { FiPlus } from "react-icons/fi";
import { useWindowWidth } from '@react-hook/window-size'
import ViewProduct from "components/modals/ViewProduct";
import { useState } from "react";

export default function Productitem({ product, isWater=false }){

    const [openViewModal, setOpenViewModal] = useState(false);

    const windowWidth = useWindowWidth()

    return (
        <div className="bg-white flex flex-col gap-y-1 relative items-center text-center text-sm font-semibold p-3">
            <button className="transition-colors absolute top-3 right-3 bg-white w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg text-brand-color shadow-md hover:border-brand-color">
                <FiPlus size={16}/>
            </button>
            <img onClick={() => {setOpenViewModal(true);}} src={product.image} alt={product.title} className={isWater && (windowWidth >= 768) ? "w-[200px] h-[200px] cursor-pointer" : "cursor-pointer"}/>
            <div className="text-brand-color">{product.price}</div>
            <div className="text-gray-900">{product.title}</div>
            <div className="text-gray-500 font-normal">{product.alt}</div>
            {openViewModal && <ViewProduct product={product} closeModal={setOpenViewModal}/>}
        </div>
    )
}