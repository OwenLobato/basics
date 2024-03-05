import express from 'express';
import cors from 'cors';
import { userRouter } from './routes/user.js';

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

// Routes
app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
