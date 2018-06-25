const translate = require('./translator')

let text = `Soy un geek y quiero trabajar para las mejores start ups en España`
let targetLang = `en`

console.log(translate);

(
  async () => {

  try {
    let result = await translate.translateText(text, targetLang)
    console.log(result)
  } catch (e) {
    console.log(`Error ${e} traduciendo ${text}`)
  }
  
})()
