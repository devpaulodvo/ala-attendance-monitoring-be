const { OAuth2Client } = require('google-auth-library');

const googleClient = new OAuth2Client({
    clientId: `${process.env.CLIENT_ID}`,
})

exports.verifyLoginController = async function(req, res){
    const { token } = req.body;
    const ticket = await googleClient.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
    });
    
    const result = ticket.getPayload(); 

    if(result){
        res.status(200)
        res.json({googleData: result, token: token, isAuth: true, message: "Logged In!"})
    }else{
        res.json({isAuth: false, message: "You must login!"})
    }

    
}
