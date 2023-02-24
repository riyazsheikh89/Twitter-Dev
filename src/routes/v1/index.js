import express from 'express';
import {createTweet} from '../../controllers/tweet-controller.js'
import {toggleLike} from '../../controllers/like-controller.js';
import {createComment} from '../../controllers/comment-controller.js';
import { signUp } from '../../controllers/user-controller.js';

const router = express.Router();

router.post('/tweets', createTweet);        // create new tweet
router.post('/likes/toggle', toggleLike);   // like or dislike tweet
router.post('/comments', createComment);    // create a new comment
router.post('/signup', signUp);             // sign-up new user

export default router;

