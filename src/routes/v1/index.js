import express from 'express';
import {createTweet} from '../../controllers/tweet-controller.js'

const router = express.Router();

router.post('/tweets', createTweet);    // create new tweet

export default router;

