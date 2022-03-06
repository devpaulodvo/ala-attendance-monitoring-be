const ClubModel = require('../models/Club');

exports.updateClub = async function(req, res){
    const {clubname, status} = req.body;
    ClubModel.updateOne({
        clubname: clubname
    }, {$set:{status: !status}}, (err, result) => {
        res.status(200)
        res.json({data: result})
    })
}