import { useState } from "react";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import { useWindowWidth } from '@react-hook/window-size';
import { RiSearchLine } from "react-icons/ri";
import { MdLocationSearching } from "react-icons/md";

export default function HeroSection() {

    const [selected, setSelected] = useState("TR");

    const windowWidth = useWindowWidth()

    const phones = {
            US: '+1',
            DE: '+49',
            TR: '+90',
            IT: '+39',
            IN: '+91'
    }

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 0,
        autoplaySpeed: 3500,
        cssEase: "linear"
    };
    return (
        <div className="relative h-auto md:h-[600px]">
            {windowWidth >= 768 && <Slider {...settings}>
                <div className="w-full h-[600px] object-cover">
                    <video playsInline controls autoPlay loop poster="https://getir.com/_next/static/images/1-hamburger-5bd2394b457b4c9b183524ba528219df.jpg">
                        <source src="https://getir.com/videos/1-hamburger.mp4" type="video/mp4"/>
                        <source src="https://getir.com/videos/2-doner.mp4" type="video/mp4"/>
                        <source src="https://getir.com/videos/3-pide.mp4" type="video/mp4"/>
                        <source src="https://getir.com/videos/4-pizza.mp4" type="video/mp4"/>
                        <source src="https://getir.com/videos/5-kunefe.mp4" type="video/mp4"/>
                    </video>
                </div>
            </Slider>}
            <div className="md:container md:px-6 flex justify-end items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
                <div className="w-full md:w-[400px] md:rounded-lg bg-bg-gray p-6">
                    <h4 className="text-primary-brand-color text-center font-semibold mb-4">Adresine getiren restoranları gör</h4>
                    <div className="flex items-center py-3 pl-4 pr-3 rounded border-2 border-[#DFDEE2] text-sm relative pointer-events-none">
                        <div className="min-w-[24px] min-h-[24px] inline-flex items-center text-primary-brand-color">
                            <RiSearchLine fill="currentColor" size={17} width={15} height={15}/>
                        </div>
                        <input className="border-0 ml-2 h-auto w-full relative bg-transparent placeholder:text-gray-storm" placeholder="Örn. Etiler mh."></input>
                        <div className="border-0 pointer-events-auto">
                            <button className="py-[7px] px-[10px] inline-flex items-center whitespace-nowrap font-semibold text-primary-brand-color rounded-lg bg-[#f3f0fe] border-0">
                                <MdLocationSearching fill="currentColor" size={18} width={16} height={16}/>
                                <span className="ml-1">
                                    Konumumu Bul
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="w-full mt-6 mb-[18px] flex justify-center relative text-center">
                        <span className="px-3 text-sm font-semibold text-gray-storm !bg-bg-gray before:w-full before:h-[2px] before:!bg-[#f3f0fe] before:absolute hero-section-or before:left-1/2 z-10 before:translate-y-0.5 before:translate-x-0.5">
                            veya
                        </span>
                    </div>
                    <h4 className="text-primary-brand-color text-center font-semibold mb-4">Giriş yap veya kayıt ol</h4>
                    <div className="grid gap-y-3">
                        <div className="flex gap-x-2">
                            <ReactFlagsSelect
                                countries={Object.keys(phones)}
                                customLabels={phones}
                                onSelect={code => setSelected(code)}
                                selected={selected}
                                className="flag-select"
                                />
                            <label className="flex-1 relative block group cursor-text">
                                <input required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2"></input>
                                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 peer-focus:h-7 transition-all peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">Telefon Numarası</span>
                            </label>
                        </div>
                        <button className="bg-brand-yellow text-primary-brand-color transition-colors hover:bg-secondary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold">
                            Telefon numarası ile devam et
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}