const Post = require("../models/post.model");

async function getAll(){
    const post = await Post.find();
    return post;
} 

async function getById(id){
    const post = await Post.findById(id);
    return post;
}
async function create(post){
    const newPost = await Post.create(post);
    return newPost;
}

async function updateById(id, Data){
    const post = await Post.findByIdAndUpdate(id, Data, {new: true});
    return post;
}

async function deleteById(id){
    const post = await Post.findByIdAndDelete(id);
    return post;
}

module.exports = {
    getAll, 
    getById, 
    create,
    updateById, 
    deleteById,
};  //exporting