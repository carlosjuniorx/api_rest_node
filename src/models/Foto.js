import Sequelize, {Model} from 'sequelize'

export default class Aluno extends Model{
  static init(sequelize){
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaulltValue: '',
        validate: {
          notEmpty:{
            msg: 'Campo nome pode ficar vazio',
          }
        }
      },
      filename: {
        type: Sequelize.STRING,
        defaulltValue: '',
        validate: {
          notEmpty:{
            msg: 'Campo nome pode ficar vazio',
          }
        }
      }
    },{
      sequelize,
      tableName: 'fotos',
    })
    return this
  }
  static associate(models){
    this.belongsTo(models.Aluno, {foreignKey: 'aluno_id'})
  }
}