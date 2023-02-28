import { CommentRepository, TweetRepository } from "../repository/index.js";

class CommentService {
    constructor() {
        this.commentRepo = new CommentRepository();
        this.tweetRepo = new TweetRepository();
    }

    async create(modelId, modelType, userId, content) {
        if (modelType == 'Tweet') {
            var commentable = await this.tweetRepo.get(modelId);
        } 
        else if (modelType == 'Comment') {
            var commentable = await this.commentRepo.get(modelId);
        } 
        else {
            throw new Error('Error from service: Unkonwn modelType!');
        }
        const newComment = await this.commentRepo.create({
                commentable: modelId,
                onModel: modelType,
                userId: userId,
                content: content,
        });
        commentable.comments.push(newComment);
        await commentable.save();
        return newComment;
    }
}

export default CommentService;

