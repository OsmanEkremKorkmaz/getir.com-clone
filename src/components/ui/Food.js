export default function Food({food: {id, title, image}}) {
    return (
        <a href="#" className="flex bg-white rounded-lg flex-col items-center text-center px-1">
            <img src={image} alt={title} className=""/>
            <span className="text-xs border-t border-[#f5f5f5] w-full font-semibold py-[10px] px-[5px] text-primary-brand-color whitespace-nowrap group-hover:text-brand-color tracking-tight">{title}</span>
        </a>
    )
}