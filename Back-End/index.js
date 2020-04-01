/*Se procede a inicialixar librerías*/

const express = require("express");
const app = express ();
const bodyParser = require ("body-parser");
const cors = require("cors");

/*Archivo de conección al servidor y db*/
const connectionServer = require("./db/connection");


/*Configuración de la libreria express*/
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


/* Routes server */


/* Arranca el servidor */

connectionServer.conectar(app);