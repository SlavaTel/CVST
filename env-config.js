const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.BASE_URL': prod ? 'https://slavatel.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://slavatel.herokuapp.com',
  'process.env.CLIENT_ID': 'HlKzTn4GE26dTPwZATKJEX11RN3p943V'
}