import express from 'express';
import {createTweet} from '../../controllers/tweet-controller.js'
import {toggleLike} from '../../controllers/like-controller.js';

const router = express.Router();

router.post('/tweets', createTweet);    // create new tweet
router.post('/likes/toggle', toggleLike);   //like or dislike tweet

export default router;

