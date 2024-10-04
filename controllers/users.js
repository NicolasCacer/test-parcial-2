module.exports = {
    get:(req, res) => {
        res.send(`Get de user ${req.params.id} está sirviendo :D`)
    },
    post:(req, res)=>{
        res.send(`Esta es un post request`)
    }
}