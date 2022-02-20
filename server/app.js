const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'});
require('express-async-errors')
const express = require("express");
const cors = require('cors')
const helmet = require("helmet")
const app = express();

const connectDB = require('./db/connect')

//routers
const authRouter = require('./routes/auth')
const pages = require('./routes/index')

//error-handler
const notFoundMiddleware = require('./middleware/error-handler')
const errorHandlerMiddleware = require('./middleware/error-handler')

//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
)
app.use(helmet());
app.use(express.json());

//routes
app.use('', authRouter)
app.use('', pages)

app.use(errorHandlerMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error);
  }
}

start();