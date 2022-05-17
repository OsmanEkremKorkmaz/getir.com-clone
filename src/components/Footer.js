import Menu from "components/ui/Menu"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import { BiGlobe } from 'react-icons/bi'
import { useState } from "react"
import Language from "./modals/Language"
import { useSelector } from "react-redux"
import { language } from "language"

export default function Footer() {

    const [openLanguageModal, setOpenLanguageModal] = useState(false);
    const lang = useSelector(state => state.settings.lang)
    const langText = language[lang].footer

    const menus = [
        langText.discoverGetir,
        langText.needHelp,
        langText.becomeOurBusinessPartner
    ]

    return (
        <div className="bg-white mt-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-y-6 md:grid-cols-2 lg:grid-cols-4 pt-5 md:pt-10">
                    <section>
                        <nav className="grid gap-y-4">
                            <h6 className="text-lg text-primary-brand-color">{langText.downloadGetir.title}</h6>
                            <a href="#">
                                <img src={langText.downloadGetir.appStore} />
                            </a>
                            <a href="#">
                                <img src={langText.downloadGetir.googlePlay} />
                            </a>
                            <a href="#">
                                <img src={langText.downloadGetir.appGalary} />
                            </a>
                        </nav>
                    </section>
                    {menus.map((menu, index) => <Menu key={index} { ...menu } /> )}
                </div>
                <div className="flex flex-col md:flex-row gap-y-4 justify-between items-center border-t border-gray-100 mt-6 py-6">
                    <div className="text-[13px] text-gray-700 flex gap-x-8">
                        &copy; 2022 Getir
                        <a href="#" className="text-primary-brand-color relative before:w-[3px] before:h-[3px] before:bg-brand-color before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:rounded-full">
                            {langText.informationSocietyServices}
                        </a>
                    </div>
                    <nav className="flex gap-x-3">
                        <a href="#" className="w-8 h-8 rounded-lg text-gray-500  transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center">
                            <FaFacebook size={21}/>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-lg text-gray-500  transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center">
                            <FaTwitter size={21}/>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-lg text-gray-500  transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center">
                            <FaInstagram size={21}/>
                        </a>
                        <a onClick={() => {setOpenLanguageModal(true);}} href="#" className="h-8 px-2 text-xs gap-x-2 rounded-lg border border-gray-100 text-gray-500 transition-colors hover:border-transparent hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center">
                            <BiGlobe size={18} />
                            {(lang == "tr") ? "Türkçe (TR)" : "English (EN)"}
                        </a>
                    </nav>
                </div>
            </div>
            {openLanguageModal && <Language closeModal={setOpenLanguageModal}/>}
        </div>
    )
}