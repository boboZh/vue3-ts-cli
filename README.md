# Vue 3 + TypeScript + Vite  cli

# 基本功能
1、通过vue3ts create <name> 命令创建项目 
2、询问用户需要选择需要下载的模板
3、远程拉取模板文件

# 搭建cli步骤拆解
1、创建项目
2、创建脚手架启动命令（使用 commander）
3、询问用户问题获取创建所需信息（使用 inquirer）
4、下载远程模板（使用 download-git-repo）
5、发布项目