import Tweet from '../models/tweet.js';

class TweetRepository {

    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id) {
        try {
            const tweet = Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error)
        }
    }

    async getAll(offset, limit) {
        try {
            const tweet = Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error)
        }
    }

    async getWithComment(id) {
        try {
            const tweet = Tweet.findById(id).populate({path: 'comments'});
            return tweet;
        } catch (error) {
            console.log(error)
        }
    }

    // User can't update the tweet, as in Original Tweeter
    /* async update(tweetId, data) {
        try {
            const tweet = Tweet.findByIdAndUpdate(tweetId, data, {new: true});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    } */

    async destroy(id) {
        try {
            const tweet  = Tweet.findByIdAndRemove(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

export default TweetRepository;