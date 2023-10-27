<script lang="ts" setup>
import { inject, nextTick, onMounted, ref, unref } from 'vue'
import { lazyAMapApiLoaderInstance } from '../../utils'
import { aMapInstanceKey } from '../../utils/constant'
import { createMarker } from '../../utils/factory'
import type { MapMarkerProps } from './types'

const props = withDefaults(defineProps<MapMarkerProps>(), {
})

const emit = defineEmits<{
  'update:position': [position: [lng: number, lat: number]]
}>()

const content = ref()
const aMapInstance = inject(aMapInstanceKey, null)

onMounted(() => {
  lazyAMapApiLoaderInstance.then(() => {
    const marker = createMarker({
      draggable: true,
      position: props.position,
    })

    console.log('marker: ', marker)
    marker.on('dragend', (e: any) => {
      console.log('args: ', e)
      emit('update:position', [e.lnglat.lng, e.lnglat.lat])
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
