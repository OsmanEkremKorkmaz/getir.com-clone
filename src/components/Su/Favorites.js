import { useState, useEffect } from "react";
import Title from "components/ui/Title";
import Products from 'api/Su/products.json'
import Productitem from "components/ui/Productitem";

export default function Favorites() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(Products);
    }, []);

    return (
        <div>
            <Title>Ürünler</Title>
            <div className="grid grid-cols-3 xl:grid-cols-4 gap-0.25 bg-white rounded-lg overflow-hidden">
                {products.length && products.map((product, index) => <Productitem key={index} product={product} isWater={true}/>)}
            </div>
        </div>
    )
}