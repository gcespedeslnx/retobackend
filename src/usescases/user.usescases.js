const User = require("../models/user.model");

// Create new user ok

async function create (data){
    const newUser = await User.create(data);
    return newUser;
}

// Get all users ok

async function getAll(){
    const users = await User.find({});
    return users;
}

// Get User By id

async function getById(id){
    const user = await User.findById (id);
    return user;
}

// Update user by id

async function updateUser(id, data){
    const user = await User.findByIdAndUpdate(id, data, {new: true});
    return user;
}

//  Delete by id

async function deleteUser(id){
    const deleteUser = await User.findByIdAndDelete (id);
    return deleteUser;
}

module.exports  = {
    create,
    getAll,
    getById,
    updateUser,
    deleteUser,       
};

