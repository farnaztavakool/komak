const routes = (app) => {
    app.route('/contact')
        .get((req,res) => {
            res.send('get success')
        })

        .post((req,res) =>
            res.send('post success')
        )
    
    app.route('contact/:contactID')
        .put((req, res) =>
            res.send('put success')
        )
}