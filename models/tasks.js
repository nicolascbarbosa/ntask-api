module.exports = (sequelize, DataType) => {
  const Tasks = sequelize.define(
    'Tasks', 
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true, 
        autoIncrement: true
      }, 
      title: {
        type: DataType.STRING, 
        allowNull: false, 
        validate: {
          notEmpty: true
        }
      }, 
      done: {
        type: DataType.BOOLEAN, 
        allowNull: false,
        defaultValue: false
      }
    },
    {
      classMethod: {
        associate: (models) => {
          Tasks.belognsTO(models.Users)
        }
      }
    }
  );
  return Tasks;
} 