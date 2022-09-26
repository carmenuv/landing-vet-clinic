import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Servicios } from "../components/Servicios/index";
import AdoptionSection from "../components/Adoption";



const Router =()=>{

  return(

    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Servicios/>}/>
        <Route path="/adopcionseccion" element={<AdoptionSection/>}/>
      </Routes>


    </BrowserRouter>

  )

}

export default Router;