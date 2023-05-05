import app from './express';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3006;

app.listen(port, () => {
    console.info(`[server]: Server started on port ${port}`)
  }
);
