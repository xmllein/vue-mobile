import { ref, type Ref } from 'vue'

/**
 * 切换显示状态
 * @param initState
 * @returns
 */
export function useToggle(initState: boolean): [Ref<boolean>, () => void] {
  const state = ref(initState)
  const toggle = () => {
    state.value = !state.value
  }
  return [state, toggle]
}
