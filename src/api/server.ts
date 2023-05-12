import app from './express';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.API_PORT || 3000;

app.listen(port, () => {
    console.info(`[server]: Server started on port ${port}`)
  }
);
