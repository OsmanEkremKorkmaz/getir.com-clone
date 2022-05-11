import { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from 'api/Su/banners.json';
import Title from "components/ui/Title"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { useWindowWidth } from '@react-hook/window-size'

export default function Campaigns() {

    const windowWidth = useWindowWidth()


    function NextBtn({ onClick }) {
        return <button className="text-brand-color absolute top-1/2 -right-6 -translate-y-1/2" onClick={onClick}><IoIosArrowForward size={22}/></button>
    }

    function PrevBtn({ onClick }) {
        return <button className="text-brand-color absolute top-1/2 -left-6 -translate-y-1/2" onClick={onClick}><IoIosArrowBack size={22} /></button>
    }
      

    const [banners, setBanners] = useState([]);

    useEffect(() => {
        setBanners(Banners)
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3500,
        cssEase: "linear",
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            },
        ]
    };

    return (
        <div className="container mx-auto md:px-6 md:py-8">
            {windowWidth >= 768 && <Title>Kampanyalar</Title>}
            <Slider {...settings} className="md:-mx-2">
                {banners.length && banners.map((banner, index) => (
                    <div key={banner.id}>
                        <picture className="block md:px-2">
                            <img src={banner.image} className="md:rounded-lg"/>
                        </picture>
                    </div>
                ))}
            </Slider>
        </div>
    )
}