import Comment from '../models/comment.model.js'
import catchAsync from '../utils/catchAsync.js'
import AppError from '../utils/AppError.js'
import Post from '../models/post.model.js'

const createComment = catchAsync(async (req, res, next) => {
    const { _id: userID} = req.user;
    const { id: postID} = req.params;
    const { text } = req.body;

    const foundPost = await Post.findById(postID).orFail(new AppError('post not found', 404))

    const data = await Comment.create({user: userID, post: foundPost._id, text })
    res.status(200).json({status: 'success', data })
})

export {createComment};