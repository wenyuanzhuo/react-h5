const path = require('path')
const fs = require('fs')

const originFilePath = path.resolve(__dirname, 'directory.json')
const readStream = fs.createReadStream(originFilePath, 'utf-8')
const isExist = (path) => fs.statSync(path).isFile()

const readPromise = () => {
  return new Promise((resolve) => {
    readStream.on('data', (chunk = '{}') => {
      const res = JSON.parse(chunk)
      resolve(res)
    })
    readStream.on('error',function(err){
      console.log('ERROR: ' + err);
    })
  })
}
const generateDirectory = (directory) => {
  directory && fs.mkdirSync(directory)
}

const generateFile = (file) => {
  file && fs.writeFile(file, '')
}
const generate = (data, currentPath, limitDeep = 5, deep = 0) => {
  if (!data || deep > limitDeep) return
  // init
  if (!deep && data.directory) {
    currentPath = data.directory
  }
  generateDirectory(currentPath)

  if (data.children) {
    for(let template of data.children) {
      if (template.directory && !template.file) {
        const path = `${currentPath}/${template.directory}`
        generate(template, path, limitDeep, deep + 1)
      } else {
        generateFile(`${currentPath}/${template.file}`)
      }
    }
  }
}
const main = (jsonPath, options = {}) => {
  if (jsonPath && !isExist(jsonPath)) {
    return
  }
  readPromise().then((data) => {
    if (typeof data === 'object' && (data.hasOwnProperty('file') || data.hasOwnProperty('directory'))) {
      const { currentPath = '', limitDeep = 5 } = options
      generate(data, currentPath, limitDeep, 0)
    }
  })
}

main(originFilePath)
