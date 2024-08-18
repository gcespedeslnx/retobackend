const User = require("../models/user.model");
const createError = require("http-errors");
const encryption = require("../lib/encryption");
const jwt = require("../lib/jwt");

// Access logn in to the page

async function login(data){

    const user = await User.findOne({email:data}).select("+password");

    if (!user){
        throw createError (401,"Invalid credential");
    }

    const isValidPassword = encryption.compare(data.password, user.password);
    
    if (!isValidPassword){
        throw createError (401,"Invalid credential");
    }

    //const token = jwt.sign(id:user._id);
    return token;
}

// Create new user


async function signUp(data){
    const user = await User.findOne({email:data.email});

    if(user){
        throw createError(409, "User already exist");
    }

    if (!data.password){
        throw createError(400, "Password is required");
    }

    if (data.password.length < 6){
        throw createError(400,"Password mut be at least 6 characters");

    }

    const password = encryption.encrypt(data.password);

    data.password = password;

    const newUser = await User.create(data);

    return newUser;
}




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
    signUp,
    login,  
};

