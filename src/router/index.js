import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Servicios } from "../components/Servicios/index";
import Adoption from "../components/Adopta";



const Router =()=>{

  return(

    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Servicios/>}/>
        <Route path="/adopcion" element={<Adoption/>}/>
      </Routes>


    </BrowserRouter>

  )

}

export default Router;