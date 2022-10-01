import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adoption from "../Components/Adopta";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";

const Router =()=>{

  return(

    <BrowserRouter>

      <Header/>
      <Routes>        
        <Route path="/" element={<Hero/>}/>
        <Route path="/adopcion" element={<Adoption/>}/>
      </Routes>
      <Footer/>
      
    </BrowserRouter>

  )

}

export default Router;