const express = require('express')
const path = require('path')
// const hbs = require('hbs')
const collection = require('./public/mongodb')

const app = express()
const templatePath = path.join(__dirname, './templates')

app.use(express.json())
app.set('view engine', 'hbs')
app.set('views', templatePath)
app.use(express.urlencoded({ extended: false }))

// Archivos estáticos CSS e IMG
app.use(express.static(path.join(__dirname, 'public')))

// RUTAS DE NAVEGADOR
app.get('/', (req, res) => {
  res.render('index')
})
app.get('/signup', (req, res) => {
  res.render('signup')
})
app.get('/login', (req, res) => {
  res.render('login')
})
app.get('/deportes', (req, res) => {
  res.render('deportes')
})
app.get('/contacto', (req, res) => {
  res.render('contacto')
})

// RUTAS DE DEPORTES
app.get('/arco', (req, res) => {
  res.render('deportes/arco')
})
app.get('/atletismo', (req, res) => {
  res.render('deportes/atletismo')
})
app.get('/baseball', (req, res) => {
  res.render('deportes/baseball')
})
app.get('/basketball', (req, res) => {
  res.render('deportes/basketball')
})
app.get('/boxeo', (req, res) => {
  res.render('deportes/boxeo')
})
app.get('/voleyball', (req, res) => {
  res.render('deportes/voleyball')
})

app.post('/login', async (req, res) => {
  try {
    const check = await collection.findOne({ name: req.body.name })
    if (check.password === req.body.password) {
      res.render('home')
    } else {
      res.send('Contraseña incorrecta')
    }
  } catch {
    res.send('Detalles incorrectos')
  }
})

app.listen(3000)
