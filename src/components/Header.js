import { BiGlobe } from 'react-icons/bi'
import { RiUserFill } from 'react-icons/ri'
import { HiUserAdd } from 'react-icons/hi'
import { useWindowWidth } from '@react-hook/window-size'
import { HiLocationMarker } from 'react-icons/hi'
import { IoIosArrowForward } from 'react-icons/io'
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import { useState } from 'react'
import Login from './modals/Login'
import Register from './modals/Register'
import Language from './modals/Language'
import { useSelector } from 'react-redux'
import { language } from 'language'

export default function Header() {

    const windowWidth = useWindowWidth();

    const lang = useSelector(state => state.settings.lang)

    const [active, setActive] = useState('home')

    const langText = language[lang].header

    const [openLanguageModal, setOpenLanguageModal] = useState(false);
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [openRegisterModal, setOpenRegisterModal] = useState(false);

    const activate = (isActive, path, activeStyle, nonActiveStyle) => {
        if (isActive) {
            setActive(path)
            return activeStyle
        }
        return nonActiveStyle
    }

    return (
        <>
            <div className="bg-brand-color sticky top-0 z-30 ">
                <div className="container md:mx-auto px-[6px] md:px-6 h-10 md:h-[45px] flex items-center justify-between overflow-y-hidden">
                    <nav className=''>
                        <ul className='inline-flex items-center '>
                            <li>
                                <NavLink style={(activeNav) => activate(activeNav.isActive, 'home')} to={"/"} className={(navdata) => `flex items-center p-3 md:px-5 mt-[5px] mr-0.25 ${navdata.isActive ? "bg-primary-brand-color" : "header-link-active"} hover:bg-primary-brand-color rounded-t-md  w-[54.91px] md:w-auto justify-center`}>
                                    <img className='h-[14px] md:h-4 w-auto object-cover' src={langText.left.getir} alt="Getir" shape="NORMAL"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink style={(activeNav) => activate(activeNav.isActive, 'yemek')} to={"/yemek/"} className={(navdata) => `flex items-center p-3 md:px-5 mt-[5px] mr-0.25 ${navdata.isActive ? "bg-primary-brand-color" : "header-link-active"} hover:bg-primary-brand-color rounded-t-md ${lang === "tr" ? "w-[100.41px]" : "w-[85.83px]"} md:w-auto justify-center`}>
                                    <img className='h-[14px] md:h-4 w-auto object-cover' src={langText.left.getirYemek} alt="GetirYemek" shape="NORMAL"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink style={(activeNav) => activate(activeNav.isActive, 'buyuk')} to={"/buyuk/"} className={(navdata) => `flex items-center p-3 md:px-5 mt-[5px] mr-0.25 ${navdata.isActive ? "bg-primary-brand-color" : "header-link-active"} hover:bg-primary-brand-color rounded-t-md  ${lang === "tr" ? "w-[95.16px]" : "w-[89.63px]"} md:w-auto justify-center`}>
                                    <img className='h-[14px] md:h-4 w-auto object-cover' src={langText.left.getirBuyuk} alt="GetirBüyük" shape="NORMAL"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink style={(activeNav) => activate(activeNav.isActive, 'su')} to={"/su/"} className={(navdata) => `flex items-center p-3 md:px-5 mt-[5px] mr-0.25 ${navdata.isActive ? "bg-primary-brand-color" : "header-link-active"} hover:bg-primary-brand-color rounded-t-md  ${lang === "tr" ? "w-[69.94px]" : "w-[93.13px]"} md:w-auto justify-center`}>
                                    <img className='h-[14px] md:h-4 w-auto object-cover' src={langText.left.getirSu} alt="GetirSu" shape="NORMAL"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink style={(activeNav) => activate(activeNav.isActive, 'carsi')} to={"/carsi/"} className={(navdata) => `flex items-center p-3 md:px-5 mt-[5px] mr-0.25 ${navdata.isActive ? "bg-primary-brand-color" : "header-link-active"} hover:bg-primary-brand-color rounded-t-md  ${lang === "tr" ? "w-[87.08px]" : "w-[95.44px]"} md:w-auto justify-center`}>
                                    <img className='h-[14px] md:h-4 w-auto object-cover' src={langText.left.getirCarsi} alt="GetirSu" shape="NORMAL"/>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <nav className="hidden md:flex gap-x-7 text-sm font-semibold">
                        <a onClick={() => {setOpenLanguageModal(true);}} href="#" className="flex items-center gap-x-2 font-normal text-white transition-all text-opacity-80 hover:text-opacity-100 pr-1">
                            <BiGlobe size={20} />
                            {windowWidth >= 1024 && (langText.right.language)}
                        </a>
                        <a onClick={() => {setOpenLoginModal(true);}} href="#" className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100 pr-1">
                            <RiUserFill size={20} />
                            {windowWidth >= 1024 && langText.right.login}                        
                        </a>
                        <a onClick={() => {setOpenRegisterModal(true);}} href="#" className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100 pr-1">
                            <HiUserAdd size={20} />
                            {windowWidth >= 1024 && langText.right.register}                        
                        </a>
                    </nav>
                </div>
            <div className='flex md:hidden h-16 bg-primary-brand-color items-center justify-center'>
                {active === 'home' ? 
                <img className='h-[22px] w-auto' src={langText.left.getir} alt="Getir" shape="NORMAL"/>
                : active === 'yemek' ? 
                <img className='h-[22px] w-auto' src={langText.left.getirYemek} alt="GetirYemek" shape="NORMAL"/>
                : active === 'buyuk' ? 
                <img className='h-[22px] w-auto' src={langText.left.getirBuyuk}  alt="Getir" shape="NORMAL"/>
                : active === 'su' ? 
                <img className='h-[22px] w-auto' src={langText.left.getirSu} alt="GetirSu" shape="NORMAL"/>
                : active === 'carsi' ? 
                <img className='h-[22px] w-auto' src={langText.left.getirCarsi} alt="GetirSu" shape="NORMAL"/>
                : ""}
            </div>
            </div>
            {(active === "home" || active === "buyuk" || active === "su") && <div className='container flex md:hidden mx-auto items-center h-10 px-2 justify-between'>
                <div className='flex gap-x-2 text-sm font-semibold text-gray-700'>
                    <HiLocationMarker size={18} className="text-primary-brand-color" />
                    Teslimat Adresi Belirle
                </div>
                <IoIosArrowForward size={18} className="text-primary-brand-color"/>
            </div>}
            {openLanguageModal && <Language closeModal={setOpenLanguageModal}/>}
            {openLoginModal && <Login closeModal={setOpenLoginModal} openRegisterModal={setOpenRegisterModal}/>}
            {openRegisterModal && <Register closeModal={setOpenRegisterModal} openLoginModal={setOpenLoginModal}/>}
        </>
    )
}