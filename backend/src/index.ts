import express, { Express } from 'express';
import router from './routes/clientRoutes';
const cors = require('cors');
// const cookieParser = require('cookie-parser')
const app: Express = express();

// Middleware to parse JSON requests
app.use(cors());
app.use(express.json());
// app.use(cookieParser());
app.use('/',router);

// Exporting app using ES module syntax
export default app;