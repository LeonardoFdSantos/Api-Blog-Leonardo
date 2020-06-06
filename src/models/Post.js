const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

var now = new Date();
var utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    post: {
        type: String,
        required: true,
    },
    postedBy: {
        type: String,
        default: "Leonardo Felipe dos Santos",
    },
    createAt:{
        type: Date,
        default: utc,
    },
});

PostSchema.plugin(mongoosePaginate);

mongoose.model('Post', PostSchema);