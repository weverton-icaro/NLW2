//Servidor
const express = require('express')
const app = express()
const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')


//configurando nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: app,
  noCache: true,
})

//Inicio e configuração do servidor
app
//receber os dados do req.body
.use(express.urlencoded({ extended: true }))
//Configurando arquivos estáticos (css, scripts, imagens)
  .use(express.static("public"))
//Rotas das aplicações
  .get('/', pageLanding)
  .get('/study', pageStudy)
  .get('/give-classes', pageGiveClasses)
  .post('/save-classes', saveClasses)
  .listen(5500)
  console.log("POWER ON !!!")