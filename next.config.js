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
      },
      {
        source: '/api/logout',//api request path
        destination: 'http://localhost:4000/api/logout',//목적 path
      },
      {
        source: '/api/user/auth',//api request path
        destination: 'http://localhost:4000/api/user/auth',//목적 path
      },
      {
        source: '/api/modfiy',//api request path
        destination: 'http://localhost:4000/api/modfiy',//목적 path
      },
      {
        source: '/api/board/category',//api request path
        destination: 'http://localhost:4000/api/board/category',//목적 path
      },
      {
        source: '/api/board',//api request path
        destination: 'http://localhost:4000/api/board',//목적 path
      },
      {
        source: '/api/board/:id',//api request path
        destination: 'http://localhost:4000/api/board/:id',//목적 path
      },
      {
        source: '/api/view/:id',//api request path
        destination: 'http://localhost:4000/api/view/:id',//목적 path
      },
      {
        source: '/api/chatlist',//api request path
        destination: 'http://localhost:4000/api/chatlist',//목적 path
      },
      {
        source: '/api/board/comment/:id',//api request path
        destination: 'http://localhost:4000/api/board/comment/:id',//목적 path
      },
    ]
  },
}