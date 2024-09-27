const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/db.js');

class aireAcondicionado extends Model {}

aireAcondicionado.init({
    idAireAcondicionado: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    potencia: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    frecuencia: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cantidadTemperaturas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    modelo: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'aireAcondicionado',
    tableName: 'aireAcondicionado',
    timestamps: false
});

module.exports = aireAcondicionado;