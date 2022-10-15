import React from "react";
import { useState } from "react";
import {
  Container,
  Grid,
  CardMedia,
  CardContent,
  CircularProgress,
} from "@mui/material";
import { pets } from "./pets";
import PetDetail from "./PetDetail/PetDetail";
import "./AdoptaPets.css";

const GetPets = () => {
  const [pet, setPet] = useState(pets);

  const petFilter = (e) => {
    e.preventDefault();
    //capturo cada uno de los select por el id
    let select1 = document.getElementById("animal").value;
    let select2 = document.getElementById("genero").value;
    let select3 = document.getElementById("tamaño").value;
    let nuevo;
    let nuevo2;
    let nuevo3;

    // console.log(select2);

    if (select1 == "all" && select2 == "all" && select3 == "all") {
      return setPet(pets);
    } else if (select1 !== "all") {
      let filteredPets = pets.filter((_pet) => _pet.type === select1);
      setPet(filteredPets);
      if (select2 !== "all") {
        nuevo = filteredPets.filter((_pet) => _pet.gender === select2);
        setPet(nuevo);
        if (select3 !== "all") {
          nuevo2 = nuevo.filter((_pet) => _pet.size === select3);
          setPet(nuevo2);
        }
      }
    } else if (select2 !== "all") {
      let filteredPets2 = pets.filter((_pet) => _pet.gender === select2);
      setPet(filteredPets2);
      if (select3 !== "all") {
        nuevo3 = filteredPets2.filter((_pet) => _pet.size === select3);
        setPet(nuevo3);
      }
    } else if (select3 !== "all") {
      let filteredPets2 = pets.filter((_pet) => _pet.size === select3);
      setPet(filteredPets2);
    }
  };

  return (
    <Container className="section-adopta__container">
      <div className="section-adopta__form-container">
        <form onChange={petFilter} className="section-adopta__form">
          <select id="animal" className="section-adopta__form-select">
            <option value="all">Tipo</option>
            <option value="dog">Perro</option>
            <option value="cat">Gato</option>
          </select>
          <select id="genero" className="section-adopta__form-select">
            <option value="all">Género</option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
          </select>
          <select id="tamaño" className="section-adopta__form-select">
            <option value="all">Tamaño</option>
            <option value="big">Grande</option>
            <option value="medium">Mediano</option>
            <option value="small">Pequeño</option>
          </select>
        </form>
      </div>

      <Grid container spacing={4}>
        {pet.length > 0 ? (
          pet.map((mascot) => (
            <Grid key={mascot.id} item md={4} sm={12} xs={12}>
              <div sx={{ maxWidth: 346 }} className="adoption__card">
                <CardMedia
                  component="img"
                  height="200"
                  image={mascot.image}
                  alt={mascot.name}
                />
                <CardContent>
                  <h2
                    variant="h5"
                    gutterBottom
                    className="adoption__card-title"
                  >
                    {mascot.name.toUpperCase()}
                  </h2>
                  <div className="adoption__card-info">
                    <span>
                      <b>Género:</b> {mascot.gender}
                    </span>
                    <span>|</span>
                    <span>
                      <b>Edad:</b> {mascot.age}
                    </span>
                  </div>
                  <div className="adoption__card-button-margin">
                    <PetDetail
                      mascotImage={mascot.image}
                      mascotName={mascot.name}
                      mascotDescription={mascot.description}
                      mascotGender={mascot.gender}
                      mascotSize={mascot.size}
                      mascotAge={mascot.age}
                    />
                  </div>
                </CardContent>
              </div>
            </Grid>
          ))
        ) : (
          <div className="center loading">
            <CircularProgress />
            <h4>Buscando...</h4>
          </div>
        )}
      </Grid>
    </Container>
  );
};

export default GetPets;
