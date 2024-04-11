const express=require ("express");

const router =express.Router();

router
    .route("/")
    .get((req, res) => {
        res.send(
          `funcionando :)`
        );
      })
    
    

router.get("/:coinName", async (req,res) => {
    try {
        const coinName = req.params.coinName.toLowerCase();
        const response = await fetch(`https://api.coincap.io/v2/assets/${coinName}`);
        const responseData = await response.json();

        if (responseData.data) {
            const price = responseData.data.priceUsd;
            res.send(`El precio en dólares de ${coinName} para el día de hoy es ${price}`);
        } else {
            res.status(404).send('El nombre de la moneda no fue encontrado en la base de datos');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
});

module.exports = router;