import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    hash: String,
    salt: String,
});

export const userModel = mongoose.model('Users', userSchema);
