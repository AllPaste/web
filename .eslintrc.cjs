/*
 * @Author: Luenci
 * @Date: 2022-12-08 15:50:51
 * @LastEditors: Luenci
 * @LastEditTime: 2022-12-08 16:31:55
 * @FilePath: /all-paste/.eslintrc.cjs
 * @Description:
 *
 * Copyright (c) 2022 by Luenci, All Rights Reserved.
 */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
}
