<script lang="ts" setup>
const props = defineProps<{ loading?: boolean }>()
</script>

<template>
  <div class="loading">
    <var-loading :loading="props.loading ?? false" type="wave" description="Loading" size="large" />
  </div>
</template>

<style scoped>
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 300px;
  min-height: 300px;
}
</style>
