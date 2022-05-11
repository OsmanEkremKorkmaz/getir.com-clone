import HeroSection from "components/Su/HeroSection"
import Campaigns from "components/Su/Campaigns"
import MobileApp from "components/MobileApp"
import Cards from "components/Su/Cards"
import { useWindowWidth } from '@react-hook/window-size'
import Favorites from "components/Su/Favorites"

function Su(){

    const windowWidth = useWindowWidth()

    return (
        <>
            {windowWidth < 768 && <Campaigns/>}
            <HeroSection/>
            {windowWidth >= 768 && <Campaigns/>}
            <div className="container mx-auto grid gap-y-6 pt-8 md:px-6">          
                <Favorites />
                <MobileApp/>
                <Cards/>
            </div>
        </>
    )
}

export default Su;