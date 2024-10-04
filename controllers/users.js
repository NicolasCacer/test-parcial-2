module.exports = {
    get:(req, res) => {
        res.send(`Get de user ${req.params.id} está sirviendo :D con la query ${req.query.sort_by}`)
    },
    post:(req, res)=>{
        res.send(`Esta es un post request`)
    }
}