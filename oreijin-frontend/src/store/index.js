// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from 'src/reducers';
// import logMiddleware from '../middleware/logMiddleware';
import authMiddleware from '../middleware/authMiddleware';
import registerMiddleware from '../middleware/registerMiddleware';
import ajaxMiddleware from '../middleware/ajaxMiddleware';
import commentMiddleware from '../middleware/commentMiddleware';
import userMiddleware from '../middleware/userMiddleware';
import homeVisitorMiddleware from '../middleware/homeVisitorMiddleware';


// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    // logMiddleware,
    homeVisitorMiddleware,
    authMiddleware,
    registerMiddleware,
    ajaxMiddleware,
    commentMiddleware,
    userMiddleware,
    // secondMiddleware,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
