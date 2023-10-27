<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { lazyAMapApiLoaderInstance } from '../../utils'

const emit = defineEmits<{
  'select': [location: Location ]
}>()

const searchRef = ref()

export interface Location {
  lng: number
  lat: number
}

onMounted(() => {
  lazyAMapApiLoaderInstance.then(() => {
    // @ts-expect-error 暂无AutoComplete类型
    const autocomplete = new AMap.Autocomplete({
      // input 为绑定输入提示功能的input的DOM ID
      input: searchRef.value,
    })

    autocomplete.on('select', (e: any) => {
      console.log('e: ', e)
      emit('select', {
        lng: e.poi.location?.lng,
        lat: e.poi.location?.lat,
      })

      // placeSearch.setCity(e.poi.adcode)
      // placeSearch.search(e.poi.name, function (status, searchResult) {
      //   if (status === 'complete') {
      //     const position = searchResult.poiList.pois[0]
      //     const { lng, lat } = position.location
      //     updateLocation(lng, lat)
      //   }
      // })
    })
  })
})
</script>

<template>
  <div class="search">
    <input ref="searchRef" class="search-input" placeholder="搜索位置、公交站、地铁站">
    <div class="search-btn">
      <svg t="1698375114271" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2588" width="128" height="128">
        <path
          d="M192 480a256 256 0 1 1 512 0 256 256 0 0 1-512 0m631.776 362.496l-143.2-143.168A318.464 318.464 0 0 0 768 480c0-176.736-143.264-320-320-320S128 303.264 128 480s143.264 320 320 320a318.016 318.016 0 0 0 184.16-58.592l146.336 146.368c12.512 12.48 32.768 12.48 45.28 0 12.48-12.512 12.48-32.768 0-45.28"
          fill="currentColor"
          p-id="2589"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.search{
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1000;

  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  list-style: none;
  min-width: 0;
  background-color: #ffffff;
  background-image: none;
  border-width: 1px;
  border-style: solid;
  border-color: #d9d9d9;
  /* border-radius: 6px; */
  transition: all 0.2s;
}

.search-input{
  width: 202px;
  padding: 2px 11px;
}

.search-btn {
  display: inline-block;
  box-sizing: border-box;
  width: 36px;
  height: 36px;
  padding: 6px;
  cursor: pointer;
}

.search-btn:hover {
  color: #40a9ff;
}

.search-btn .icon {
  width: 100%;
  height: 100%;
  transition: all 0.2s;
}
</style>
