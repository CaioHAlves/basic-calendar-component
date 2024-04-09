
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-basic-calendar.cjs.production.min.js')
} else {
  module.exports = require('./react-basic-calendar.cjs.development.js')
}
