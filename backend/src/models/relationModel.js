const defineUser = require("./modelUser");

async function relationModels(sequelize){
    const defineUser = require('./modelUser')
    const defineCategory = require('./modelCategory')
    const defineArticle = require('./modelArticle')


    const Category = defineCategory(sequelize)
    const Article = defineArticle(sequelize)
    const User = defineUser(sequelize)

    User.hasMany(Article)
    Article.belongsTo(User)
    Category.hasMany(Article)
    Article.belongsTo(Category)

    await sequelize.sync({alter: true})
}

module.exports = { relationModels };