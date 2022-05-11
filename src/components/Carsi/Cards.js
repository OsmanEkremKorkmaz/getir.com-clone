import { useState, useEffect } from "react";
import cardsData from "api/Carsi/cards.json";

export default function Cards() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(cardsData);
    }, [])

    return (
        <div className="grid md:grid-cols-3 px-4 md:px-0 gap-4">
            {cards.length && cards.map(card => (
                <div className="bg-white p-14 rounded-lg shadow-sm flex flex-col items-center text-center">
                    <img className="w-[150px] h-[150px] mb-6" src={card.image} />
                    <h6 className="text-primary-brand-color font-semibold text-lg">{card.title}</h6>
                    <p className="mt-2 text-sm text-gray-700">{card.description}</p>
                </div>
            ))}
        </div>
    )
}