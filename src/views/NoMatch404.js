import { Link } from "react-router-dom";

function NoMatch404(){
    return (
        <div className="flex justify-center w-full">
            <div className="mt-6 flex w-full justify-between items-start pt-[50px] pl-10 overflow-hidden bg-white rounded-lg text-base font-semibold max-w-5xl">
                <div>
                    <h1 className="mt-6 mb-4 text-2xl text-black">Aradığınız sayfa bulunamadı</h1>
                    <p className="mb-10 mr-4 text-lg font-normal text-[#697488]">Böyle bir sayfa bulunamıyor. Ana Sayfa’ya dönüp başka bir şey arayabilirsiniz</p>
                    <div>
                        <Link to={"/"} className="bg-primary-brand-color mt-10 rounded-lg text-sm border-2 border-primary-brand-color text-white font-normal py-[10px] px-4">
                            Ana sayfaya dön
                        </Link>
                    </div>
                </div>
                <img className="mt-14 w-auto -mr-[20%]" src="https://getir.com/_next/static/images/notFoundCourier-2e8f3a87aa698f07073426d07ba4ad08.svg"/>
            </div>
        </div>
    )
}

export default NoMatch404;