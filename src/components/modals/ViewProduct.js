import { useWindowWidth } from '@react-hook/window-size'

export default function ViewProduct({closeModal, product}){    

    const windowWidth = useWindowWidth()

    return (
        <div className="fixed inset-0 bg-[#18112db8] z-30 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full md:h-auto fixed md:!w-[540px] md:rounded-lg bg-white">
                <div onClick={() => {closeModal(false)}} className="w-8 cursor-pointer h-8 top-4 right-4 absolute bg-[#f3f3f4] overflow-hidden rounded-lg inline-flex justify-center items-center">
                    <button className="p-0 inline-flex items-center justify-center">
                        <svg width={10} height={10} data-testid="icon" name="close" size="10" color="black" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path d="M31.331 0.669c-0.892-0.892-2.334-0.892-3.226 0l-12.104 12.104-12.104-12.104c-0.892-0.892-2.334-0.892-3.226 0s-0.892 2.334 0 3.226l12.104 12.104-12.104 12.104c-0.892 0.892-0.892 2.334 0 3.227s2.334 0.892 3.226 0l12.104-12.105 12.104 12.105c0.892 0.892 2.334 0.892 3.226 0s0.892-2.334 0-3.227l-12.104-12.104 12.104-12.104c0.892-0.869 0.892-2.334 0-3.226z" class="style__Path-sc-__sc-hqksj3-2 kqvXtw"></path>
                        </svg>
                    </button>
                </div>
                <div className="p-[20px] border-b justify-start flex border-[#f5f5f5]">
                    <button className="inline-flex items-center font-semibold">
                        <div className="mr-2 flex items-center">
                            <div className="min-w-[24px] inline-flex items-center absolute justify-center">
                                <svg width={18} height={18} name="heart" size="18" color="rgba(0,0,0,0.2)" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                    <path fill="currentColor" d="M29.358 4.507c-0.839-0.839-1.845-1.51-2.95-1.971s-2.279-0.685-3.481-0.685c-1.188 0-2.377 0.238-3.481 0.685-1.104 0.461-2.111 1.132-2.95 1.971l-0.489 0.503-0.489-0.489c-1.706-1.706-4.012-2.656-6.431-2.656-2.405 0-4.725 0.951-6.431 2.656s-2.656 4.012-2.656 6.431c0 2.418 0.951 4.725 2.656 6.431l12.358 12.358c0.545 0.545 1.426 0.545 1.971 0l12.358-12.358c0.839-0.839 1.51-1.845 1.971-2.95s0.685-2.279 0.685-3.481c0-1.202-0.238-2.377-0.685-3.481-0.447-1.118-1.119-2.111-1.957-2.964zM28.743 13.342c-0.322 0.769-0.783 1.454-1.37 2.041l-11.366 11.38-11.366-11.366c-1.174-1.174-1.845-2.782-1.845-4.446s0.657-3.271 1.845-4.446c1.174-1.174 2.782-1.845 4.446-1.845s3.271 0.657 4.446 1.845l1.482 1.482c0.545 0.545 1.426 0.545 1.971 0l1.482-1.482c0.587-0.587 1.272-1.049 2.041-1.37s1.58-0.475 2.405-0.475c0.825 0 1.649 0.168 2.404 0.475s1.454 0.783 2.041 1.37 1.049 1.272 1.37 2.041c0.322 0.769 0.475 1.58 0.475 2.405s-0.14 1.636-0.461 2.39z"/>
                                </svg>
                            </div>
                            <div className="min-w-[24px] inline-flex items-center justify-center">
                                <svg width={18} height={18} name="heart-filled" size="18" color="rgba(0,0,0,.04)" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                    <path fill="currentColor" d="M29.358 4.514c-0.839-0.839-1.845-1.51-2.95-1.971s-2.279-0.685-3.481-0.685c-1.202 0-2.377 0.238-3.481 0.685-1.104 0.461-2.111 1.132-2.95 1.971l-0.489 0.489-0.489-0.489c-1.706-1.706-4.012-2.656-6.431-2.656s-4.725 0.951-6.431 2.656c-1.706 1.706-2.656 4.012-2.656 6.431s0.951 4.725 2.656 6.431l12.358 12.358c0.545 0.545 1.426 0.545 1.971 0l12.358-12.358c0.839-0.839 1.51-1.845 1.971-2.95s0.685-2.279 0.685-3.481c0-1.202-0.238-2.377-0.685-3.481s-1.118-2.097-1.957-2.95z" />
                                </svg>
                            </div>
                        </div>
                        <span className="text-gray-storm text-sm">Favorilere Ekle</span>
                    </button>                    
                </div>
                <div className="flex flex-col max-h-[77vh] overflow-y-auto py-4">
                    <div className="w-full flex justify-center items-center">
                        <img className="w-[360px] h-[360px]" src={product.image}/>
                    </div>
                    {windowWidth < 768 && 
                        <div className='my-4 mx-auto'>
                            <div className="flex items-center rounded-lg overflow-hidden border border-black/8">
                                <button className="flex items-center justify-center text-[#a2a2a2] h-8 w-8 rounded-r-none bg-white">
                                    <svg width={10} height={10} data-testid="icon" name="minus" size="10" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                        <path fill="currentColor" d="M2 18h28c1.1 0 2-0.9 2-2s-0.9-2-2-2h-28c-1.1 0-2 0.9-2 2s0.9 2 2 2z" />
                                    </svg>
                                </button>
                                <div className="flex items-center justify-center w-8 h-8 text-white bg-primary-brand-color">
                                    1
                                </div>
                                <button className="flex items-center justify-center text-primary-brand-color h-8 w-8 rounded-l-none bg-white">
                                    <svg width={10} height={10} data-testid="icon" name="minus" size="10" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                        <path fill="currentColor" d="M16 32c1.1 0 2-0.9 2-2v-12h12c1.1 0 2-0.9 2-2s-0.9-2-2-2h-12v-12c0-1.1-0.9-2-2-2s-2 0.9-2 2v12h-12c-1.1 0-2 0.9-2 2s0.9 2 2 2h12v12c0 1.1 0.9 2 2 2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    }
                    <div className="px-8 pt-8 pb-4 mt-4 border-t text-left border-[#f5f5f5]">
                        <h3 className="text-primary-brand-color font-semibold text-lg mb-2">{product.longTitle}</h3>
                        <span className="text-sm text-gray-storm font-normal">{product.alt}</span>
                        <ol className="pt-2 font-normal text-black">
                            {product.desc.length && product.desc.map((desc, index) => (
                                <li key={index} className={`py-1 ${index < product.desc.length -1 ? "border-b" : ""} border-[#f3f0fe]`}>
                                    {desc}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between py-5 px-6 rounded-b-lg bg-white border-t border-[#f5f5f5]">
                    {windowWidth >= 768 && <div className="flex items-center rounded-lg overflow-hidden border border-black/8">
                        <button className="flex items-center justify-center text-[#a2a2a2] h-8 w-8 rounded-r-none bg-white">
                            <svg width={10} height={10} data-testid="icon" name="minus" size="10" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <path fill="currentColor" d="M2 18h28c1.1 0 2-0.9 2-2s-0.9-2-2-2h-28c-1.1 0-2 0.9-2 2s0.9 2 2 2z" />
                            </svg>
                        </button>
                        <div className="flex items-center justify-center w-8 h-8 text-white bg-primary-brand-color">
                            1
                        </div>
                        <button className="flex items-center justify-center text-primary-brand-color h-8 w-8 rounded-l-none bg-white">
                            <svg width={10} height={10} data-testid="icon" name="minus" size="10" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <path fill="currentColor" d="M16 32c1.1 0 2-0.9 2-2v-12h12c1.1 0 2-0.9 2-2s-0.9-2-2-2h-12v-12c0-1.1-0.9-2-2-2s-2 0.9-2 2v12h-12c-1.1 0-2 0.9-2 2s0.9 2 2 2h12v12c0 1.1 0.9 2 2 2z" />
                            </svg>
                        </button>
                    </div>}
                    <div className="inline-flex md:w-auto w-full justify-between rounded-lg bg-primary-brand-color border-2 border-primary-brand-color text-white">
                        <button className="py-[15px] px-10 font-semibold">Sepete Ekle</button>
                        <div className="text-primary-brand-color bg-white inline-flex items-center justify-center py-[14px] px-4 rounded-r">{product.price}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}