import React , { useState } from "react";
import "../../styles/form/index.css"
import {FormControl, InputLabel, Input, FormHelperText, Button, Container, Grid} from '@mui/material';


function Form (){

    const [datos, setDatos] = useState({
        titulo: "",
        descripcionForm: "",
        protagonista: "",
        director: "",
        coprotagonista: "",
        estreno: "",
    })
    
    
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value  
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
    }


    return (
        <Container maxWidth="lg">
        <h1>{"Formulario cinematografico"}</h1>
         <h3>{"Rellenar este formulario para poder relacionar su pelicula"}</h3>
             <Grid container className="Grid">
            <FormControl className="colorForm" onSubmit={enviarDatos}>
                <InputLabel htmlFor="titulo">Titulo</InputLabel>
                <Input id="titulo" name="titulo" onChange={handleInputChange} aria-describedby="titulo" />
                <FormHelperText id="titulo-helper-text">Titulo principal.</FormHelperText>
            </FormControl>
            </Grid>
            <Grid container className="Grid">
            <FormControl className="colorForm" onSubmit={enviarDatos}>
                <InputLabel htmlFor="descripcion">Descripcion</InputLabel>
                <Input id="descripcionForm" name="descripcionForm" onChange={handleInputChange} aria-describedby="descripcion" />
                <FormHelperText id="descripcion-helper-text">Descripcion de la cinta.</FormHelperText>
            </FormControl>
            </Grid>
            <Grid container className="Grid">
            <FormControl className="colorForm" onSubmit={enviarDatos}>
                <InputLabel htmlFor="protagonista">Actor</InputLabel>
                <Input id="protagonistaForm" name="protagonista" onChange={handleInputChange} aria-describedby="actor" />
                <FormHelperText id="protagonista-helper-text">Actor principal de la cinta.</FormHelperText>
            </FormControl>
            </Grid>
            <Grid container className="Grid">
            <FormControl className="colorForm" onSubmit={enviarDatos}>
                <InputLabel htmlFor="director">Director/a</InputLabel>
                <Input id="directorForm" name="director" onChange={handleInputChange} aria-describedby="director" />
                <FormHelperText id="director-helper-text">Director de la cinta.</FormHelperText>
            </FormControl>
            </Grid>
            <Grid container className="Grid" >
            <FormControl className="colorForm" onSubmit={enviarDatos}>
                <InputLabel htmlFor="co-protagonistas">Reparto</InputLabel>
                <Input id="co-protagonistasForm" name="coprotagonista" onChange={handleInputChange} aria-describedby="actor" />
                <FormHelperText id="co-protagonista-helper-text">Elenco (Secundarios o co-protagonista).</FormHelperText>
            </FormControl>
            </Grid>
            <Grid container className="Grid">
            <FormControl className="colorForm" onSubmit={enviarDatos}>
                <InputLabel htmlFor="estreno">Año de estreno</InputLabel>
                <Input id="estrenoForm" name="estreno" onChange={handleInputChange} aria-describedby="actor" />
                <FormHelperText id="estreno-helper-text">Fecha de estreno.</FormHelperText>
            </FormControl>
            </Grid>
             <Button variant="contained" Contained
                onClick={() => {
                    alert('clicked');
                }}
                >
                Enviar
            </Button>
        </Container>
    )
}


export default Form 
