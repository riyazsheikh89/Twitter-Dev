const express = require('express');
const connect = require('./config/database');

const TweetRepository = require('./repository/tweet-repository');4
const Comment = require('./models/comment');

const app = express();

app.listen(3000, async () => {
    console.log("Server Started on PORT: 3000");
    await connect();
    console.log("MongoDB Connected");

    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.create({content: 'Hooks in mongoose now'});
    // console.log(tweet);

});