module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define("Usuario", {
        id: { type: DataType.INTEGER, autoIncrement: true, primaryKey: true },
        email: DataType.STRING(100),
        senha: DataType.STRING(100)
    }, {
        tableName: "usuarios",
        timestamps: false
    });

    return Usuario;
}