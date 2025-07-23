const fs = require('fs')

if (fs.existsSync('./src/tests')){
    console.log('tests folder exists')
} else{
    console.error('no tests folder')
    process.exit(1)
}