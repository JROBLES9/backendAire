const express = require("express");
const aireAcondicionadoController = require("./src/controllers/aireAcondicionado");
const aireAcondicionadoModel = require("./src/models/aireAcondicionado");

const app = express();

app.get('/aireAcondicionado/all', aireAcondicionadoController.getAires);
app.get('/aireAcondicionado/:id', aireAcondicionadoController.getAire);
app.post('/aireAcondicionado/', aireAcondicionadoController.createAire);
app.put('/aireAcondicionado/:id', aireAcondicionadoController.updateAire);
app.delete('/aireAcondicionado/:id', aireAcondicionadoController.deleteAire);

jest.mock('../../src/models/aireAcondicionado',() => ({
    create: jest.fn(),
    findAll: jest.fn(),
    findByPk: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn()
}));

describe('aireAcondicionadoController', () => {
    describe('createAireAcondicionado', () => {
        it('Crea una aire Acondicionado y devuelve un mensaje de exito', async () => {
            const mockAireAcondicionado = {
                descripcion: "NO hace frio inge",
                modelo: "modelo",
                marca: "marca",
                nombre: "nombre",
                cantidadTemperaturas: 1,
                frecuencia: 2,
                potencia: 3,
                idAireAcondicionado: 1
            };
            const mockResponse = { message: "Alerta creada exitosamente.", id: createAireAcondicionado.idAireAcondicionado };
            (aireAcondicionadoModel.create).mockResolvedValue(mockAireAcondicionado);

            const req = {
                body: {
                    descripcion: "NO hace frio inge",
                    modelo: "modelo",
                    marca: "marca",
                    nombre: "nombre",
                    cantidadTemperaturas: 1,
                    frecuencia: 2,
                    potencia: 3
                }
            };

            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            await aireAcondicionadoController.createAireAcondicionado(req, res);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith(mockResponse);
        });

        it('Retorna un mensaje de error si falla', async () => {
            const mockError = new Error('Error al crear la alerta');
            (AlertaModel.create).mockRejectedValue(mockError);

            const req = {
                body: { id_proyectos: 1, state: true }
            };

            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            await AlertaController.createAlerta(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: "Error al crear la alerta.", error: mockError.message });
        });
    
    });
});