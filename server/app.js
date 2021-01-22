require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
// const GameState = require("./GameStateDB")

//App Config
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({exptended:true}));
const port = 3001;
const connection_url = "mongodb+srv://admin-somnath:hn8qM0QtxRoeZlkN@cluster0.vc3ep.mongodb.net/typingPracticeDB?retryWrites=true&w=majority"

//DB Config
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})

//Mongoose Schemas
const gameStateSchema = new mongoose.Schema({
    roomId:String,
    player_1_name:String,
    player_1_pos:Number,
    player_2_name:String,
    player_2_pos:Number,
    player_3_name:String,
    player_3_pos:Number
})
const GameState = new mongoose.model("GameState",gameStateSchema);

//API EndPoints
app.get("/",(req,res)=>{
    res.send("hello")
});

app.post("/gameState",(req,res)=>{
    
    const newGameState = new GameState(req.body);
    newGameState.save();

});
app.get("/gameState",(req,res)=>{
    res.send("hello")
    // GameState.find(gameState,(err,data)=>{
    //     if (err) {
    //         res.status(500).send(err)
    //     } else {
    //         res.status(200).send(data)
    //     }
    // })
});

app.listen(port,()=>console.log(`Typing Practice app listening at http://localhost:${port}`))