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
  CardContent, CircularProgress, CardActionArea,
} from "@mui/material";

import { Link } from "react-router-dom";

const GetPets=()=>{

const pets = require('./pets.json');

console.log(pets)    
return (

    <div>
        {pets.map( (p, index) =>(
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={p.image}
                alt={p.name}
                />
                <CardContent></CardContent>
              </CardActionArea>
              <div key={index}>
                  <h1>{p.name}</h1>
              
                  <img src={p.image} alt="" />

              </div>
            </Card>
        ))}
    </div>
  )
};

export default GetPets;