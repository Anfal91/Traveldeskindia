function initWebRoute(app){
    app.get('/', (req, res)=> {
        res.render('home')
    })
    app.get('/about', (req, res)=> {
        res.render('about')
    })
    app.get('/service', (req, res)=> {
        res.render('service')
    })
    app.get('/contact', (req, res)=> {
        res.render('contact')
    })
}

module.exports = initWebRoute