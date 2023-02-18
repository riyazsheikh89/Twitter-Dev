const {TweetRepository} = require('../repository/index');

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
    }

    async create(data) {
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g); // regular expression for extracting #tags
        tags = tags.map((tag) => tag.substring(1)); // removing the preceding #, from every hashtags
        console.log(tags);
        const tweet = await this.tweetRepository.create(data);
        return tweet;
        // TODO: create hashtags and add here

    }
}

module.exports = TweetService;