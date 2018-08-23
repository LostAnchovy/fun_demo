module.exports = (connection, Sequelize) =>{
    const Event = connection.define('event', {
        event_title: {
            type: Sequelize.STRING,
        },
        event_img:{
            type:Sequelize.STRING,
        },
        event_date:{
            type: Sequelize.STRING,
        },
        event_time:{
            type: Sequelize.STRING
        },
        description:{
            type: Sequelize.TEXT,
        },
        location:{
            type: Sequelize.STRING,
        }
    })
    return Event;
}
