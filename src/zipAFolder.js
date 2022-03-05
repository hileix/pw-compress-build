const AdmZip = require('adm-zip');
const chalk = require('chalk');
const dayjs = require('dayjs');
const path = require('path');
const log = console.log;

function getZipPath(projectName) {
  return path.join(
    process.cwd(),
    `${projectName}-${dayjs().format('YYYYMMDDTHHmm')}.zip`
  );
}

async function main(folderPath, projectName) {
  log(chalk.white('In the compression...'));
  try {
    const zipPath = getZipPath(projectName);
    const zip = new AdmZip();
    zip.addLocalFolder(folderPath, projectName);
    zip.writeZip(zipPath);
  } catch (err) {
    return log(chalk.red(`Compression failed: ${err.message}`));
  }
  log(chalk.green('Compression succeeded!'));
}

module.exports = main;
