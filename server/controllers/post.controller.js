import Post from '../models/post.model.js'
//  
import catchAsync from '../utils/catchAsync.js'
import AppError from '../utils/AppError.js'
import { getPagination } from './post.helper.js'

const createPost = catchAsync(async (req, res) => {
  const { desc, title } = req.body
  const { _id: user } = req.user
  const image = req.file ? req.file.path : undefined

  const document = new Post({
    user,
    desc,
    title,
    image,
  })
  const query = await document.populate({
    path: 'user',
    select: 'username userPic userBanner nickname',
  })
  const data = await query.save()

  res.status(201).json({
    status: 'success',
    data,
  })
})
const getAllPosts = catchAsync(async (req, res) => {
  const query = Post.find({})
  const { skip, limit } = getPagination(req.query)
  query.skip(skip).limit(limit)
  const data = await query.sort({
    createdAt: -1,
  })
  res.status(200).json({
    status: 'success',
    results: data.length,
    data,
  })
})
const getPost = catchAsync(async (req, res) => {
  const { id } = req.params
  const data = await Post.findById(id).orFail(
    new AppError('Post not found.', 404)
  )
  res.status(200).json({
    status: 'success',
    data,
  })
})
const deletePost = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const { _id: userID } = req.user
  const data = await Post.findById(id).orFail(
    new AppError('Post not found.', 404)
  )
  if (data.user._id.toString() !== userID.toString()) {
    return next(
      new AppError('Post does not belong to the logged in user.', 401)
    )
  }
  await data.delete()
  res.status(204).json({
    status: 'success',
    data: null,
  })
})



// const addComment = catchAsync(async (req, res) => {

//   const { id } = req.params
//   const text =  req.body

//  const post = await Post.findById(id)

//  post.comments.push(text);
   
//   const updatedPost = await Post.findByIdAndUpdate(id, post, {new: true}).orFail(
//     new AppError('Post not found.', 404)
//   )
//     comment.populate({
//     path: 'user',
//     select: 'username userPic',
//   })
//   // await updatedPost.save();

//   res.status(201).json({
//     status: 'success',
//     updatedPost,
//   })
// });






export { createPost, getAllPosts, getPost, deletePost }