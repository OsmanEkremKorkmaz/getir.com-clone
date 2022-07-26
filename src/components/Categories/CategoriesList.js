import { useEffect, useState } from "react";
import CategoryDropdown from "../ui/CategoryDropdown";
import data from 'api/MainPage/categories.json'


export default function CategoriesList() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        setCategories(data)
    }, [])
  return (
    <div className=' max-w-[15rem] w-full max-h-[calc(100vh-170px)] sticky top-32 self-start'>
        <div className='mb-2 flex w-full justify-between items-center'>
            <h5 className='text-[#191919] font-semibold text-sm leading-5'>Kategoriler</h5>
        </div>
        <div className='bg-white flex flex-col py-2 w-full rounded-lg max-h-[calc(100vh-170px)] overflow-y-auto hide-scrollbar '>
            {categories.map(category => (
                <CategoryDropdown key={category.id} category={category} />
            ))}
        </div>
    </div>
  )
}
