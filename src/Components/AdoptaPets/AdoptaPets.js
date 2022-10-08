import React from "react";
import { useState } from "react";
import {
  Container,
  Grid,
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Card,
  CardMedia,
  CardContent, CircularProgress, CardActionArea, Typography, Button
} from "@mui/material";

import { Link } from "react-router-dom";
import './AdoptaPets.css'
import { pets } from "./pets";
import PetDetail from "./PetDetail/PetDetail";

const GetPets = () => {

  const [pet, setPet] = useState(pets);

  const handleType = (e) => {

    const value = e.target.value;

    if(value === "all"){
      return setPet(pets)
    }
    // const filteredPets = pets.filter((_pet)=> _pet.gender === e.target.value);
    const filteredPets = pets.filter((_pet)=> _pet.type === value);
    return setPet(filteredPets)
  }

  const handleGender = (e) => {

    const value = e.target.value;

    if(value === "all"){
      return setPet(pets)
    }
    const filteredPets = pets.filter((_pet)=> _pet.gender === value);
    return setPet(filteredPets)
  }

  const handleSize = (e) => {

    const value = e.target.value;

    if(value === "all"){
      return setPet(pets)
    }
    const filteredPets = pets.filter((_pet)=> _pet.size === value);
    return setPet(filteredPets)
  }


  return (
    <Container className="section-adopta__container">

      <Grid container spacing={4}>

      <Grid item md={4} sm={4} xs={12}>
        <Grid>
          <FormControl fullWidth variant="filled">
            <InputLabel>Busca por tipo de mascota</InputLabel>
            <Select label="Busca por tipo" onChange={handleType}>
              <MenuItem value="all">Todos</MenuItem>
              <MenuItem value="dog">Perro</MenuItem>
              <MenuItem value="cat">Gato</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item md={4} sm={4} xs={12}>
        <Grid>
          <FormControl fullWidth variant="filled">
            <InputLabel>Busca por género</InputLabel>
            <Select label="Busca por género" onChange={handleGender}>
              <MenuItem value="all">Todos</MenuItem>
              <MenuItem value="male">Masculino</MenuItem>
              <MenuItem value="female">Femenino</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item md={4} sm={4} xs={12}>
        <Grid>
          <FormControl fullWidth variant="filled">
            <InputLabel>Busca por tamaño</InputLabel>
            <Select label="Busca por tamaño" onChange={handleSize}>
              <MenuItem value="all">Todos</MenuItem>
              <MenuItem value="big">Grande</MenuItem>
              <MenuItem value="medium">Mediano</MenuItem>
              <MenuItem value="small">Pequeño</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

        {pet.length > 0 ? (
          pet.map((mascot, index) => (
            <Grid key={index} item md={4} sm={12} xs={12}>
              <div sx={{ maxWidth: 346 }} className="adoption__card">
                
                  <CardMedia
                    component="img"
                    height="200"
                    image={mascot.image}
                    alt={mascot.name}
                  />
                  <CardContent>
                    <h2 variant="h5" gutterBottom className="adoption__card-title">
                      {mascot.name.toUpperCase()}
                    </h2>
                    <div className="adoption__card-info">
                      <span>Género: {mascot.gender}</span>
                      <span>|</span>
                      <span>Edad: {mascot.age}</span>
                    </div>
                    <div className="adoption__card-button-margin">
                      <PetDetail mascotImage={mascot.image} mascotName={mascot.name} mascotDescription={mascot.description} mascotGender={mascot.gender} mascotSize={mascot.size} mascotAge={mascot.age}/>
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