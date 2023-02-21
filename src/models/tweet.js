import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250, 'You have reached character limit of 250!']
    },
    
}, {timestamps: true});


const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;