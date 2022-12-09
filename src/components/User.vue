<!--
 * @Author: Luenci
 * @Date: 2022-12-08 17:17:19
 * @LastEditors: Luenci
 * @LastEditTime: 2022-12-09 16:01:19
 * @FilePath: /all-paste/src/components/User.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Luenci, All Rights Reserved. 
-->
<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      <a-avatar style="background-color: #87d068">
        <template #icon> </template>
      </a-avatar>
    </a>
    <template #overlay>
      <a-menu @click="onClick">
        <a-menu-item key="3">3rd menu item</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script lang="ts">
import type { MenuProps } from 'ant-design-vue'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const onClick: MenuProps['onClick'] = ({ key }) => {
      console.log(`Click on item ${key}`)
    }
    return {
      onClick,
    }
  },
})
</script>
<style scoped></style>
