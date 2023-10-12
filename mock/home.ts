export default () => {
  return [
    {
      url: '/api/home_page',
      method: 'get',
      time: 2000,
      response: ({ body, query }) => {
        console.log('body>>>>>>>>', body)
        console.log('query>>>>>>>>', query)

        return {
          code: 0,
          message: 'ok',
          data: {
            activities: [
              '/imgs/index_page/activity/1.jpg',
              '/imgs/index_page/activity/2.jpg',
              '/imgs/index_page/activity/3.jpg'
            ]
          }
        }
      }
    }
  ]
}
