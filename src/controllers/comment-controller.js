import CommentService from '../services/comment-service.js';

const commentService = new CommentService();

export const createComment = async (req, res) => {
    try {
        const response = await commentService.create(
            req.query.modelId,
            req.query.modelType,
            req.user.id,
            req.body.content
        );
        return res.status(201).json({
            success: true,
            data: response,
            message: 'Successfully created a comment',
            err: {}
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            data: {},
            message: 'Something went wrong at comment-controller layer!',
            err: error
        })
    }
}