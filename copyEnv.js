const fs = require("fs-extra");

const envPath = './.env'

const branchName = process.env.BUILD_SOURCEBRANCHNAME
console.log({ branchName })
if (fs.existsSync(envPath)) {
  console.log('fs.readFileSync( envPath )', fs.readFileSync(envPath, 'utf8'))
  console.log('Copy success env file')
  return true
}
fs.copySync('./.env.example', envPath);
let appEnv = 'development'
switch (branchName) {
  case 'main':
    appEnv = 'production'
    break;
  case 'stg':
    appEnv = 'production'
    break;
  default:
    appEnv = 'development'
    break;
}

const dataEnv = `APP_ENV=${appEnv}`;

console.log({ dataEnv })
fs.writeFileSync(envPath, dataEnv);
