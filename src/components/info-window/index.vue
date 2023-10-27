<script lang="ts" setup>
import { inject, nextTick, onMounted, ref, unref } from 'vue'
import { lazyAMapApiLoaderInstance } from '../../utils'
import { aMapInstanceKey } from '../../utils/constant'
import { createInfoWindow, createMarker } from '../../utils/factory'
import type { MapInfoWindowProps } from './types'

const props = withDefaults(defineProps<MapInfoWindowProps>(), {
  position: () => [118.194732, 24.486948],
})

const content = ref()
const aMapInstance = inject(aMapInstanceKey, null)

onMounted(() => {
  lazyAMapApiLoaderInstance.then(() => {
    const marker = createInfoWindow({
      draggable: true,
      position: props.position,
    })

    marker.on('dragend', (e: any) => {
      console.log('args: ', e)
    })

    nextTick(() => {
      marker.setMap(unref(aMapInstance))
    })
  })
})
</script>

<template>
  <div style="display: none;">
    <div ref="content">
      <slot />
    </div>
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
