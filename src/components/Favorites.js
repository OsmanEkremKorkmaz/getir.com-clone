import { useState, useEffect } from "react";
import Title from "components/ui/Title";
import Products from 'api/products.json'
import Productitem from "components/ui/Productitem";

export default function Favorites() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(Products);
    }, []);

    return (
        <div>
            <Title>Favoriler</Title>
            <div className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-8 gap-0.25 bg-white rounded-lg overflow-hidden">
                {products.length && products.map((product, index) => <Productitem key={index} product={product} />)}
            </div>
        </div>
    )
}