import LikeService from "../services/like-service.js";

const likeService = new LikeService();

export const toggleLike = async (req, res) => {
    try {
        const response = await likeService.toggleLike(
            req.query.modelId, 
            req.query.modelType, 
            req.user.id
        );
        return res.status(200).json({
            success: true,
            isLikeAdded: response,
            message: "Woohoo! Toggle Like is working fine",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            data: {},
            message: "Something went wrong at controller layer!",
            err: error
        });
    }
}