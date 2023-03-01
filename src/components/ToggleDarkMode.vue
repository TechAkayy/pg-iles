<script setup lang="ts">
  import { computed } from 'vue'
  import { useDark, useToggle } from '@vueuse/core'

  const isDark = useDark()
  const toggleDark = useToggle(isDark)

  const modeIcon = computed(() =>
    isDark.value ? 'ic:twotone-dark-mode' : 'ic:twotone-light-mode',
  )
</script>
<template>
  <BaseButton @click="toggleDark()">
    <span>Toggle Mode</span>
    <template #suffix-icon>
      <BaseIcon
        width="20px"
        class="dark-mode-icon"
        :name="modeIcon"
        style="margin-left: 8px"
      />
    </template>
  </BaseButton>
</template>
<style scoped>
  .dark-mode-icon {
    display: inline-block;
    margin-left: 13px;
    align-items: center;
  }
</style>
