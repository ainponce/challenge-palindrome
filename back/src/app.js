import cors from 'cors';
import dotenv from 'dotenv';
import express, { json } from 'express';
import palindromeRoutes from './routes/palindromeRoute.js';

dotenv.config();

export const app = express();
app.use(cors());
app.use(json());

app.use('/api', palindromeRoutes);

app.get('/ping', (req, res) => {
    res.json({
        message: 'pong',
    });
});