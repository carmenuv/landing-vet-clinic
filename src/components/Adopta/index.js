import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { apiDataAdoption } from "../../Service/Api";


const Adoption =()=>{
  
  const [animal, setAnimal] = useState([])

  const fetchAdoptionList = async()=>{
    const listAnimals = await apiDataAdoption();

    console.log("listAnimals", listAnimals.pets);
    setAnimal(listAnimals.pets);

  };

  useEffect(()=>{

    fetchAdoptionList();
  },[])


  return(

    <div>

      {animal.map((pet)=>(
        <div>
          
            <img src={pet.image} alt="" />
            <h1>nombre: {pet.name}</h1>
            <h2>tipo: {pet.type}</h2>
            <h4>edad: {pet.age}</h4>
          
        </div>
      ))}

    </div>

  )

}

export default Adoption;