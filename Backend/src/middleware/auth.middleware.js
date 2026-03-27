const jwt = require('jsonwebtoken')

async function identifyUser (req , res, next){
    const token = req.cookies.token; // token of the user
      if (!token) {
        return res.status(401).json({
          message: "Token not provided , Unauthorized access.",
        });
      }
    
      let decoded = null; // decoded token containing the user id will be stored in this variable
      try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
      } catch (error) {
        return res.status(401).json({
          message : "User is not authorized."
        })
      }
    
    req.user = decoded;
    next();
}

module.exports = identifyUser;