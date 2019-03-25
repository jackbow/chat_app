let mongoose = require('mongoose');

const msgSchema = new mongoose.Schema({
    idx: Number, // used for querying db
    time: String,
    text: String,
    member: {
        name: String,
        userID: String,
    }
}, { capped: 2147483648 }); // 2GB cap

module.exports = mongoose.model("MsgDB", msgSchema);