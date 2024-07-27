const getBusinessesperUser = require('../../services/businessesServices/getBusinessesperUserService');

const getBusinessesperUserController = async (req, res) => {
    const { user_id } = req.params;

    if (!user_id) {
        return res.status(400).json({ error: 'El id del usuario es requerido' });
    }

    try {
        const businesses = await getBusinessesperUser(user_id);
        return res.status(200).json(businesses);
    } catch (error) {
        console.error('Error en getBusinessesperUserController:', error);
        return res.status(500).json({ error: 'Ocurrió un error al procesar la solicitud' });
    }
};

module.exports = getBusinessesperUserController;