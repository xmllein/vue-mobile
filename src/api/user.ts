import service from '@/api/base'

export const getUserList = (params: any) => {
  return service.get('/userList', { params })
}
