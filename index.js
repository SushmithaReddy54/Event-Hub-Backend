import express from 'express';
import connectDB from './dbConfig.js';
import userRoutes from './routes/userRoutes.js';
import workshopRoutes from './routes/workshopRoutes.js';
import cors from 'cors';
import morgan from 'morgan';
const app = express();

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use('/', userRoutes);
app.use('/workshop', workshopRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(8080, () => {
    console.log(`Server is running on port 8080`);
});