// eslint-disable-next-line no-unused-vars
const registerMiddleware = (store) => (next) => (action) => {
  next(action);
};

export default registerMiddleware;
