import HeroSection from "components/Carsi/HeroSection"
import Categories from "components/Carsi/Categories"
import MobileApp from "components/MobileApp"
import Cards from "components/Carsi/Cards"
import Partner from "components/Partner"

function MainPage(){

    return (
        <>
            <HeroSection/>
            <Categories/>
            <div className="container mx-auto grid gap-y-6 pt-8 md:px-6">
                <MobileApp/>
                <Cards/>
                <Partner/>
            </div>
        </>
    )
}

export default MainPage;