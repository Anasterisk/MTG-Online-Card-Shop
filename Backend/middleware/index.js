const jwt = require('jsonwebtoken');
const JWT_SECRET = 'jwt_secret_password'

module.exports = (req, res, next)=>{
    var token = require.body ['token']
    if (token) {
        jwt.verify(token, JWT_SECRET, function(err, decoded){
            if (err){
                return res.status(403).send({
                    success: false,
                    message: "Failed authentication"
                })
            } else {
                req.decoded = decoded;
                next ();
            }
        });
    } else {
        return res.status(403).send({
            success: false,
            message: 'No token given.'
        });
    }
};

// https://dzone.com/articles/create-a-simple-shopping-cart-using-react-and-node
// This is a directly taken from the site, Currently using it till I can figure out how to edit it out.