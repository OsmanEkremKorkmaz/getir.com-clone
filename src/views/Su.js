import HeroSection from "components/Su/HeroSection"
import Campaigns from "components/Campaigns"
import MobileApp from "components/MobileApp"
import Banners from 'api/Su/banners.json';
import Cards from "components/Cards"
import { useWindowWidth } from '@react-hook/window-size'
import cardsData from "api/Su/cards.json";

function Su(){

    const windowWidth = useWindowWidth()

    return (
        <>
            {windowWidth < 768 && <Campaigns Banners={Banners}/>}
            <HeroSection/>
            {windowWidth >= 768 && <Campaigns Banners={Banners}/>}
            <div className="container mx-auto grid gap-y-6 md:px-6">
                <MobileApp/>
                <Cards cardsData={cardsData}/>
            </div>
        </>
    )
}

export default Su;