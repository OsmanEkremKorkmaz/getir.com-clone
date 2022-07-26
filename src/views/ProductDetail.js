import { useParams } from "react-router-dom";
import categories from "api/MainPage/categories";
import { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import { useSelector } from "react-redux";
import Login from "components/modals/Login";

export default function ProductDetail() {
  const { productTitle, productId } = useParams();
  const [product, setProduct] = useState(null);
  const user = useSelector(state => state.settings.user);
  
  useEffect(() => {
    categories.forEach(category => {
      category.subCategories.forEach(subCategory => {
        subCategory.products.forEach(product => {
          if (Number(product.id) === Number(productId) && product.title === productTitle) {
            setProduct(product);
            return null
          }
        });
      }
      );
    }
    );
  }, [productTitle, productId]);
  const [openLoginModal, setOpenLoginModal] = useState(false);
    const [openRegisterModal, setOpenRegisterModal] = useState(false);

  const addToCart = () => {
    if(user){
        console.log("sepete eklendi")
    } else {
        setOpenLoginModal(true)
    }
}
  
  const [activeTab, setActiveTab] = useState(false);
  useEffect(() => {
    if (product) {
      setActiveTab(product?.desc[0]?.title);
    }
  }, [product]);
  console.log(activeTab);
  console.log(product?.desc[0]?.title);
  return (
    <div className="my-8 mx-6 p-8 bg-white flex flex-col lg:flex-row lg:justify-center gap-x-6">
      <div className="lg:hidden mb-4 lg:mb-0">
            <div className="flex flex-col md:flex-row justify-between items-start w-full">
              <div className="flex flex-col w-[70%]">
                <h2 className="text-[#0e0e0e] whitespace-nowrap leading-8 font-semibold text-2xl">
                  {product?.longTitle}
                </h2>
                <span className="mt-1 text-gray-storm leading-[1.125rem] text-sm">
                  {product?.alt}
                </span>
                
              </div>
              <button className="inline-flex mt-5  shrink-0 md:mt-[0.375rem] items-center font-semibold">
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
            <div className="mt-5">
              <span className="text-primary-brand-color text-xl font-semibold leading-7">{product?.price}</span>
            </div>
      </div>
      <div className="mx-auto mb-4 lg:mb-0 lg:mx-0">
        <div className="h-auto w-auto lg:h-[25rem] lg:w-[25rem] border-2 mx-auto border-primary-light px-2 rounded-lg ">
          <img src={product?.image[0]} alt={product?.title} className=" w-full h-full flex items-center justify-center"/>

        </div>
        <div className="grid mt-4 gap-2 grid-cols-[repeat(auto-fill,60px)]">
          {product?.image.map((image, index) => (
            <button className="border-2 border-primary-brand-color p-[0.125rem] rounded-md">
              <img src={image} alt={product?.title} className="w-[3.25rem] h-[3.25rem]" key={index}/>
            </button>
          ))}
        </div>

      </div>
      <div className="flex flex-col gap-y-6 w-full">
          <div className="hidden lg:block">
            <div className="flex justify-between items-start w-full">
              <div className="flex flex-col w-[70%]">
                <h2 className="text-[#0e0e0e] whitespace-nowrap leading-8 font-semibold text-2xl">
                  {product?.longTitle}
                </h2>
                <span className="mt-1 text-gray-storm leading-[1.125rem] text-sm">
                  {product?.alt}
                </span>
                
              </div>
              <button className="inline-flex shrink-0 mt-[0.375rem] items-center font-semibold">
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
            <div className="mt-5">
              <span className="text-primary-brand-color text-xl font-semibold leading-7">{product?.price}</span>
            </div>
          </div>
          <div className="flex h-12 w-full">
            <button onClick={addToCart} className="flex items-center w-full lg:w-auto justify-center font-semibold h-full px-12 leading-[1.1875rem] rounded-lg bg-primary-brand-color border-2 border-primary-brand-color text-white">
              Sepete Ekle
            </button>
          </div>
          <div className="md:block hidden">
              {
                product?.desc?.length ? (

                <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <div className="flex">

                      {product?.desc.map((desc, index) => (
                      <div onClick={() => setActiveTab(desc.title)} className={`shrink-0 cursor-pointer z-[3] border-2 ${desc.title === activeTab ? "border-primary-light rounded-t-lg border-b-0 text-primary-brand-color bg-white " : "text-gray-storm border-transparent"} p-4 text-center font-semibold leading-5`}>
                        {desc.title}
                      </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-2 rounded-b-lg rounded-tr-lg border-primary-light -mt-[0.125rem] p-6 pt-5 leading-[1.375rem]">                    
                        <div className="text-sm text-[#191919]">{product?.desc?.find(desc => desc.title === activeTab)?.content}</div>
                  </div>
                </div>
                ) : null
              }

          </div>
          <div className="block md:hidden">
              {
                product?.desc?.length ? (

                <div className="flex flex-col  mb-4 border-2 border-primary-light rounded-md">

                      {product?.desc.map((desc, index) => (
                        <>
                        <div onClick={() => setActiveTab(prev => prev===desc.title ? false : desc.title)} className={`shrink-0 z-[3] cursor-pointer flex w-full items-center ${index === product?.desc?.length -1 && activeTab !== desc.title ? "border-b-0" : "border-b-2"  } justify-between text-primary-brand-color text-[0.8125rem] border-primary-light  border-0  px-4 py-3 text-center font-semibold leading-5`}>
                          <div className="text-[0.8125rem] font-semibold leading-[1.125rem]">{desc.title}</div>
                          <div className="border border-primary-light rounded-full">
                            <div className="min-w-[1.5rem] min-h-[1.5rem] flex items-center justify-center bg-transparent text-primary-brand-color">
                              <svg className={`w-[0.625rem] h-[0.625rem] transition-transform duration-500 ${activeTab === desc.title ? "rotate-180" : "rotate-0"}`} data-testid="icon" name="chevron-down" size="10" color="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="M28.084 7.516l-12.096 12.119-12.096-12.096c-0.892-0.892-2.332-0.892-3.224 0s-0.892 2.332 0 3.224l13.719 13.719c0.892 0.892 2.332 0.892 3.224 0l13.719-13.719c0.892-0.892 0.892-2.332 0-3.224-0.892-0.915-2.355-0.915-3.247-0.023z"></path></svg>
                            </div>
                          </div>
                        </div>
                          <Collapse isOpened={activeTab === desc.title}>
                            <div className={`text-[0.75rem] font-normal p-4 text-[#191919] ${index === product?.desc?.length -1 ? "border-b-0" : "border-b-2"  } border-primary-light`}>{desc.content}</div>
                          </Collapse>
                        </>
                      ))}
                </div>
                ) : null
              }

          </div>
      </div>
      {openLoginModal && <Login closeModal={setOpenLoginModal} openRegisterModal={setOpenRegisterModal}/>}
    </div>
  )
}
