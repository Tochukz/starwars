const fse = require('fs-extra');
const { join } = require('path');


function copyDist(src, dest) {
 console.info(`Copying:  ${src} -> ${dest}`);
  fse.emptyDirSync(dest);
  fse.copySync(src, dest);
}


copyDist(join(__dirname, '../build'), join(__dirname, '../../server/public'));

