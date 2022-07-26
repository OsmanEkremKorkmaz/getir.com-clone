import Campaigns from 'components/Campaigns'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from 'api/MainPage/categories.json'
import banners from "api/MainPage/banners.json";
import Productitem from 'components/ui/Productitem'
import { scroller } from 'react-scroll'
import CategoriesList from 'components/Categories/CategoriesList'
import CategoriesTab from '../components/Categories/CategoriesTab'

export default function Category() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        setCategories(data)
    }, [])
    const {category, parent, subcategory} = useParams()
    const selectedCategory = categories.find(c => c.title === category)
    const selectedSubCategory = selectedCategory?.subCategories.find(c => c.title === (subcategory ? subcategory : selectedCategory?.subCategories[0]?.title))

    return (
        <main className='mt-6 flex flex-col justify-center items-center'>
            <Campaigns Banners={banners}/>
            <div className='block md:hidden sticky top-0 z-10'>
                <CategoriesTab />
            </div>
            <div className='container mt-6 flex relative md:px-6 justify-between'>
                <div className="md:block hidden max-w-[15rem] w-full" >
                    <CategoriesList/>
                </div>
                <div className='mx-4 w-full top-32 sticky flex flex-col items-start'>
                    <div className='mb-2 flex justify-between items-center w-full'>
                        <h5 className='text-[#191919] text-sm font-semibold flex items-center'>
                            <div className='text-[#191919]'>
                                {category}
                            </div>
                            <div className='h-6 w-6 flex items-center justify-center'>
                                <div className='h-3 w-3 flex items-center justify-center text-[#a1a1a1] '>
                                    <svg className='h-[7px] w-[7px]' data-testid="icon" name="chevron-right" color="#A1A1A1" size="7" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill='currentColor' d="M7.528 31.331c0.892 0.892 2.332 0.892 3.224 0l13.719-13.719c0.892-0.892 0.892-2.332 0-3.224l-13.719-13.719c-0.892-0.892-2.332-0.892-3.224 0s-0.892 2.332 0 3.224l12.096 12.096-12.096 12.096c-0.892 0.892-0.892 2.355 0 3.247z"></path></svg>
                                </div>                                
                            </div>
                            <div>
                                {selectedCategory?.subCategories[0]?.title}
                            </div>
                        </h5>
                    </div>
                    <div className='flex flex-col w-full'>
                        {selectedCategory?.subCategories.map(subcategory => (
                            <div  className={`${subcategory.id !== 1 ? "mt-2" : ""} ${subcategory.title} `}>
                                <div className={`mb-2 ${subcategory.id !== 1 ? "block" : "hidden"} flex w-full justify-between items-center`}>
                                    <h5 className={`text-[#191919] font-semibold text-sm leading-5`}>{subcategory.title}</h5>
                                </div>

                                <div className="grid grid-cols-3 xl:grid-cols-4 gap-0.25 bg-white rounded-lg overflow-hidden">
                                    {subcategory?.products.length && subcategory?.products.map((product, index) => <Productitem key={index} product={product} />)}
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
                <div className='max-h-[calc(100vh-170px)] max-w-[18.75rem] w-full sticky top-32 hidden lg:flex flex-col'>
                    <div className='mb-2 flex w-full justify-between items-center'>
                        <h5 className='text-[#191919] font-semibold text-sm leading-5'>Sepetim</h5>
                    </div>
                    <div className='flex flex-col items-center border-2 border-brand-yellow rounded-lg px-6 py-16 text-md font-semibold bg-white w-full'>
                        <img className='w-[5.375rem]' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iODYiIHZpZXdCb3g9IjAgMCA3MiA4NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0wLjUgMjVINzAuNzc1NlY4NS4yMzQ3SDAuNVYyNVoiIGZpbGw9IiNEQkRCRkYiLz4KPHBhdGggZD0iTTIzLjA4MzggMC4zMzMwMDhINDcuOTg3TDUyLjk3NTQgNS4zODlWMjUuNDMxNkw0Ny41NzgxIDI1LjQxNzRWNS4zNzgzNEgyMy41MjQ3VjI1LjQxNzRMMTguMDI3OCAyNS40MzE2VjUuMzc4MzRMMjMuMDgzOCAwLjMzMzAwOFoiIGZpbGw9IiNEQkRCRkYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSI3MSIgaGVpZ2h0PSI4NiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K' />
                        <span className='flex flex-col justify-center items-center pt-12'>
                            <span className='mb-3 text-md leading-4 text-primary-brand-color'>Sepetiniz şu an Boş</span>
                            <p className='font-normal text-gray-storm leading-4 text-sm text-center'>Sipariş vermek için sepetinize ürün ekleyin</p>
                        </span>
                    </div>                

                </div>


            </div>

        </main>
    )
}
