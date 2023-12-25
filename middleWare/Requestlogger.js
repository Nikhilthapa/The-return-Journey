const requestLogger = (req, res, next) => {
  try {
    const timestamp = new Date().toLocaleString();
    const method = req.method;
    const url = req.url;
    console.log(`[${timestamp}] ${method} ${url}`);
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = requestLogger;
