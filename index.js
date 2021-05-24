// console.log(col.red('Hi There'))
const express =require('express');
const app = express();

//listening to request and accessing data from a server API to send a response back
var request = require('request');

//will look view folder for our files to display
app.set("view engine", "ejs");

//route1 to display homepage
app.get("/",(req,res)=>{
    res.render("homepage.ejs");
})

// app.get("/search",(req, res)=>{
//     //render means display
    
    
//     console.log(req.query);
// });

app.get("/class",(req, res)=>{
    console.log("I am in console");
    res.send("you are in class");
  
})

app.get("/aboutMe", function(req,res){
    res.render("aboutMe");
})

app.get("/getMovies", (req, res)=>{
    console.log("Hello World!");
    const url = `http://www.omdbapi.com/?apikey=9a2a9bd8&s=${req.query.movieName}`;
    request(url, function(error, response, body){
        if(!error && response.statusCode==200){
            //body contains JSON format data
            
            const data = JSON.parse(body);
            console.log(response)
            //console.log(data);
            //let pass data to intro.ejs
            if( data.Response === 'False'){
                res.send("Movie Not Found!");
            }

            res.render("results", {movieData : data});
        }
        else{
            res.send("Something went wrong !!");
        }
    })
});

app.get("*",(req, res)=>{
    res.send("Uh oh something get wrong");
})

app.listen(8000,()=>{
    console.log("Server has started");
});
