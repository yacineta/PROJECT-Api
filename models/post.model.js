const mongoose = require("mongoose");
const postShema = mongoose.Schema(
    {
        message: {
            type: String,
            require:true,
        },
        author: {
            type: String,
            require:true,
        },
        likers: {
            type: String,
            require:true,
        },
        

},
{timestamps: true}
);

module.exports = mongoose.model('post', postShema)