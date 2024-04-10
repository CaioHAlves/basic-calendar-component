
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./basic-calendar-component.cjs.production.min.js')
} else {
  module.exports = require('./basic-calendar-component.cjs.development.js')
}
