import express from 'express';
import {createTweet, getAllTweets} from '../../controllers/tweet-controller.js'
import {toggleLike} from '../../controllers/like-controller.js';
import {createComment} from '../../controllers/comment-controller.js';
import { signUp, login } from '../../controllers/user-controller.js';
import { authenticate } from '../../middlewares/authentication.js';

const router = express.Router();

router.post('/tweets', authenticate, createTweet);        // create new tweet
router.post('/comments', authenticate, createComment);    // create a new comment
router.post('/likes/toggle', authenticate, toggleLike);   // like or dislike tweet
router.post('/signup', signUp);                           // sign-up new user
router.post('/login', login);                             // log-in

router.get('/tweets', getAllTweets);

export default router;

