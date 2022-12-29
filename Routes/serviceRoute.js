function initServiceRoute(app){
    app.get('/service/air-ambulance', (req, res)=> {
        res.render('services/air-ambulance')
    })
    app.get('/service/charter-booking', (req, res)=> {
        res.render('services/charter-booking')
    })
    app.get('/service/flight-booking', (req, res)=> {
        res.render('services/flight-booking')
    })
    app.get('/service/hotel-booking', (req, res)=> {
        res.render('services/hotel-booking')
    })
    app.get('/service/visa-application', (req, res)=> {
        res.render('services/visa-application')
    })
    app.get('/service/travel-insurance', (req, res)=> {
        res.render('services/travel-insurance')
    })
    app.get('/service/package', (req, res)=> {
        res.render('services/package')
    })
    app.get('/service/forex-service', (req, res)=> {
        res.render('services/currency')
    })
}
module.exports = initServiceRoute