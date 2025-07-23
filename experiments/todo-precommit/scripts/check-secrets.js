
//failed, not my code
const { spawnSync } = require('child_process')

const git = spawnSync('git', ['diff', '--cached', '--name-only'])
const stagedFiles = git.stdout.toString().split('\n').filter(Boolean)

if (stagedFiles.some(file => file.includes('.env'))) {
    console.error('dotenv file found in staged changes!')
    process.exit(1)
} else {
    console.log('no dotenv files staged')
    
}