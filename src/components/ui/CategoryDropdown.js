import { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import { Link, useParams } from "react-router-dom";
import { scroller } from "react-scroll";

export default function CategoryDropdown({category}) {
    const params = useParams()
    // const isOpen = params.category === category.title
    const [isOpen, setIsOpen] = useState(params.category === category.title)
    const [selected, setSelected] = useState(params.subcategory || category.subCategories[0]?.title);
    useEffect(() => {
        setIsOpen(params.category === category.title)
    }, [params.category, category.title])
    useEffect(() => {
        if(params.subcategory) {
            setSelected(params.subcategory)
        }
    }, [params.subcategory, selected])
    useEffect(() => {
        console.log(isOpen);
    }, [isOpen])
    const scroll = (element) => {
        scroller.scrollTo(element, {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -114
        })
    }
    const handleClick = (title) => {
        setSelected(title || null)
        scroll(title)
    }
    
  return (
    <>
        <Link to={`/kategori/${category.title}/${category.subCategories[0]?.title}`} onClick={() => {setIsOpen(prev => !prev)}} className={`flex items-center w-full cursor-pointer ${isOpen ? "bg-primary-light" : ""}`}>
            <button className='px-3 py-1 w-full flex text-left items-center'>
                <img src={category.image} alt={category.title} className="w-8 h-8 mr-4 rounded border border-gray-200"/>
                <div>
                    <span className='text-[#191919] font-semibold leading-[1.125rem] text-[0.8125rem]'>
                        {category.title}
                    </span>
                </div>
                <div className={`ml-auto flex justify-center items-center ${isOpen ? "text-primary-brand-color" : "text-[#a1a1a1]"} min-w-[24px] min-h-[24px]`}>
                    <svg className={`w-[0.625rem] h-[0.625rem] ${isOpen ? "rotate-180" : ""} transition-transform duration-300`} data-testid="icon" name="chevron-down" size="10" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill='currentColor' d="M28.084 7.516l-12.096 12.119-12.096-12.096c-0.892-0.892-2.332-0.892-3.224 0s-0.892 2.332 0 3.224l13.719 13.719c0.892 0.892 2.332 0.892 3.224 0l13.719-13.719c0.892-0.892 0.892-2.332 0-3.224-0.892-0.915-2.355-0.915-3.247-0.023z"></path></svg>
                </div>
            </button>                                                
        </Link>
            <Collapse isOpened={isOpen}>
                <div className='flex flex-col w-full'>
                    {category.subCategories.map(subcategory => (
                        <Link onClick={() => handleClick(subcategory.title)} to={`/kategori/${category.title}/${subcategory.title}`} key={subcategory.id} className={`flex ${selected === subcategory.title ? "bg-white" : "bg-[#fbfbfb]"} items-center w-full cursor-pointer`}>
                            <button className='pl-[3.75rem] pr-3 min-h-8 py-1 w-full flex text-left items-center'>
                                <div>
                                    <span className='text-[#191919] font-semibold leading-[1.125rem] text-[0.8125rem]'>
                                        {subcategory.title}
                                    </span>
                                </div>
                                <div className={`ml-auto ${selected === subcategory.title ? "visible" : "hidden"} text-primary-brand-color flex justify-center items-center  min-w-[24px] min-h-[24px]`}>
                                    <svg className='w-[0.625rem] h-[0.625rem] -rotate-90 transition-transform duration-300 ' data-testid="icon" name="chevron-down" size="10" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill='currentColor' d="M28.084 7.516l-12.096 12.119-12.096-12.096c-0.892-0.892-2.332-0.892-3.224 0s-0.892 2.332 0 3.224l13.719 13.719c0.892 0.892 2.332 0.892 3.224 0l13.719-13.719c0.892-0.892 0.892-2.332 0-3.224-0.892-0.915-2.355-0.915-3.247-0.023z"></path></svg>
                                </div>
                            </button>
                        </Link>
                    ))}
                </div>
            </Collapse>
    </>
  )
}

