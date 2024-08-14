const createError = require ("http-errors");
const post = require("../models/post.model");

// create a post

async function create(data){
    const newPost = await post.create(data);
    return newPost;
}
// Get all post

async function getAllPost(){
    const posts = await post.find();
    return posts;
}

// Get post by id

async function getByIdPost(id){
    const post = await post.findById(id);
    return post;    
}

//Update post by id

async function updateByIdPost(id, newdData){
    const post = await post.findByIdAndUpdate(id, newdData, {new: true});
    return post;
}

// Delete post by id

async function deleteByPost(id){
    const postFind = await post.findById(id);
    if(!postFind){
        throw createError(404,"Post not found");
    }

    const deletePost  = await post.findByIdAndDelete(id);
  return deletePost;
}


module.exports = {
    create,
    getAllPost,
    getByIdPost,
    updateByIdPost,
    deleteByPost,
}

