const aireAcondicionadoModel = require('../models/aireAcondicionado');

const aireAcondicionadoController = {
    getAires: async (_req, res) => {
        try {
            const airesAcondicionados = await aireAcondicionadoModel.findAll();
            res.status(200).json(airesAcondicionados);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getAire: async (_req, res) => {
        try {
            const aireAcondicionado = await aireAcondicionadoModel.findOne();
            res.status(200).json(aireAcondicionado);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    createAire: async (req, res) => {
        try {
            const descripcion = req.body.descripcion;
            const modelo = req.body.modelo;
            const marca = req.body.marca;
            const nombre = req.body.nombre;
            const cantidadTemperaturas = req.body.cantidadTemperaturas;
            const frecuencia = req.body.frecuencia;
            const potencia = req.body.potencia;
            const idAireAcondicionado = req.body.idAireAcondicionado;

            const aireAcondicionado = await aireAcondicionadoModel.create({
                descripcion: descripcion,
                modelo: modelo,
                marca: marca,
                nombre: nombre,
                cantidadTemperaturas: cantidadTemperaturas,
                frecuencia: frecuencia,
                potencia: potencia,
                idAireAcondicionado: idAireAcondicionado 
            });

            res.status(201).json(aireAcondicionado);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateAire: async (req, res) => {
        try {
            const descripcion = req.body.descripcion;
            const modelo = req.body.modelo;
            const marca = req.body.marca;
            const nombre = req.body.nombre;
            const cantidadTemperaturas = req.body.cantidadTemperaturas;
            const frecuencia = req.body.frecuencia;
            const potencia = req.body.potencia;
            const idAireAcondicionado = req.params.id;

            await aireAcondicionadoModel.update({ 
                descripcion: descripcion,
                modelo: modelo,
                marca: marca,
                nombre: nombre,
                cantidadTemperaturas: cantidadTemperaturas,
                frecuencia: frecuencia,
                potencia: potencia
                },
                {
                  where: {
                    idAireAcondicionado: idAireAcondicionado,
                  },
                },
              );
            res.status(200).json("actualizado exitosamente");
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteAire: async (req, res) => {
        try {
            const idAireAcondicionado = req.params.id;

            await aireAcondicionadoModel.destroy({
                where: {
                    idAireAcondicionado: idAireAcondicionado,
                },
            });

            res.status(200).json("Eliminado exitosamente");
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = aireAcondicionadoController;