import express, { Express } from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import cors from 'cors';
import './passport.config';

export const expressInit = async (app: Express) => {
    app.use(
        cors({
            origin: true,
            credentials: true,
            optionsSuccessStatus: 200,
        })
    );
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(passport.initialize());
    await mongoose.connect(process.env.DB_STRING as string);
    console.log('DB Initialized');
};
