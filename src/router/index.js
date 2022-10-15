import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import GetPets from "../components/AdoptaPets/AdoptaPets";

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