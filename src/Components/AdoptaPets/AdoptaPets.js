import React from "react";
import { useEffect } from "react";
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

const GetPets = () => {

  const [pet, setPet] = useState(pets);

  const handleGender = (e) => {
    const gender = e.target.value;
    if(gender === "all"){
      return setPet(pets)
    }
    const filteredPets = pets.filter((_pet)=> _pet.gender === e.target.value);
    return setPet(filteredPets)    
  }


  return (
    <Container className="section-adopta__container">

      <Grid container spacing={4}>

      <Grid item md={12} sm={12} xs={12}>
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

        {pet.length > 0 ? (
          pet.map((p, index) => (
            <Grid key={index} item md={4} sm={12} xs={12}>
              <div sx={{ maxWidth: 346 }} className="adoption__card">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={p.image}
                    alt={p.name}
                  />
                  <CardContent>
                    <h2 variant="h5" gutterBottom className="adoption__card-title">
                      {p.name.toUpperCase()}
                    </h2>
                    <div className="adoption__card-info">
                      <span>Género: {p.gender}</span>
                      <span>|</span>
                      <span>Edad: {p.age}</span>
                    </div>
                    
                  </CardContent>
                </CardActionArea>
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