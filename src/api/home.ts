import service from '@/api/base'
import type { IHomeInfo } from '@/types'
export const fetchHomePageData = () => {
  return service.get<IHomeInfo, IHomeInfo>('/home_page', {})
}
