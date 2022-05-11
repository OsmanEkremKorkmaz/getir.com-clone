import HeroSection from "components/Yemek/HeroSection"
import Cards from "components/Yemek/Cards"
import Foods from "components/Yemek/Foods"
import PartnerRestaurant from "components/PartnerRestaurant"

function MainPage(){

    return (
        <>
            <HeroSection/>
            <div className="container mx-auto grid gap-y-3 md:px-6">
                <Foods />
                <Cards/>
                <PartnerRestaurant/>
            </div>
        </>
    )
}

export default MainPage;