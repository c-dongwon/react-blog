module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/list',//api request path
          destination: 'http://localhost:4000/api/list',//목적 path
        },
        {
          source: '/api/signup',//api request path
          destination: 'http://localhost:4000/api/signup',//목적 path
        },
        {
          source: '/api/login',//api request path
          destination: 'http://localhost:4000/api/login',//목적 path
        }
      ]
    },
}