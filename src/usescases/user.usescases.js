const createError = require ("http-errors");
const user = require ("../models/user.model");

// Create new user ok

async function create (data){
    const newUser = await user.create(data);
    return newUser;
}

// Get all users ok

async function getAll(){
    const users = await user.find({});
    return users;
}

// Get User By id

async function getById(id){
    const user = await user.findById(id);
    return user;
}

// Update user by id

async function updateUserById(id, data){
    const user = await user.findByIdAndUpdate(id, data, {new: true});
    return user;
}

//  Delete by id

async function deleteUserById(id){
    const user = await user.findById(id);
     
    if (!user){
        throw createError(404, "User not found");
    }

    const deleteUser = await user.findAndDelete(user);
    return deleteUser;

}

module.exports  = {
    create,
    getAll,
    getById,
    updateUserById,
    deleteUserById,
    
};

