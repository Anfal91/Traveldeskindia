function initPackageRoute(app){
    app.get('/tour-package/bhutan', (req, res)=> {
        res.render('tour-packages/bhutan')
    })
    app.get('/tour-package/darjeeling', (req, res)=> {
        res.render('tour-packages/darjeeling')
    })
    app.get('/tour-package/dooars', (req, res)=> {
        res.render('tour-packages/dooars')
    })
    app.get('/tour-package/northeast', (req, res)=> {
        res.render('tour-packages/northeast')
    })
    app.get('/tour-package/sikkim-darjeeling', (req, res)=> {
        res.render('tour-packages/sik-darji')
    })
    app.get('/tour-package/sikkim', (req, res)=> {
        res.render('tour-packages/sikkim')
    })
}

module.exports = initPackageRoute