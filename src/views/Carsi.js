import HeroSection from "components/Carsi/HeroSection"
import Categories from "components/Categories"
import MobileApp from "components/MobileApp"
import Cards from "components/Cards"
import Partner from "components/Partner"
import cardsData from "api/Carsi/cards.json";
import categoryData from 'api/Carsi/categories.json';

function MainPage(){

    return (
        <>
            <HeroSection/>
            <Categories categoryData={categoryData}/>
            <div className="container mx-auto grid gap-y-6 pt-8 md:px-6">
                <MobileApp/>
                <Cards cardsData={cardsData}/>
                <Partner/>
            </div>
        </>
    )
}

export default MainPage;