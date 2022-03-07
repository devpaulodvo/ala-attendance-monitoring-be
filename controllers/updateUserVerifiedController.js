const UserModel = require('../models/User');

exports.updateUserStatus = async function(req, res){
    const {email, status} = req.body;
    UserModel.updateOne({
        email: email
    }, {$set:{verified: !status}}, (err, result) => {
        res.status(200)
        res.json({data: result})
    })
}