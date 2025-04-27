async function relationModels(sequelize){
    const defineUser = require('./modelUser')
    const defineCategory = require('./modelCategory')
    const defineArticle = require('./modelArticle')


    const Category = defineCategory(sequelize)
    const Article = defineArticle(sequelize)
    const User = defineUser(sequelize)

    User.hasMany(Article, {
        foreignKey: 'UserId',
        onDelete: 'CASCADE',
    })
    Article.belongsTo(User, {
        foreignKey: 'UserId',
    })
    Category.hasMany(Article, {
        foreignKey: 'CategoryId',
        onDelete: 'CASCADE',
    })
    Article.belongsTo(Category, {
        foreignKey: 'CategoryId',
    })

    await sequelize.sync({alter: true})
}

module.exports = { relationModels };