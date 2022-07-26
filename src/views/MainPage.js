import HeroSection from "components/MainPage/HeroSection"
import Categories from "components/Categories"
import Campaigns from "components/Campaigns"
import MobileApp from "components/MobileApp"
import Cards from "components/Cards"
import { useWindowWidth } from '@react-hook/window-size'
import Banners from 'api/MainPage/banners.json';
import cardsData from "api/MainPage/cards.json";
import categoryData from 'api/MainPage/categories.json';

function MainPage(){

    const windowWidth = useWindowWidth()

    return (
        <>
            {windowWidth < 768 && <Campaigns Banners={Banners}/>}
            <HeroSection/>
            <Categories categoryData={categoryData} />
            {windowWidth >= 768 && <Campaigns Banners={Banners}/>}
            <div className="container mx-auto grid gap-y-6 md:px-6">
                <MobileApp/>
                <Cards cardsData={cardsData}/>
            </div>
        </>
    )
}

export default MainPage;