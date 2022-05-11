import { useEffect, useState } from "react";
import categoryData from 'api/Carsi/categories.json';
import Category from "components/ui/Category";
import Title from "components/ui/Title";

export default function Categories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(categoryData)
    }, [])

    return (
        <div className="bg-white py-6">
            <div className="container md:px-6 mx-auto">
                <Title>İşletme Kategorileri</Title>
                <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10">
                    {/* {!categories.length && "yükleniyor..."} */}
                    {categories && categories.map((category, index) => <Category key={index} category={category}/>)}
                </div>
            </div>            
        </div>
    )
}