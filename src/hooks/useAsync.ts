import type { UnwrapRef } from 'vue'
import { ref } from 'vue'
/**
 *  @description: 通用异步请求
 * @param asyncFn  异步请求函数
 * @param initValue  初始值
 * @param immediate  是否立即执行
 * @returns {Object}  返回一个对象，包含三个属性：pending、data、error
 */
export function useAsync<T>(asyncFn: () => Promise<T>, initValue: T, immediate = true) {
  const pending = ref(false)
  const data = ref(initValue)
  const error = ref(null)
  const execute = function () {
    pending.value = true
    error.value = null
    return asyncFn()
      .then((res) => {
        data.value = res as UnwrapRef<T>
        pending.value = false
      })
      .catch((err) => {
        error.value = err
        pending.value = false
      })
  }

  if (immediate) {
    execute()
  }

  return {
    pending,
    data,
    error,
    execute
  }
}
