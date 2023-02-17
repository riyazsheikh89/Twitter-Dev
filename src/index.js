const express = require('express');

const connect = require('./config/database');
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');


const app = express();
app.use(express.urlencoded());

const tweetRepo = new TweetRepository();


app.post('/createTweet', async (req, res) => {
    try {
      const response = await tweetRepo.create(req.body);
      return res.status(200).json({
        success: true,
        message: "Successfully created tweet",
        data: response,
        err: {},
      });
    } catch (error) {
      console.log(error);
    }
})

app.listen(3000, async () => {
    console.log("Server Started on PORT: 3000");
    await connect();
    console.log("MongoDB Connected");

    // const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.create({content: 'today is Feb 15'});
    // console.log(tweet);

});