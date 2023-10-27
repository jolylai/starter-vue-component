<script lang="ts" setup>
import { ref } from 'vue'

const position = ref([118.194732, 24.486948])

function onSelect(location) {
  console.log('location: ', location)
}
</script>

<template>
  <XMap>
    <XMapSearch @select="onSelect" />
    <XMapMarker :position="position">
      <div>这是一个自定义的内容</div>
    </XMapMarker>
  </XMap>
</template>
