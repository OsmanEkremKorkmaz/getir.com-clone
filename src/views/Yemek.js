import HeroSection from "components/Yemek/HeroSection"
import Cards from "components/Cards"
import Foods from "components/Yemek/Foods"
import PartnerRestaurant from "components/PartnerRestaurant"

import cardsData from "api/Yemek/cards.json";

function MainPage(){

    return (
        <>
            <HeroSection/>
            <Foods />
            <div className="container mx-auto grid gap-y-3 md:px-6">
                <Cards cardsData={cardsData}/>
                <PartnerRestaurant/>
            </div>
        </>
    )
}

export default MainPage;