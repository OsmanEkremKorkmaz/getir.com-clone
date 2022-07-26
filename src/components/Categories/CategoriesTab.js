import { useEffect, useState } from 'react'
import data from 'api/MainPage/categories.json'
import { Link, useParams } from 'react-router-dom'
import { scroller } from 'react-scroll'

export default function CategoriesTab() {
    const [categories, setCategories] = useState([])
    const scroll = (element) => {
        scroller.scrollTo(element, {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -100
        })
    }
    useEffect(() => {
        setCategories(data)
    }, [])
    const params = useParams()
    console.log(params);
  return (
    <div className='flex flex-col mt-0'>
        <div className='flex overflow-x-auto max-w-[100vw] bg-secondary-brand-color'>
            {categories.map(category => (
                <Link to={`/kategori/${category.title}/${category.subCategories[0]?.title}`} className={`${category.title === params.category ? "border-b-2 border-brand-yellow" : ""} shrink-0 text-white px-3 py-2`}>{category.title}</Link>
            ))}
        </div>
        <div className='flex overflow-x-auto max-w-[100vw] p-2 bg-white border-b border-primary-light'>
            {categories.find(category => category.title === params.category)?.subCategories.map(subCategory => (
                <Link onClick={() => scroll(subCategory.title)} to={`/kategori/${params.category}/${subCategory.title}`} className={`${subCategory.title === params.subcategory ? "bg-primary-brand-color text-white" : "text-primary-brand-color"} shrink-0  border border-primary-brand-color py-1 px-2 rounded mr-2`}>{subCategory.title}</Link>
            ))}
        </div>        
    </div>
  )
}
