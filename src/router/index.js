import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header.js";
import Footer from "../components/footer/Footer.js";
import Hero from "../components/hero/Hero.js";
import GetPets from "../components/adoptaPets/AdoptaPets.js";

const Router =()=>{

  return(

    <BrowserRouter>

      <Header/>
      <Routes>        
        <Route path="/" element={<Hero/>}/>
        <Route path="/adopta" element={<GetPets/>}/>
      </Routes>
      <Footer/>
      
    </BrowserRouter>

  )

}

export default Router;