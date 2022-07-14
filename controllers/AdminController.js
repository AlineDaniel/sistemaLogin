const db = require("../models");
const bcrypt = require("bcryptjs");

const AdminController = {
    login: (req, res) => {
        res.render("login");
    },
    acaoLogin: async (req, res) => {
        const { email, senha } = req.body;

        const usuarioEncontrado = await db.Usuario.findOne({ where: { email: email }});

        if(usuarioEncontrado === null){
            res.render("login", {
                error: "Usuário não encontrado"
            });
            return;
        }

        if(!bcrypt.compareSync(senha, usuarioEncontrado.senha)){
            res.render("login", {
                error: "Usuário não encontrado"
            });
            return;
        }

        req.session.emailUsuario = usuarioEncontrado.email;
        res.redirect("/admin");
    },
    logout: (req, res) => {
        req.session.destroy();
        res.redirect("/admin/login");
    },
    index: (req, res) => {
        res.render("admin");
    }
}

module.exports = AdminController;