const randomBytes = require('bluebird').promisify(require('crypto').randomBytes)
module.exports = length => randomBytes(length+2).then(buf => buf.toString('base64').replace(/\+|\/|=/g,'').substring(0,length))
