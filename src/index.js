#!/usr/bin/env node
'use strict';
const program = require('commander');
const path = require('path');

program
  .command('zip [folderName]')
  .description('zip a folder')
  .action(function (folderName, cmd) {
    const projectName = require(path.join(process.cwd(), 'package.json')).name;
    const folderPath = path.join(process.cwd(), folderName);
    require('./zipAFolder.js')(folderPath, projectName);
  });

program.parse(process.argv);
