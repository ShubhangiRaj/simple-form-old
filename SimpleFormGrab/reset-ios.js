const fs = require('fs');
const generate = require('node_modules/react-native/local-cli/generate/generate.js');

generate([
  '--platform', 'ios', //or android
  '--project-path', process.cwd(),
  '--project-name', JSON.parse(
    fs.readFileSync('package.json', 'utf8')
  ).name,
]);
