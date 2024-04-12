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

  router.post("/", (req,res) =>{
    const { nombre, apellido, correo } = req.body;

    // Validar que se proporcionen los parámetros obligatorios
    if (!nombre || !apellido || !correo) {
      return res.status(400).json({ error: "Faltan parámetros obligatorios: nombre, apellido, correo electrónico" });
    }
  
    // Establecer valores por defecto para ciudad y país si no se proporcionan
    const ciudad = req.body.ciudad || "Bogotá";
    const pais = req.body.pais || "Colombia";
  
    // Crear objeto de usuario con los datos proporcionados
    const usuario = {
      nombre,
      apellido,
      correo,
      ciudad,
      pais
    };
  
    // Retornar el objeto JSON con la información del usuario creado
    res.status(201).json(usuario);
  });

  router.get("/:count", (req, res) => {
    const count = parseInt(req.params.count) ||listaNom.length;
    let sort = req.query.sort ? req.query.sort.toUpperCase() : 'ASC';
    let listaNomOrdenada = listaNom;
    if (count>30){
        return res.status(400).send("El numero maximo es 30");
    }
    if (count<0){
        return res.status(400).send("El numero tiene que ser positivo");
    }
  
    // Validar el parámetro de ordenamiento
    if (sort !== 'ASC' && sort !== 'DESC') {
      return res.status(400).send('El parámetro no es valido');
    }
  
    // Ordenar la lista de nombres
    listaNomOrdenada.sort();
  
    // Si el ordenamiento es DESC, revertir la lista
    if (sort === 'DESC') {
      listaNomOrdenada.reverse();
    }
  
    // Obtener las primeras "count" entradas del arreglo
    listaNomOrdenada = listaNomOrdenada.slice(0, count);
  
    res.send(listaNomOrdenada);
  });  
  
  module.exports = router;