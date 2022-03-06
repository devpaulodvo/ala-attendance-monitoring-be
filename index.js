const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const authRoute = require('./routes/authUserRoute');
const verifyRoute = require('./routes/verifyLoginRoute');
const getPersonnelRoute = require('./routes/getPersonnelRoute');
const addClubRoute = require('./routes/addClubRoute');
const verifyRoleRoute = require('./routes/verifyRoleRoute');
const getClubRoute = require('./routes/getClubRoute');
const updateClubRoute = require('./routes/updateClubRoute');

require('dotenv').config();

const mongodbAccessString = process.env.REACT_APP_MONGODB_CON_STRING;

mongoose.connect(mongodbAccessString , {
    useNewUrlParser: true,
})


app.use(cors({  
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST"],
    credentials: true,
   }))

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.post('/auth', authRoute)

app.post('/verify', verifyRoute)

app.get('/get/personnel', getPersonnelRoute)

app.post('/club/addclub', addClubRoute)

app.post('/verifyrole', verifyRoleRoute)

app.get('/get/clubs', getClubRoute)

app.post('/update/club', updateClubRoute)


app.listen(3001, ()=>{
    console.log('listening on port 3001');
});