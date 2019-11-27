const jwt = require('express-jwt')
const jwksRsa = require('jwks-rsa')


exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestPerMinute: 50,
    jwksUri: 'https://dev-w0x5cfuj.eu.auth0.com/.well-known/jwks.json'
  }),

  audience: 'HlKzTn4GE26dTPwZATKJEX11RN3p943V',
  issuer: 'https://dev-w0x5cfuj.eu.auth0.com/',
  algorithms: ['RS256']
})

exports.checkRole = role => (req, res, next) => {
  const user = req.user
  
  if (user && (user[process.env.NAMESPACE + '/role'] === role)) {
    next();
  } else {
    return res.status(401).send({title: 'Not Authorized', detail: 'You are not authorized to access this data'})
  }
}  

