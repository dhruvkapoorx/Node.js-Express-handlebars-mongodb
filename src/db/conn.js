const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/DhruvSite",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection successful");

}).catch((error) => {
    console.log(error);
})
