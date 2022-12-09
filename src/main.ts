/*
 * @Author: Luenci
 * @Date: 2022-12-08 15:50:51
 * @LastEditors: Luenci
 * @LastEditTime: 2022-12-08 17:03:30
 * @FilePath: /all-paste/src/main.ts
 * @Description:
 *
 * Copyright (c) 2022 by Luenci, All Rights Reserved.
 */
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.use(Antd)

app.mount('#app')
