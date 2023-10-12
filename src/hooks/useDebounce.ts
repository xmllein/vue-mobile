import type { Ref, UnwrapRef } from 'vue'
import { ref, watch, onUnmounted } from 'vue'
/**
 * 防抖 hook
 * @param value  需要防抖的值
 * @param delay  防抖时间
 * @returns 防抖后的值
 */
export function useDebounce<T>(value: Ref<T>, delay: number) {
  const debounceValue = ref(value.value)
  let timer: ReturnType<typeof setTimeout> | null = null

  const unwatch = watch(value, (nv) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      debounceValue.value = nv as UnwrapRef<T>
    }, delay)
  })

  onUnmounted(() => {
    unwatch()
  })

  return debounceValue
}
