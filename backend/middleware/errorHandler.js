/* Global error handler
   - logs errors
   - returns consistent JSON payload
   - supports `next(err)` usage across controllers
*/
module.exports = (err, req, res, next) => {
  // ensure we have an Error object
  const error = err instanceof Error ? err : new Error(String(err));

  // log stack in non-production or always to server logs
  console.error(error.stack || error.message);

  const status = err.statusCode || err.status || 500;
  const payload = {
    success: false,
    message: error.message || 'Server Error',
  };

  // include validation errors array if present
  if (err.errors && Array.isArray(err.errors)) payload.errors = err.errors;

  res.status(status).json(payload);
};
