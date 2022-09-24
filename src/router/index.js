import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Servicios } from "../components/Servicios/index";



const Router =()=>{

  return(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Servicios/>}/>
      </Routes>

    </BrowserRouter>

  )

}

export default Router;