const getBusinessService = require("../../services/businessesServices/getBusinessService");

const getBusinessController = async (req, res) => {
    const { user_id, business_id } = req.params;

    if (!user_id || !business_id) {
        return res.status(400).json({
            error: "El ID del negocio e ID del propietario son requeridos."
        });
    }

    try {
        const business = await getBusinessService(user_id, business_id);
        
        if (!business || business.length === 0) {
            return res.status(404).json({
                error: "No se encontró el negocio para el usuario especificado."
            });
        }

        return res.status(200).json(business);
    } catch (error) {
        console.error('Error en getBusinessController:', error);
        return res.status(500).json({
            error: "Ocurrió un error al procesar la solicitud."
        });
    }
};


module.exports = getBusinessController;