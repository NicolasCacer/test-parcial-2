module.exports = {
    get:(req, res) => {
        res.send("Get está sirviendo :D")
    },
    post:(req, res)=>{
        res.send(`Se ha ingresado con exito ${req.body.email}`)
    }
}