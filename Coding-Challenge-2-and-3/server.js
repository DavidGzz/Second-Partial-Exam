const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const jsonParser = bodyParser.json();
const { DATABASE_URL, PORT } = require( './config' );

const app = express();


/* Your code goes here */
app.post('/sports/addSport/:sportId', jsonParser, (req, res) => {
    let name = req.body.name;
    let id = req.body.name;
    let num_players = req.body.num_players;
    let sportid = req.param.sportid;

    if(!name || !id || num_players || sportid){
        res.statusMessage = "Something is missing";
        return res.status(406).end();
    }
    if(sportid != id){
        res.statusMessage = "The id does not match";
        return res.status(409).end();
    }

    let newSport = {name, id, num_players, sportid};

    Sport
        .createPlayer(newSport)
        .then(result => {
            if(result.errmsg){
                res.statusMessage = "Error";
                return res.status(405).end();
            }
            res.status(201).json(result);
        })
        .catch(err =>{
            res.statusMessage = "Error" + errmsg;
            return res.status(400).end();
        });
});


app.listen( PORT, () => {
    console.log( "This server is running on port 8080" );
    new Promise( ( resolve, reject ) => {
        const settings = {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        };
        mongoose.connect( DATABASE_URL, settings, ( err ) => {
            if( err ){
                return reject( err );
            }
            else{
                console.log( "Database connected successfully." );
                return resolve();
            }
        })
    })
    .catch( err => {
        console.log( err );
    });
});