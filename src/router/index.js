import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Servicios } from "../components/Servicios/index";
import Adoption from "../components/Adopta";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";



const Router =()=>{

  return(

    <BrowserRouter>
      <Header/>
      <Routes>        
        <Route path="/" element={<Hero/>}/>
        {/* <Route path="/servicios" element={<Servicios/>}/> */}
        <Route path="/adopcion" element={<Adoption/>}/>
      </Routes>

      <Footer/>

    </BrowserRouter>

  )

}

export default Router;