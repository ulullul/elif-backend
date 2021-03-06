import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';
import cameraRoutes from './server/src/routes/CameraRoutes';
import testRoutes from './server/src/routes/TestRoutes';

config.config();

const app = express();
app.use(cors());
app.use(
  morgan('combined', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {
      flags: 'a',
    }),
  }),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;

app.use('/api/camera', cameraRoutes);
app.use('/api/test', testRoutes);
// when a random route is inputed
app.get('*', (req, res) =>
  res.status(200).send({
    message: 'Welcome to this API.',
  }),
);

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;
