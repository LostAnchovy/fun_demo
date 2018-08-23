
module.exports = (connection, Sequelize) =>{
    const User = connection.define('user', {
        first_name: {
            type: Sequelize.STRING,
        },
        last_name:{
            type: Sequelize.STRING,
        },
        email:{
            type: Sequelize.STRING,
        },
    })
    return User;
}