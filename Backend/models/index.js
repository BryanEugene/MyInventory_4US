const mongoose = require("mongoose");
const uri = "mongodb+srv://Alex:admin@cluster1.sbug3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };