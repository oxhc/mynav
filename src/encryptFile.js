const encryUtils = require('./utils/encryp')
const md5 = require("js-md5")

const args = process.argv
if(args.length < 4) {
    console.log("参数不足")
    process.exit()
}

const filePath = args[2]
const password = args[3]

const fs = require("fs")

fs.readFile(filePath, "utf8", (err, dataStr) => {
    const aes_key = md5(password)
    const aes_iv = md5(aes_key)
    const encrypted = encryUtils.encrypt(dataStr, aes_key, aes_iv)
    console.log("加密后字符串: ")
    console.log(encrypted)

    fs.writeFile(filePath + ".pub", encrypted, 'utf-8', (err) => {
        if(!err) {
            console.log('加密成功, 已写入', filePath + ".pub")
        }
    })

})

