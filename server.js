var express = require('express')
var app = new express()

app.use((req, res) => {
    console.log(" its a hit")
    res.sendFile(__dirname + "/index.html")
    // res.send("6767")

})

app.listen(8888, () => {
    console.log("we are online")
})

