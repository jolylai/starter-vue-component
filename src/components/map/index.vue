<script lang="ts" setup>
import { onMounted, provide, ref } from 'vue'
import { lazyAMapApiLoaderInstance } from '../../utils'
import { aMapInstanceKey } from '../../utils/constant'

export interface MapProps {
  center?: [lng: number, lat: number]
  zoom?: number
}

const props = withDefaults(defineProps<MapProps>(), {
  center: () => [116.397428, 39.90923],
  zoom: 11,
})

const AMapInstance = ref<AMap.Map | null>(null)

provide(aMapInstanceKey, AMapInstance)

const containerRef = ref()
const mapRef = ref()

onMounted(() => {
  lazyAMapApiLoaderInstance.then(() => {
    AMapInstance.value = new AMap.Map(mapRef.value, {
      zoom: props.zoom, // 级别
      // resizeEnable: true
    })
    console.log('AMapInstance.value: ', AMapInstance.value)
  })
})
</script>

<template>
  <div ref="containerRef" class="a-map-container">
    <div ref="mapRef" class="a-map" />
    <slot />
  </div>
</template>

<style>
  .a-map-container {
    height: 280px;
    width: 100%;
    position: relative;
  }

  .a-map {
    height: 100%;
    width: 100%;
  }
</style>
