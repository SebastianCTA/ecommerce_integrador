const express = require('express');
const axios = require('axios');

const router = express.Router();
const apiUrl = process.env.URL_DNI_API;
const token = process.env.TOKEN_DNI;

router.get('/:numero', async (req, res) => {
    const dni = req.params.numero;

    try {
        const response = await axios.get(apiUrl, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Referer': 'https://apis.net.pe/consulta-dni-api',
            },
            params: { numero: dni }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al consultar el DNI' });
    }
});