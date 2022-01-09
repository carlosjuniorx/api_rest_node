import Sequelize, {Model} from 'sequelize'

export default class Aluno extends Model{
  static init(sequelize){
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaulltValue: '',
        validate: {
          len:{
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          }
        }
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaulltValue: '',
        validate: {
          len:{
            args: [3, 255],
            msg: 'Campo sobrenome deve ter entre 3 e 255 caracteres',
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaulltValue: '',
        unique:{
          msg: 'Email já existe'
        },
        validate: {
          isEmail:{
            msg: 'Email inválido',
          }
        }
      },
      idade: {
        type: Sequelize.INTEGER,
        defaulltValue: '',
        validate: {
          isInt:{
            msg: 'Idade precisa ser um número inteiro',
          }
        }
      },
      peso: {
        type: Sequelize.FLOAT,
        defaulltValue: '',
        validate: {
          isFloat:{
            msg: 'Peso precisa ser um número',
          }
        }
      },
      altura: {
        type: Sequelize.STRING,
        defaulltValue: '',
        validate: {
          isFloat:{
            msg: 'Altura precisa ser um número',
          }
        }
      },
    },{
      sequelize,
    })
    return this
  }
  static associate(models){
    this.hasMany(models.Foto, {foreignKey: 'aluno_id'})
  }
}
