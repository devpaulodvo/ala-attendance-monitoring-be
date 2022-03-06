const UserModel = require('../models/User');

exports.verifyUserRole = async function(req, res){
    const { email } = req.body;
    UserModel.findOne({
        email: email 
    }, (err, result) => {
        try{
            res.status(201)
            res.json(result)
        }
        catch(err){
            console.log(err);
        }
    })
}