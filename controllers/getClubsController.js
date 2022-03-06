const ClubModel = require('../models/Club');

exports.getClubs = async function(req, res){

    ClubModel.find({
    }, (err, result) => {
        res.status(201)
        res.json({data: result})
        }
     );
}