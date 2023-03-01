import TweetService from '../services/tweet-service.js';
import upload from '../config/file-upload-s3-config.js';

const singleUploader = upload.array('image', 3);

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
    try {
        singleUploader(req, res, async function(err, data) {
            if (err) {
                return res.status(500).json({error: err});
            }

            if(req.files === undefined) { // if there is no image with the tweet
                var tweet = await tweetService.create(req.body);
            }
            else {
                let filesArray = req.files;
                var tweet = await tweetService.create(req.body);
                filesArray.forEach(files => {
                    tweet.images.push(files.location);
                });
                tweet.save();
            }
            return res.status(201).json({
                success: true,
                message: 'Successfully created a new tweet',
                data: tweet,
                err: {}
            });
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong at tweet-controller layer",
            data: {},
            err: error
        });
    }
}


export const getAllTweets = async (req, res) => {
    try {
        const tweet = await tweetService.getAllTweets();
        return res.status(201).json({
            success: true,
            message: 'Successfully fetched tweets',
            data: tweet,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong at tweet-controller layer",
            data: {},
            err: error
        });
    }
}