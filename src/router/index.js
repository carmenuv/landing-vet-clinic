import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Servicios } from "../components/Servicios/index";
// import Adoption from "../components/Adopta";
// import { Testimonios } from "../components/Testimonios/index";
import { Equipo } from "../components/Equipo/index";



const Router =()=>{

  return(

    <BrowserRouter>
    
      <Routes>
        {/* <Route path="/" element={<Servicios/>}/> */}
        {/* <Route path="/" element={<Testimonios/>}/> */}
        <Route path="/" element={<Equipo/>}/>
        {/* <Route path="/adopcion" element={<Adoption/>}/> */}
      </Routes>


    </BrowserRouter>

  )

}

export default Router;