const express=require ("express");

const router =express.Router();

const listaNom= [
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

  router.get("/", (req,res) =>{
    res.send(listaNom);
  });



  router.get("/count", (req, res) => {
    const count = parseInt(req.query.count) || listaNom.length;
    const ordenar = req.query.sort ? req.query.sort.toUpperCase() : 'ASC';
    
    // Validar que el valor de ordenamiento sea 'ASC' o 'DESC', de lo contrario, devolver un error
    if (ordenar !== 'ASC' && ordenar !== 'DESC') {
      return res.status(400).send('El parámetro "sort" debe ser "ASC" o "DESC"');
    }
  
    // Ordenar el arreglo por la primera letra del apellido
    listaNom.sort((a, b) => {
      if (ordenar === 'ASC') {
        return a.localeCompare(b);
      } else {
        return b.localeCompare(a);
      }
    });
  
    // Obtener solo las primeras "count" entradas del arreglo
    const arregloNombresApellidos = listaNom.slice(0, count);
  
    res.send(arregloNombresApellidos);
  });
  
  
  module.exports = router;