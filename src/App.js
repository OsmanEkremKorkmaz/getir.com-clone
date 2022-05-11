import Header from "components/Header"
import Footer from "components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "views/MainPage"
import Buyuk from "views/Buyuk"
import Su from "views/Su";
import Carsi from "views/Carsi";
import Yemek from "views/Yemek";
import NoMatch404 from "views/NoMatch404";
import { useEffect, useState } from "react";

function App() {
  
  const [lang, setLang] = useState("tr")
  const [isLogin, setisLogin] = useState(false)


  
  useEffect(() => {
    console.log(lang)
  }, [lang])
  
  return (
    <div className="App">
      <Header lang={lang} setLang={setLang}/>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/yemek" element={<Yemek/>}/>
          <Route path="/buyuk/" element={<Buyuk/>}/>
          <Route path="/su/" element={<Su/>}/>
          <Route path="/carsi/" element={<Carsi />}/>
          <Route path="*" element={<NoMatch404 />}/>
        </Routes>
      </Router>
      <Footer lang={lang} setLang={setLang}/>
    </div>
  );
}

export default App;
