#! /usr/bin/env node

import program from "commander";

console.log("vue3-ts-cli working~");

program
  .command("create <app-name>")
  .description("create a new project")
  .option("-f --force", "overwrite target directory if it exists")
  .action((name, options) => {
    console.log("name: ", name, ";options: ", options);
  });

program.version(`v${import("../package.json").version}`);
// 解析用户执行命令传入参数
program.parse(process.argv);
