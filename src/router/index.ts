/*
 * @Author: Luenci
 * @Date: 2022-12-08 15:50:51
 * @LastEditors: Luenci
 * @LastEditTime: 2022-12-09 14:47:38
 * @FilePath: /all-paste/src/router/index.ts
 * @Description:
 *
 * Copyright (c) 2022 by Luenci, All Rights Reserved.
 */
import Main from '@/layout/Main.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Main,
    },
  ],
})

export default router
