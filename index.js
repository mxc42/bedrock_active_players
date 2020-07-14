const fs = require('fs');

const buttonPressesLogFile = '/home/morgan/minecraftbe/evy/screenlog.0';

console.log(`Watching for file changes on ${buttonPressesLogFile}`);

let fsWait = false;
fs.watch(buttonPressesLogFile, (event, filename) => {
  if (filename) {
    if (fsWait) return;
    fsWait = setTimeout(() => {
      fsWait = false;
    }, 100);
    console.log(`${filename} file Changed`);
    fs.readFile(buttonPressesLogFile, (err, data) => {
       console.log(data.toString("utf-8"));
    });
  }
});
