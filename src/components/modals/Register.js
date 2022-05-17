import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";

export default function Register({closeModal, openLoginModal}){

    const [selected, setSelected] = useState("TR");

    const phones = {
        US: '+1',
        DE: '+49',
        TR: '+90',
        IT: '+39',
        IN: '+91'
    }

    return (
        <div className="fixed inset-0 bg-[#18112db8] z-30 flex items-center justify-center">
            <div className="w-full h-full md:h-auto fixed md:!w-[446px] md:rounded-lg bg-gray-50">
                <div onClick={() => {closeModal(false)}} className="w-8 cursor-pointer h-8 top-8 right-8 absolute bg-[#f3f3f4] overflow-hidden rounded-lg inline-flex justify-center items-center">
                    <button className="p-0 inline-flex items-center justify-center">
                        <svg width={10} height={10} data-testid="icon" name="close" size="10" color="black" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path d="M31.331 0.669c-0.892-0.892-2.334-0.892-3.226 0l-12.104 12.104-12.104-12.104c-0.892-0.892-2.334-0.892-3.226 0s-0.892 2.334 0 3.226l12.104 12.104-12.104 12.104c-0.892 0.892-0.892 2.334 0 3.227s2.334 0.892 3.226 0l12.104-12.105 12.104 12.105c0.892 0.892 2.334 0.892 3.226 0s0.892-2.334 0-3.227l-12.104-12.104 12.104-12.104c0.892-0.869 0.892-2.334 0-3.226z" class="style__Path-sc-__sc-hqksj3-2 kqvXtw"></path>
                        </svg>
                    </button>
                </div>
                <h4 className="text-primary-brand-color text-center font-semibold pt-9">Kayıt Ol</h4>
                <div className="grid gap-y-3 mt-4 px-4">
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
                    <label className="flex-1 relative block group cursor-text">
                        <input required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2"></input>
                        <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 peer-focus:h-7 transition-all peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">Ad Soyad</span>
                    </label>
                    <label className="flex-1 relative block group cursor-text">
                        <input required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2"></input>
                        <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 peer-focus:h-7 transition-all peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">E-Posta</span>
                    </label>
                    <div className="mt-4">
                        <div htmlFor="register-checkbox"  className="inline-flex group relative items-center cursor-pointer mr-3 text-xs text-[#a2a2a2]">
                            <span>    
                                <input id="register-checkbox" type={"checkbox"} className="flex appearance-none m-0 cursor-pointer relative transition-all checked:!border-primary-brand-color checked:bg-primary-brand-color items-center justify-center !w-[22px] !h-[22px] border-2 p-[2px] border-[#dfdee2] rounded group-hover:border-secondary-brand-color"/>
                                <svg id="register-checkbox-tick" className="absolute left-1 top-1 md:top-[9px] opacity-0" color="#fff" width={14} height={14} size="14" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                    <path fill="currentColor" d="M31.26 4.951c0.987 0.987 0.987 2.586 0 3.573l-18.526 18.526c-0.987 0.987-2.586 0.987-3.573 0l-8.421-8.421c-0.987-0.987-0.987-2.586 0-3.573s2.586-0.987 3.573 0l6.635 6.635 16.74-16.74c0.987-0.987 2.586-0.987 3.573 0z"/>
                                </svg>
                            </span>
                            <span className="pl-3">
                                Getir’in bana özel kampanya, tanıtım ve fırsatlarından haberdar olmak istiyorum.
                            </span>
                        </div>
                        <ul className="pt-4 pr-2">                            
                            <li className="py-1 text-xs text-[#a2a2a2] before:w-[7px] before:h-[7px] before:mr-[5px] before:rounded-full before:bg-primary-brand-color before:relative before:inline-block">
                                Kayıt olmakla 
                                <a target="_blank" href="https://getir.com/yardim/kvkk/" className="ml-[3px] inline-flex text-primary-brand-color underline">
                                    Kullanım Koşulları
                                </a>
                                'nı onaylamış olursunuz.
                            </li>
                            <li className="py-1 text-xs text-[#a2a2a2] before:w-[7px] before:h-[7px] before:mr-[5px] before:rounded-full before:bg-primary-brand-color before:relative before:inline-block">
                                Kişisel verilerinize dair Aydınlatma Metni için 
                                <a target="_blank" href="https://getir.com/yardim/kullanim-kosullari/" className="ml-[3px] inline-flex text-primary-brand-color underline">
                                    tıklayınız.
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button className="mt-10 bg-primary-brand-color text-white transition-colors hover:bg-secondary-brand-color h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold">
                        Kayıt Ol
                    </button>
                </div>
                <div className="text-sm w-full flex items-center justify-center mt-4 py-4 rounded-b-lg bg-[#f5f5f5] text-gray-storm">
                    Getir'e üyeyseniz&nbsp;
                    <div onClick={() => (closeModal(false), openLoginModal(true))} className="inline-flex font-semibold ml-0 text-primary-brand-color cursor-pointer">
                        Giriş Yap
                    </div>
                </div>
            </div>
        </div>        
    )
}