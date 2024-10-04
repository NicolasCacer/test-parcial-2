const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res) =>{
    const {email, password} = req.body;

    if (!email || !password){
        return res.status(400).json({error: "missing email or password"})

    }
    else if (email === 'admin@admin.com' && password === "admin"){
        return res.status(200).json({message:"login was succesfull"})
    }

    const token = jwt.sign(email, process.env.SECRET_KEY, {expiresIn: "1h"});
    res.cookie("token",token,{httpOnly:true});
    next();
}