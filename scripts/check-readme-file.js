const fs = require('fs');

if (fs.existsSync('./README.md')){
    console.log('readme file exists');
} else{
    console.error('no readme file');
    process.exit(1);
}