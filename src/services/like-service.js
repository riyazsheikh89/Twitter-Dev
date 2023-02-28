import { LikeRepository, TweetRepository } from "../repository/index.js";

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    // toggleLike: like or dislike
    async toggleLike(modelId, modelType, userId) {

        if(modelType == 'Tweet') {          //toggle like on tweet
            var likeable = await this.tweetRepository.find(modelId);
        } 
        else if(modelType == 'Comment') {   //toggle like on comment
            // TODO
        } else {
            throw new Error("Unknown model type!");
        }

        const existLike = await this.likeRepository.findByUserAndLikeable({
            onModel: modelType,
            likeable: modelId,
            user: userId
        });
        
        if(existLike) {
            likeable.likes.pull(existLike.id);
            await likeable.save();
            await existLike.remove();
            var isAdded = false;    // wheather a like is added or removed
        } else {
            const newLike = await this.likeRepository.create({
                onModel: modelType,
                likeable: modelId,
                user: userId
            });
            likeable.likes.push(newLike);
            await likeable.save();
            var isAdded = true;
        }
        return isAdded;
    }
}

export default LikeService;