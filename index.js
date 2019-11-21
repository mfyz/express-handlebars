const express = require('express')
const path = require('path')
const hbs = require( 'express-handlebars')

const PORT = process.env.PORT || 8110

const app = express()
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))

app.engine('hbs', hbs({
	extname: 'hbs',
	defaultView: 'default',
	layoutsDir: __dirname + '/views/layouts/',
	partialsDir: __dirname + '/views/partials/'
}))

app.get('/', (req, res) => {
	res.render('home', { message: 'Hello there!' })
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))