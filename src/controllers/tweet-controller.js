import TweetService from '../services/tweet-service.js';

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new tweet',
            data: response,
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

export const getAllTweets = async (req, res) => {
    try {
        const response = await tweetService.getAllTweets();
        return res.status(201).json({
            success: true,
            message: 'Successfully fetched tweets',
            data: response,
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