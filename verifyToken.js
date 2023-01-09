const jwt = require ('jsonwebtoken')
const dotenv = require("dotenv")
dotenv.config();
const secretKey = process.env.JWT_SECRET_KEY;

const verifyToken = (req, res, next)=>{
    const token = req.headers['Authorization']
    console.log('token is',token)
    if(!token){
        res.status(403).send('Unauthorize user')
    }
    else{
        jwt.verify(token, secretKey, (err, decodedToken)=>{
            if(!err){
                req.decodedToken=decodedToken
            }
            else if(err){
                res.status(403).send(err)
            }
        })
    }
module.exports = verifyToken




}