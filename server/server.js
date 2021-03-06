const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const furnitureRouter = require('./routes/furniture.router');
const furnitureTypeRouter = require('./routes/furnitureType.router');
const myItems = require('./routes/myItems.router');
const favoritesRouter = require('./routes/favorites.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/furniture', furnitureRouter);
app.use('/api/furnitureType', furnitureTypeRouter);
app.use('/api/myItems', myItems);
app.use('/api/favorites', favoritesRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
