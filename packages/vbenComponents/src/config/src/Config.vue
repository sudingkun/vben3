<script lang="ts" setup name="VbenConfig">
import { maps } from '#/index'

const Config = maps.get('Config')
</script>
<template>
  <Config abstract v-bind="$attrs"> <slot></slot></Config>
</template>

<style scoped></style>
