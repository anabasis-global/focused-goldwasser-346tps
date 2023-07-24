const fs = require('node:fs')
const sh = require('shelljs')
const ps = require('powershell')
const ssh = require('ssh2')
const path = require('path')

let apps = fs.readFileSync('./apps.txt')


let o = apps.toString().split('\n')

console.log(o)