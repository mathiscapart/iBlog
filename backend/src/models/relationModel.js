function relationModels(sequelize){
    const { User, Categorie, Article } = sequelize.models;
    User.hasMany(Article)
    Article.belongsTo(User)
    Categorie.hasMany(Article)
    Article.belongsTo(Categorie)
}

module.exports = { relationModels };