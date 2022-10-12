import React from "react";
import { Dialog, DialogContent, Button, Grid, Chip, Typography, Divider, Container, CardMedia } from "@mui/material";
import { useState } from "react";
import { pets } from "../pets";
import './PetDetail.css';


const PetDetail = (props)=>{

  const [open, setOpen] = React.useState(false);
  const [petInfo, setPetInfo] = useState(pets);

  const handleClickOpen = () => {
    setOpen(true);
    return setPetInfo(pets);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return(

    <Container>

      <Button 
      onClick={handleClickOpen}
      sx={{
        color: '#27b1f4',
      }}
      >
        Más información
      </Button>


      <Dialog open={open} onClose={handleClose} >
        <DialogContent>

          {Object.keys(petInfo).length > 0 && (
          <div className="dialog__info-container">
          

              <CardMedia
              component="img"
              height={250}
              image={props.mascotImage}
              alt={props.mascotName.toUpperCase()}
              />


            <Grid mt={3}>

              <h2 className="dialog__pet-name">{props.mascotName.toUpperCase()}</h2>
              <div className="dialog__pet-details">
                <Typography><b>Género:</b> {props.mascotGender}</Typography>
                <Typography><b>Tamaño:</b> {props.mascotSize}</Typography>
                <Typography><b>Edad:</b> {props.mascotAge}</Typography>
              </div>
              <Divider />
              <div className="dialog__pet-description">
                <Typography><b>Descripción:</b> {props.mascotDescription}</Typography>
              </div>
              <Divider />
              <div className="dialog__pet-description">
                <Typography>Si deseas adotpar a {props.mascotName.toUpperCase()}, acércate a Av. Paseo la Castellana 000. Santiago de Surco</Typography>
              </div>

            </Grid>
          </div>
          )}
                
        </DialogContent>
      </Dialog>


    </Container>

  )

}

export default PetDetail;