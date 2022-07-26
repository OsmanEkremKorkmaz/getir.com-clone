import Header from "components/Header"
import Footer from "components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "views/MainPage"
import Buyuk from "views/Buyuk"
import Su from "views/Su";
import Carsi from "views/Carsi";
import Yemek from "views/Yemek";
import NoMatch404 from "views/NoMatch404";
import Category from "views/Category";
import ProductDetail from "views/ProductDetail";

function App() {
  
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/yemek" element={<Yemek/>}/>
          <Route path="/buyuk/" element={<Buyuk/>}/>
          <Route path="/su/" element={<Su/>}/>
          <Route path="/carsi/" element={<Carsi />}/>
          <Route path="/:parent/kategori/:category/" element={<Category/>}>
            <Route index={true} element={<Category/>}/>
            <Route path=":subcategory" element={<Category/>}/>
          </Route>
          <Route path="/kategori/:category/" element={<Category/>}>
            <Route index={true} element={<Category/>}/>
            <Route path=":subcategory" element={<Category/>}/>
          </Route>
          <Route path="/urun/:productTitle-:productId" element={<ProductDetail/>}/>
          <Route path="*" element={<NoMatch404 />}/>
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
