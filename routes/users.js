const express = require("express");
const router = express.Router();

const listaNom = [
  "ACERO GARCIA, SAMUEL",
  "ALJURI MARTINEZ, DAREK",
  "CEPEDA URIBE, JUAN FELIPE",
  "CHAVES PEREZ, ANA MARIA",
  "CRUZ PAVAS, CARLOS DAVID",
  "DIAZ ALGARIN, DIEGO NORBERTO",
  "DIAZ BERNAL, JORGE ESTEBAN",
  "DIAZ VARGAS, DAVID ESTEBAN",
  "FORERO PEÑA, JUAN JOSE",
  "GUTIERREZ DE PIÑERES BARBOSA, SANTIAGO",
  "LOPEZ HUERTAS, SAMUEL ESTEBAN",
  "MEDINA FERNANDEZ, MICHAEL STEVEN",
  "MORENO CARVAJAL, KATHERIN JULIANA",
  "MORENO PATARROYO, JUAN PABLO",
  "MUÑOZ SENDOYA, NICOLAS ESTEBAN",
  "NAVARRO CUY, SANTIAGO",
  "PARRADO MORALES, JUAN PABLO",
  "RAMIREZ CHINCHILLA, DANIEL SANTIAGO",
  "RESTREPO COCA, JUAN PABLO",
  "REYES GONZALEZ, GABRIELA",
  "RODRIGUEZ FALLA, JUAN JOSE",
  "RUIZ TORRES, VALENTINA",
  "SALAS GUTIERREZ, MARIANA",
  "SANCHEZ SANDOVAL, SEBASTIAN",
  "SARMIENTO GUARNIZO, JOSUE DAVID",
  "SOLER PRADO, SANTIAGO",
  "TAMAYO LOPEZ, MARIA FERNANDA",
  "URREA LARA, DEIVID NICOLAS",
  "AZCONA, ANDRÉS"
];

router.get("/count", (req, res) => {
  const ordenar = req.query.sort ? req.query.sort.toUpperCase() : 'ASC';
  
  let arregloNombresApellidos = listaNom.map(nombreApellido => {
    const [apellido, nombre] = nombreApellido.split(", ");
    return { apellido, nombre };
  });

  // Ordenar el arreglo por apellido
  arregloNombresApellidos.sort((a, b) => {
    if (ordenar === 'ASC') {
      return a.apellido.localeCompare(b.apellido);
    } else {
      return b.apellido.localeCompare(a.apellido);
    }
  });

  const count = arregloNombresApellidos.length;
  res.json({ count, listaNom: arregloNombresApellidos });
});

module.exports = router;
