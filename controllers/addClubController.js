const ClubModel = require('../models/Club');

exports.addClub = function(req, res){
    const { clubName } = req.body;

    ClubModel.findOne({
        clubname: clubName 
    }, async (err, result) => {
        if(result === null){
            const clubdetail = new ClubModel({
                clubname: clubName,
                status: true
            })
            try{
                await clubdetail.save();
            }
            catch(err){
                console.log(err);
            }
            res.status(201)
            res.send({message: "Club Added", exist: false})
        }else{
            res.status(200)
            res.send({message:"Club Already Exists", exist: true})
        }
    })


    
}