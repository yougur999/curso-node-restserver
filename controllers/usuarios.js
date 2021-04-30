const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {

    const query = req.query;

    res.json({
        ok: true,
        msg: 'get API - controlador',
        query
    });
}

const usuariosPut = (req, res) => {

    const id = req.params.id;

    res.json({
        ok: true,
        msg: 'put API - controlador',
        id
    });
}

const usuariosPost = (req, res) => {

    const body = req.body;

    res.json({
        ok: true,
        msg: 'post API - controlador',
        body
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        ok: true,
        msg: 'delete API - controlador'
    });
}



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}