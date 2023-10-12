import Mock from 'mockjs'
export default () => {
  return [
    {
      url: '/api/createUser',
      method: 'post',
      response: ({ body, query }) => {
        console.log('body>>>>>>>>', body)
        console.log('query>>>>>>>>', query)

        return {
          code: 0,
          message: 'ok',
          data: { a: 21, 'import.meta.url': import.meta.url }
        }
      }
    },
    {
      url: '/api/userList',
      method: 'get',
      response: ({ body, query }) => {
        console.log('body>>>>>>>>', body)
        console.log('query>>>>>>>>', query)

        return Mock.mock({
          code: 0,
          message: 'ok',
          data: {
            'list|10': [{ a: 21, 'import.meta.url': import.meta.url }]
          }
        })
      }
    }
  ]
}
