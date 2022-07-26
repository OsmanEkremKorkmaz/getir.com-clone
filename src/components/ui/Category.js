import { Link } from "react-router-dom";

export default function Category({category: {id, title, image}}) {
    return (
        <Link to={`kategori/${title}`} className="flex flex-col group gap-y-2 items-center text-center p-4 transition hover:bg-purple-50">
            <img src={image} alt={title} className="w-12 h-12 rounded border border-gray-200"/>
            <span className="text-sm font-semibold text-gray-700 whitespace-nowrap group-hover:text-brand-color tracking-tight">{title}</span>
        </Link>
    )
}