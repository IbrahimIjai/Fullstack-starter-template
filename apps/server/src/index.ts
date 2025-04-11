import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';

// import rateLimit from 'express-rate-limit';//TODO

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(helmet());
app.use(cookieParser());
app.use(compression());
app.use(bodyParser.json());

const server = http.createServer(app);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
