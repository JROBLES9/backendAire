const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(
	process.env.DB_DATABASE || '',
	process.env.DB_USER || '',
	process.env.DB_PASSWORD || '',
	{
	  host: process.env.DB_HOST,
	  dialect: 'mysql',
	  timezone: '-06:00', // Zona horaria de la aplicación
	  dialectOptions: {
		typeCast: function (field, next) {
		  if (field.type === 'DATETIME') {
			return field.string(); // Devuelve las fechas como cadenas
		  }
		  return next();
		}
	  },
	  pool: {
		max: 10,
		min: 0,
		acquire: 30000,
		idle: 10000
	  },
	  hooks: {
		afterConnect: async (connection) => {
		  return new Promise((resolve, reject) => {
			connection.query(`SET time_zone = '-06:00';`, (err) => {
			  if (err) {
				console.error('Error al establecer la zona horaria de la sesión:', err);
				return reject(err);
			  }
			  console.log("Zona horaria de la sesión establecida a '-06:00'");
			  resolve();
			});
		  });
		}
	  }
	}
  );
  

module.exports = sequelize;
