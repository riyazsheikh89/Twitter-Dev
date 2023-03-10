import {TweetRepository, HashtagRepository} from '../repository/index.js';

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(tweetContent, userId) {
        const content = tweetContent;
        let tags = content.match(/#[a-zA-Z0-9_]+/g);
        
        if (tags) {   //if there are tags available inside the tweet content
          tags = tags.map((tag) => tag.substring(1).toLowerCase()); // removing the preceding #, and convert to LowerCase
          const tweet = await this.tweetRepository.create({
            content: tweetContent,
            userId: userId,
          });

          let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
          let titleOfPresentTags = alreadyPresentTags.map((tags) => tags.title);
          let newTags = tags.filter((tag) => !titleOfPresentTags.includes(tag));
          newTags = newTags.map((tag) => {
            return { title: tag, tweets: [tweet.id] };
          });
          await this.hashtagRepository.bulkCreate(newTags);

          alreadyPresentTags.forEach((tag) => { // after tweet creation, we need to add tweet_id to the 'alreadyPresentTags'
            tag.tweets.push(tweet.id);
            tag.save();
          });
          return tweet;
        }
        else {  // if the tweet contains no #tags, then create simple tweet and retun
          const tweet = await this.tweetRepository.create({
            content: tweetContent,
            userId: userId,
          });
          return tweet;
        }
        
    }


    async getAllTweets() {
      return await this.tweetRepository.findAll();
    }
}

export default TweetService;