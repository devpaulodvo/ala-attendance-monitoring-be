const { OAuth2Client } = require('google-auth-library');
const UserModel = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const googleClient = new OAuth2Client({
    clientId: `${process.env.CLIENT_ID}`,
})

exports.authenticateUser = async function(req, res){
    const { token } = req.body;
    const ticket = await googleClient.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
    });
    
    const user = ticket.getPayload(); 
    UserModel.findOne({
        email: user.email 
    }, (err, result) => {
        if(result === null){
            bcrypt.hash(user.sub, saltRounds, async (err, hash)=>{
                const userdetail = new UserModel({
                    email:user.email, 
                    password:hash,
                    family_name: user.family_name,
                    given_name: user.given_name,
                    picture: user.picture,
                    verified: false,
                    status: 'active',
                    role: 'adviser'
                })
                try{
                    await userdetail.save();
                }
                catch(err){
                    console.log(err);
                }
            })
        }
        res.status(201)
        res.json({googleData: user, token: token, isAuth: true, message: "Already exist, Loggin In!"})
    });
}
