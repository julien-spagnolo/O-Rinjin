// eslint-disable-next-line no-unused-vars
const authMiddleware = (store) => (next) => (action) => {
  next(action);
};

export default authMiddleware;
