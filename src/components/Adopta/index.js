import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { apiDataAdoption } from "../../Service/Api";
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
  CardContent, CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";

const Adoption = () => {

  const [animal, setAnimal] = useState([])

  const fetchAdoptionList = async () => {
    const listAnimals = await apiDataAdoption();

    console.log("listAnimals", listAnimals.pets);
    setAnimal(listAnimals.pets);

  };

  useEffect(() => {

    fetchAdoptionList();
  }, [])


  return (

    <Container>
      <Grid container spacing={3} mt={5}>
        <Grid item md={6}>
          <TextField

            label="Busca tu mascota..."
            fullWidth
          />
        </Grid>
        <Grid item md={6}>
          <FormControl fullWidth>
            <InputLabel>Filter by Animal</InputLabel>
            <Select
              label="Filtra por Region"
              value={animal} >

              <MenuItem value="all">raza</MenuItem>
              <MenuItem value="Africa">edad</MenuItem>
              <MenuItem value="Americas">tamaño</MenuItem>

            </Select>
          </FormControl>
        </Grid>

        {animal.length > 0 ? (
          animal.map((pet) => (
            <Grid item md={3} xs={12}>
              <Link to={`/adopcion/${pet.name}`}>
                <Card  ClassName="card">
                  <CardMedia
                    component="img"
                    height={200}
                    image={pet.image}
                  />
                  <CardContent  >
                    <h1>nombre: {pet.name}</h1>
                    <h2>tipo: {pet.type}</h2>
                    <h4>edad: {pet.age}</h4>
                  </CardContent>
                </Card>
              </Link>
            </Grid>

          ))

        ) : (
          <div className="center loading">
            <CircularProgress />
            <h4>Cargando...</h4>
          </div>
        )}
      </Grid>
    </Container>
  );
};

export default Adoption;