// — Server —
require('colors')
const app = require('./index.js')

// const { notFound, errorHandler } = require('./middleware/error.middleware')

// — Mount your API routes —
// app.use('/api/order', require('./routes/order.routes'))

// — Error handling (after all routes) —
// app.use(notFound);
// app.use(errorHandler);

// — Start server —
app.listen(process.env.PORT || 5000, (err) => {
  if (err) console.log(`Listening error : ${err.message}`.bgRed)
  console.log(`Server listening on http://localhost:${process.env.PORT || 5000}`.blue)
})
