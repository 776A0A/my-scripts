# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 1.6.0 (2021-03-10)


### Features

* **bin:** 将蹩脚英文改为中文 ([817f4dd](https://github.com/776A0A/simple-node-script/commit/817f4dd39809123b5f884616a832c9df2d1df098))
* **bin/spec-dev:** 新增spec-dev命令，用于自动配置开发规范（现只能配置standard-version） ([0395558](https://github.com/776A0A/simple-node-script/commit/0395558f479933780efbcb9a05c2a70c266ff13d))
* **chosePkgManager:** 初始化包管理工具选择器 ([64e1474](https://github.com/776A0A/simple-node-script/commit/64e1474f6c0f079b1578eca4cc5550555acc6c00))
* **generator:** 修改报错关键字颜色为redBright ([b067146](https://github.com/776A0A/simple-node-script/commit/b0671461751584e2dccbb10125cf09d691845202))
* **init-gh-rep:** 美化 log ([c048877](https://github.com/776A0A/simple-node-script/commit/c0488777083b62878014a0af4c9e088fe6686ee1))
* **init-gh-rep:** 默认的branch名从master-->main ([b70cfbf](https://github.com/776A0A/simple-node-script/commit/b70cfbf7fc6dc1f123dd4875cf478386430e897c))
* **init-gh-rep:** 完成初始化 github 仓库命令编写 ([12561fb](https://github.com/776A0A/simple-node-script/commit/12561fbcbde7c358ca25523f6caa8b4d7a12a1a7))
* **sepc-dev:** 添加secp-dev下的template ([1539e5f](https://github.com/776A0A/simple-node-script/commit/1539e5f6070a37ee576c3d572e48b31be227f87d))
* **sepc-dev:** 修改template文件内容 ([701c7e4](https://github.com/776A0A/simple-node-script/commit/701c7e4f2f13372db489965122452b5ee5aededb))
* **spec-dev:** 删除eslint-config-prettier依赖 ([3d28a20](https://github.com/776A0A/simple-node-script/commit/3d28a2054c6c4f7a90a8400bd9725f8a645fda22))
* **spec-dev:** 添加覆盖本地文件提问 ([04c6804](https://github.com/776A0A/simple-node-script/commit/04c680412be68d2e5517b60ff1c4042fba931d09))
* **spec-dev:** 添加eslint规则配置 ([e28d0a8](https://github.com/776A0A/simple-node-script/commit/e28d0a8ca3ea6b7350fd13643f6f4c118d5a0ff0))
* **spec-dev:** 新增是否自动安装依赖提问以及选择安装器（未完成） ([bb7eb5b](https://github.com/776A0A/simple-node-script/commit/bb7eb5bd872ee927fa5ea2c54acc1a3c428d8c20))
* **spec-dev:** 增加eslint、prettier、editorconfig配置写入 ([dd209d8](https://github.com/776A0A/simple-node-script/commit/dd209d8b8b435ca422dcb11d0a0969e88a607a7e))
* **src:** 改造utils中对象组织方式 ([8beb3e4](https://github.com/776A0A/simple-node-script/commit/8beb3e4b25dc1f0db99893c86b5210eb3e5d62a6))
* **src:** 将js转换为ts ([42fa1b8](https://github.com/776A0A/simple-node-script/commit/42fa1b86c1e4818eab51b98507b0bf49338aebdd))
* 添加creator，用以管理全局状态即功能 ([d6d105e](https://github.com/776A0A/simple-node-script/commit/d6d105ef552c7a28e957a5237c54f75a89621e34))
* 添加generator/prompt执行后自动重置；generator添加检测依赖主版本冲突； ([dab459f](https://github.com/776A0A/simple-node-script/commit/dab459f034919fade9de16c4b7ff791f00d2023d))
* **spec-dev:** 新增eslint配置规则 ([36ef68a](https://github.com/776A0A/simple-node-script/commit/36ef68ac8c00c42d5d33e89cfa163129362cbc39))
* **spec-dev:** 优化spec-dev代码，并添加一些新的eslint规则 ([f2cf298](https://github.com/776A0A/simple-node-script/commit/f2cf29868a7284000ec650b1b887583f5291829a))
* **spec-dev:** 自动运行yarn安装依赖 ([355e00d](https://github.com/776A0A/simple-node-script/commit/355e00da3262c52dce75f9269481642205be01b8))


### Bug Fixes

* 修复typo，sepc-->spec ([2ffc03d](https://github.com/776A0A/simple-node-script/commit/2ffc03de6795ed2484cd80c72582e739c0c3631e))
* **init-gh-rep:** 根据eslint修改一个模块引入顺序 ([3b73de1](https://github.com/776A0A/simple-node-script/commit/3b73de16785ab4a8b84060d73855b96ace14a759))
* **package.json:** 修复错误脚本 ([813070d](https://github.com/776A0A/simple-node-script/commit/813070d8ff2dd80c7bca35118534a082567e2849))
* **package.json:** 修复bin路径错误 ([77093c3](https://github.com/776A0A/simple-node-script/commit/77093c393aa8b3af451a99da719bbf586fb4f850))

## [1.5.0](https://github.com/776A0A/simple-node-script/compare/v1.4.0...v1.5.0) (2021-03-06)

### Features

-   **generator:** 修改报错关键字颜色为 redBright ([b067146](https://github.com/776A0A/simple-node-script/commit/b0671461751584e2dccbb10125cf09d691845202))
-   添加 generator/prompt 执行后自动重置；generator 添加检测依赖主版本冲突； ([dab459f](https://github.com/776A0A/simple-node-script/commit/dab459f034919fade9de16c4b7ff791f00d2023d))
-   **init-gh-rep:** 默认的 branch 名从 master-->main ([b70cfbf](https://github.com/776A0A/simple-node-script/commit/b70cfbf7fc6dc1f123dd4875cf478386430e897c))
-   **spec-dev:** 添加 secp-dev 下的 template ([1539e5f](https://github.com/776A0A/simple-node-script/commit/1539e5f6070a37ee576c3d572e48b31be227f87d))
-   **spec-dev:** 添加覆盖本地文件提问 ([04c6804](https://github.com/776A0A/simple-node-script/commit/04c680412be68d2e5517b60ff1c4042fba931d09))
-   **spec-dev:** 添加 eslint 规则配置 ([e28d0a8](https://github.com/776A0A/simple-node-script/commit/e28d0a8ca3ea6b7350fd13643f6f4c118d5a0ff0))
-   **spec-dev:** 新增 eslint 配置规则 ([36ef68a](https://github.com/776A0A/simple-node-script/commit/36ef68ac8c00c42d5d33e89cfa163129362cbc39))
-   **spec-dev:** 优化 spec-dev 代码，并添加一些新的 eslint 规则 ([f2cf298](https://github.com/776A0A/simple-node-script/commit/f2cf29868a7284000ec650b1b887583f5291829a))
-   **spec-dev:** 增加 eslint、prettier、editorconfig 配置写入 ([dd209d8](https://github.com/776A0A/simple-node-script/commit/dd209d8b8b435ca422dcb11d0a0969e88a607a7e))
-   **spec-dev:** 自动运行 yarn 安装依赖 ([355e00d](https://github.com/776A0A/simple-node-script/commit/355e00da3262c52dce75f9269481642205be01b8))

### Bug Fixes

-   **init-gh-rep:** 根据 eslint 修改一个模块引入顺序 ([3b73de1](https://github.com/776A0A/simple-node-script/commit/3b73de16785ab4a8b84060d73855b96ace14a759))

## [1.4.0](https://github.com/776A0A/simple-node-script/compare/v1.3.1...v1.4.0) (2021-02-26)

### Features

-   **bin/spec-dev:** 新增 spec-dev 命令，用于自动配置开发规范（现只能配置 standard-version） ([0395558](https://github.com/776A0A/simple-node-script/commit/0395558f479933780efbcb9a05c2a70c266ff13d))

### [1.3.1](https://github.com/776A0A/simple-node-script/compare/v1.3.0...v1.3.1) (2021-02-25)

### Bug Fixes

-   **package.json:** 修复错误脚本 ([813070d](https://github.com/776A0A/simple-node-script/commit/813070d8ff2dd80c7bca35118534a082567e2849))

## [1.3.0](https://github.com/776A0A/simple-node-script/compare/v1.2.1...v1.3.0) (2021-02-25)

### Features

-   **bin:** 将蹩脚英文改为中文 ([817f4dd](https://github.com/776A0A/simple-node-script/commit/817f4dd39809123b5f884616a832c9df2d1df098))

### Bug Fixes

-   **package.json:** 修复 bin 路径错误 ([77093c3](https://github.com/776A0A/simple-node-script/commit/77093c393aa8b3af451a99da719bbf586fb4f850))

### [1.2.1](https://github.com/776A0A/simple-node-script/compare/v1.2.0...v1.2.1) (2021-02-23)

## 1.2.0 (2021-02-23)

### Features

-   **init-gh-rep:** 美化 log ([c048877](https://github.com/776A0A/simple-node-script/commit/c0488777083b62878014a0af4c9e088fe6686ee1))
-   **init-gh-rep:** 完成初始化 github 仓库命令编写 ([12561fb](https://github.com/776A0A/simple-node-script/commit/12561fbcbde7c358ca25523f6caa8b4d7a12a1a7))

### [1.1.1](https://github.com/776A0A/simple-node-script/compare/v1.1.0...v1.1.1) (2021-02-23)

## 1.1.0 (2021-02-23)

### Features

-   **init-gh-rep:** 完成初始化 github 仓库命令编写 ([12561fb](https://github.com/776A0A/simple-node-script/commit/12561fbcbde7c358ca25523f6caa8b4d7a12a1a7))
