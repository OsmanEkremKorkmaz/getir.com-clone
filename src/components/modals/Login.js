import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";

export default function Login({closeModal, openRegisterModal}){

    const [selected, setSelected] = useState("TR");

    const phones = {
        US: '+1',
        DE: '+49',
        TR: '+90',
        IT: '+39',
        IN: '+91'
    }

    return (
        <div className="fixed inset-0 bg-[#18112db8] z-30 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full md:h-auto fixed md:!w-[446px] md:rounded-lg bg-gray-50">
                <div onClick={() => {closeModal(false)}} className="w-8 cursor-pointer h-8 top-8 right-8 absolute bg-[#f3f3f4] overflow-hidden rounded-lg inline-flex justify-center items-center">
                    <button className="p-0 inline-flex items-center justify-center">
                        <svg width={10} height={10} data-testid="icon" name="close" size="10" color="black" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path d="M31.331 0.669c-0.892-0.892-2.334-0.892-3.226 0l-12.104 12.104-12.104-12.104c-0.892-0.892-2.334-0.892-3.226 0s-0.892 2.334 0 3.226l12.104 12.104-12.104 12.104c-0.892 0.892-0.892 2.334 0 3.227s2.334 0.892 3.226 0l12.104-12.105 12.104 12.105c0.892 0.892 2.334 0.892 3.226 0s0.892-2.334 0-3.227l-12.104-12.104 12.104-12.104c0.892-0.869 0.892-2.334 0-3.226z"></path>
                        </svg>
                    </button>
                </div>
                <h4 className="text-primary-brand-color text-center font-semibold pt-9">Giriş yap veya kayıt ol</h4>
                <div className="grid gap-y-3 px-9 py-8">
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
                    <div className="mt-1 text-xs text-[#a2a2a2]">
                        Kişisel verilerinize dair Aydınlatma Metni için 
                        <a target="_blank" href="https://getir.com/yardim/kvkk/" className="ml-[3px] inline-flex text-primary-brand-color underline font-semibold">
                            tıklayınız.
                        </a>
                    </div>
                </div>
                <div className="text-sm flex items-center justify-center py-4 rounded-b-lg bg-[#f5f5f5] text-gray-storm">
                    Hala kayıt olmadınız mı?
                    <div onClick={() => (closeModal(false), openRegisterModal(true))} className="inline-flex font-semibold ml-0 text-primary-brand-color cursor-pointer">
                        Kayıt Ol
                    </div>
                </div>
            </div>
        </div>
    )
}