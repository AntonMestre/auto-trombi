<script setup lang="ts">
</script>
<template>
  <div class="h-full">
    <div class="borderUtility">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.borderUtility {
  border-left: 1px solid #cacaca;
  padding: 10px;
}
</style>