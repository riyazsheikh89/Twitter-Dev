import TweetService from '../services/tweet-service.js';
import upload from '../config/file-upload-s3-config.js';

const singleUploader = upload.single('image');

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
    try {
        singleUploader(req, res, async function(err, data) {
            if (err) {
                return res.status(500).json({error: err})
            }
            console.log('Image URL is: ', req.file);
            const payload = {...req.body};
            payload.image = req.file.location;
            const response = await tweetService.create(payload);
            return res.status(201).json({
                success: true,
                message: 'Successfully created a new tweet',
                data: response,
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