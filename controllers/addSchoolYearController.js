const SchoolYear = require('../models/SchoolYear');

exports.addSchoolYear = function(req, res){
    const { yearstart, yearend } = req.body;

    SchoolYear.findOne({
        yearstart: yearstart
    }, async (err, result) => {
        if(result === null){
            const schoolyeardetail = new SchoolYear({
                yearstart: yearstart,
                yearend: yearend,
                status: true,
            })
            try{
                await schoolyeardetail.save();
            }
            catch(err){
                console.log(err);
            }
            res.status(201)
            res.send({message: "School Year Added", exist: false})
        }else{
            res.status(200)
            res.send({message:"School Year Already Exists", exist: true})
        }
    })
}