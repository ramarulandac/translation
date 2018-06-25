"use strict"

const Translate = require('@google-cloud/translate')

let TranslateService = {}
let translate = new Translate({
  keyFilename: './src/translator.conf.json'
})

TranslateService
.translateText =  async (content, targetLang) => {

   return (await translate.translate( content, targetLang ))[0]
}

module.exports = TranslateService;
