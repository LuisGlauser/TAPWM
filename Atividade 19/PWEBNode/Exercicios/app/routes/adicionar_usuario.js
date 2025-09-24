module.exports = function(app){
    app.get('/admin/adicionar_usuario', function(req, res){
        res.render("admin/adicionar_usuario");
        // res.send("<html><body>História da Fatec Sorocaba</body></html>")
    });
}