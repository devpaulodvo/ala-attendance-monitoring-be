const SchoolYearModel = require('../models/SchoolYear');

exports.getSchoolYear = async function(req, res){
    SchoolYearModel.find({
    }, (err, result) => {
        res.status(200)
        res.json({data: result})
        }
     );
}