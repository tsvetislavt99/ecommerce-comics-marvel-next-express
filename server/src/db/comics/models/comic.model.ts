import mongoose from 'mongoose';

const comicSchema = new mongoose.Schema({
    title: String,
    description: String,
    thumbnail: String,
    price: Number,
    creators: [
        {
            name: String,
            role: String,
        },
    ],
    characters: [
        {
            name: String,
        },
    ],
});

export const ComicModel = mongoose.model('Comics', comicSchema);
