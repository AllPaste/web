<!--
 * @Author: Luenci
 * @Date: 2022-12-08 15:56:32
 * @LastEditors: Luenci
 * @LastEditTime: 2022-12-09 16:01:17
 * @FilePath: /all-paste/src/layout/Main.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Luenci, All Rights Reserved. 
-->
<template>
  <a-layout style="min-height: 100vh">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item style="margin-left: auto">
          <div class="demo-dropdown-wrap">
            <a-dropdown-button>
              <template #overlay>
                <a-menu @click="handleMenuClick">
                  <a-menu-item key="1">
                    <UserOutlined />
                    1st menu item
                  </a-menu-item>
                  <a-menu-item key="2">
                    <UserOutlined />
                    2nd menu item
                  </a-menu-item>
                  <a-menu-item key="3">
                    <UserOutlined />
                    3rd item
                  </a-menu-item>
                </a-menu>
              </template>
              <template #icon><UserOutlined /></template>
            </a-dropdown-button>
          </div>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '776px' }">
        <h1 style="text-align: center">在线剪切板 All Paste</h1>
        <hr />
        <Paste></Paste>
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }"> All Paste ©2022 Created by Luenci </a-layout-footer>
  </a-layout>
</template>
<script lang="ts">
import User from '@/components/User.vue'
import Paste from '@/views/Paste.vue'
import { UserOutlined } from '@ant-design/icons-vue'
import type { MenuProps } from 'ant-design-vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    User,
    Paste,
    UserOutlined,
  },
  setup() {
    const handleMenuClick: MenuProps['onClick'] = (e) => {
      console.log('click', e)
    }
    return {
      selectedKeys: ref<string[]>(['2']),
      handleMenuClick,
    }
  },
})
</script>

<style scoped>
#components-layout-demo-fixed .user {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
