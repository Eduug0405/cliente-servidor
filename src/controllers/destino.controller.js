const Destino = require ('../models/destinos.models');

const index = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;
        const { sort, order } = req.query;

        const destinos = await Destino.getAll();

        if (destinos.length === 0) {
            return res.status(404).json({
                message: "No se encontraron destinos en la base de datos",
            });
        }

        let response = {
            message: "Destinos obtenidos exitosamente",
            data: destinos,
        };

        res.json(response);
    } catch (error) {
        return res.status(500).json({
            message: "Ocurrió un error al obtener los destinos",
            error: error.message,
        });
    }
};


module.exports ={
    index
}