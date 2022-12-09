<!--
 * @Author: Luenci
 * @Date: 2022-12-09 15:27:05
 * @LastEditors: Luenci
 * @LastEditTime: 2022-12-09 16:01:09
 * @FilePath: /all-paste/src/views/Paste.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Luenci, All Rights Reserved. 
-->
<template>
  <div class="paste">
    <a-textarea v-model:value="value" placeholder="Basic usage" :rows="10" />
    <br />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref<string>('')
    return {
      value,
    }
  },
})
</script>

<style lang="less" scoped>
.paste {
  margin-top: 30px;
}
</style>
