import { useState, useEffect } from "react";
import Slider from "react-slick";
import FoodData from 'api/Yemek/foods.json';
import Title from "components/ui/Title"
import Food from "components/ui/Food";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { useWindowWidth } from '@react-hook/window-size'

export default function Foods() {

    const windowWidth = useWindowWidth()


    function NextBtn({ onClick }) {
        return <button className="text-primary-brand-color absolute top-1/2 -right-6 -translate-y-1/2" onClick={onClick}><IoIosArrowForward size={22}/></button>
    }

    function PrevBtn({ onClick }) {
        return <button className="text-primary-brand-color absolute top-1/2 -left-6 -translate-y-1/2" onClick={onClick}><IoIosArrowBack size={22} /></button>
    }
      

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        setFoods(FoodData)
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 200,
        slidesToShow: 8,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 3500,
        cssEase: "linear",
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    arrows: false
                }
            },
        ]
    };

    return (
        <div className="container mx-auto md:pt-8 mb-3 md:px-6">
            {windowWidth >= 768 && <Title>Mutfaklar</Title>}
            <Slider {...settings} className="md:-mx-2">
                {foods.length && foods.map((food, index) => (
                    <div key={index} className="px-2">                        
                        <Food  food={food}/>
                    </div>
                ))}
            </Slider>
        </div>
    )
}