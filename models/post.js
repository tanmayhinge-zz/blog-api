const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Title is necessary",
        minLen: 4,
        maxLen: 150
    },
    body:{
        type: String,
        required: "Body is necessary",
        minLen: 4,
        maxLen: 1500
    }
});

module.exports = mongoose.model("Post", postSchema);