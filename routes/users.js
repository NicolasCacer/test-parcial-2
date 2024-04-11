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

  router.get("/", (req,res) => {
    res.send("lista usuario sirve :)")

  });


  router.get("/count", (req,res) => {
    const numero=parseInt(req.params.numero);
    if (numero ==null || ordenar==""){
        numero=30;
    }
    let ordenar=req.query.sort.toUpperCase;
    let listaNomOrdenada=listaNom
    if (ordenar =="" || ordenar==null){
        ordenar="ASC";
    }
    if (ordenar=="ASC"){
        listaNomOrdenada=listaNom.sort().reverse();
    }
    else if (ordenar=="DESC"){
        listanombreOrdenada=listaNom.sort();
    } else {
        return res.status(400).send('No es valido ese parametro para ordenar.')
    }

    listanombreOrdenada=listanombreOrdenada.slice(0,numero);

    res.send(listanombreOrdenada)

    

  });