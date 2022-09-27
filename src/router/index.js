import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Servicios } from "../components/Servicios/index";
// import Adoption from "../components/Adopta";
// import { Testimonios } from "../components/Testimonios/index";
import { Equipo } from "../components/Equipo/index";
import { Testimonios } from "../components/Testimonios";



const Router =()=>{

  return(

    <BrowserRouter>
    
      <Routes>
        {/* <Route path="/" element={<Servicios/>}/> */}
        {/* <Route path="/" element={<Testimonios/>}/> */}
        <Route path="/equipo" element={<Equipo/>}/>
        <Route path="/testimonios" element={<Testimonios/>}/>
        {/* <Route path="/adopcion" element={<Adoption/>}/> */}
      </Routes>


    </BrowserRouter>

  )

}

export default Router;