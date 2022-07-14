function AutenticacaoAdmin(req, res, next){
    if("emailUsuario" in req.session){
        next();
    }else{
        res.redirect("/admin/login");
    }
}

module.exports = AutenticacaoAdmin;