import HeroSection from "components/MainPage/HeroSection"
import Categories from "components/MainPage/Categories"
import Campaigns from "components/MainPage/Campaigns"
import Favorites from "components/MainPage/Favorites"
import MobileApp from "components/MobileApp"
import Cards from "components/MainPage/Cards"
import { useWindowWidth } from '@react-hook/window-size'

function MainPage(){

    const windowWidth = useWindowWidth()

    return (
        <>
            {windowWidth < 768 && <Campaigns/>}
            <HeroSection/>
            <Categories/>
            {windowWidth >= 768 && <Campaigns/>}
            <div className="container mx-auto grid gap-y-6 pt-8 md:px-6">          
                <Favorites/>
                <MobileApp/>
                <Cards/>
            </div>
        </>
    )
}

export default MainPage;