import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import GetPets from "../Components/AdoptaPets/AdoptaPets";

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