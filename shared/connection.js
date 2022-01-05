const mongoose = require('mongoose');

exports.connect = () => {
    try{
        mongoose.connect('mongodb+srv://Suba:FyBGbIVnokqIKU6Y@cluster0.d5kaj.mongodb.net/FullStack?retryWrites=true&w=majority', {useNewUrlParser : true, useUnifiedTopology:true})
    } catch(err) {
        console.log(err);
        process.exit();
    }
}