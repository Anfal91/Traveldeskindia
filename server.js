const express = require('express');
const app = express();
const ejs =  require('ejs')
const expressEjsLayout = require('express-ejs-layouts')
const path = require('path')
const jQuery = require('jquery')
const PORT = process.env.PORT || 3000


app.use(express.static('public'))


// set template engine
app.use(expressEjsLayout);

app.set('views', path.join(__dirname, '/public/views'))

app.set('view engine', 'ejs')

require('./Routes/webRoute')(app)
require('./Routes/packageRoute')(app)
require('./Routes/serviceRoute')(app)


app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})