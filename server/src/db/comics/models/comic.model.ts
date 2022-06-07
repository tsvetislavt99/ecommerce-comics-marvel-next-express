import mongoose from 'mongoose';

export interface Comic {
    title: string;
    description: string;
    thumbnail: string;
    price: number;
    creators: { name: string; role: string }[];
    characters: { name: string }[];
}

export const ComicSchema = new mongoose.Schema<Comic>({
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

export const ComicModel = mongoose.model<Comic>('Comics', ComicSchema);
