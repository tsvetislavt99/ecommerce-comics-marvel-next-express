import express, { Express } from 'express';
import dotenv from 'dotenv';
import { expressInit } from './config/index.config';
import { routes } from './routes/index';

dotenv.config();
const port = process.env.PORT;

async function startServer() {
    const app: Express = express();
    await expressInit(app);
    app.use(routes);
    //TODO: Add error handler
    app.listen(port, () => {
        console.log(
            `⚡️[server]: Server is running at https://localhost:${port}`
        );
    });
}

startServer();
