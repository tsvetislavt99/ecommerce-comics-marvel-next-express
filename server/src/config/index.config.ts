import express, { Express } from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import passport from 'passport';
import MongoStore from 'connect-mongo';

export async function expressInit(app: Express) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(
        session({
            secret: process.env.SECRET as string,
            store: MongoStore.create({
                mongoUrl: process.env.DB_STRING as string,
                collectionName: 'sessions',
            }),
            resave: false,
            saveUninitialized: true,
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 7, //One week
            },
        })
    );
    app.use(passport.initialize());
    app.use(passport.session());
    await mongoose.connect(process.env.DB_STRING as string);
    console.log('DB Initialized');
}
