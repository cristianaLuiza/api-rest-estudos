const express = require('express');
const app = express()


app.get("/clients", function(request, reponse){})


app.post("/clients/:id", function(request, reponse){})
app.put("/clients/:id", function(request, reponse){})
app.delete("/clients/:id", function(request, reponse){})

app.listen(3000, function(){
    console.log("Server está rodando!")
});