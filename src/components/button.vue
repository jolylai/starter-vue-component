<script setup lang="ts">
interface ButtonProps {
  msg: string
}

defineProps<ButtonProps>()
</script>

<template>
  <button>
    <slot />
  </button>
</template>
