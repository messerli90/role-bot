'use strict'
let fs = require('fs')

fs.createReadStream('.sample-env')
  .pipe(fs.createWriteStream('.env'));
