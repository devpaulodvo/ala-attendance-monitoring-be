const UserModel = require('../models/User');

exports.getPersonnel = async function(req, res){

    UserModel.find({
    }, (err, result) => {
        res.status(201)
        res.json({data: result})
        }
     );
}