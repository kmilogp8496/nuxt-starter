<script setup lang="ts">
const route = useRoute()
const items = ref([
  {
    label: 'Docs',
    value: '/docs/getting-started/setup',
    icon: 'i-heroicons-book-open',
  },
  {
    label: 'Home',
    value: '/',
    icon: 'i-heroicons-home',
  },
])
const modelValue = computed(() => route.path.startsWith('/docs') ? items.value[0]! : items.value[1]!)
</script>

<template>
  <USelectMenu
    :model-value="modelValue"
    :items
    :icon="modelValue.icon"
    @update:model-value="navigateTo($event.value)"
  />
</template>
