import HeroSection from "components/Yemek/HeroSection"
import Cards from "components/Yemek/Cards"
import Foods from "components/Yemek/Foods"
import PartnerRestaurant from "components/PartnerRestaurant"

function MainPage(){

    return (
        <>
            <HeroSection/>
            <Foods />
            <div className="container mx-auto grid gap-y-3 md:px-6">
                <Cards/>
                <PartnerRestaurant/>
            </div>
        </>
    )
}

export default MainPage;