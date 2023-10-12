<script lang="ts" setup>
import { useAsync } from '@/hooks/useAsync'
import { fetchHomePageData } from '@/api/home'
import type { IHomeInfo } from '@/types'
import LoadingView from '@/components/LoadingView.vue'

// 请求数据
const { data, pending, execute } = useAsync(fetchHomePageData, {} as IHomeInfo, false)

const getSearch = () => {
  execute()
}
</script>

<template>
  <VanSearch
    shape="round"
    background="linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243))"
    placeholder="请输入搜索关键词"
  >
    <template #right-icon>
      <div @click="getSearch">搜索</div>
    </template>
  </VanSearch>
  <LoadingView :loading="pending" type="loading">
    <VanSwipe class="home-page__activity__swipe" :autoplay="3000" :loop="true">
      <VanSwipeItem v-for="v in data.activities" :key="v">
        <img :src="v" />
      </VanSwipeItem>
    </VanSwipe>
  </LoadingView>
</template>

<style lang="scss" scoped>
.home-page__activity__swipe {
  margin: 10px;
  border-radius: 8px;
  width: 370px;
  height: 170px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
