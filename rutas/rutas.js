var express = require('express');
var router = express.Router();
var fcargos = require('./rutas_cargos.js');

router.get('/',c_inicio);
router.get('/mantenimientos',c_mantenimiento);
router.get('/procesos',c_procesos);
router.get('/reportes',c_reportes);

//Opciones de mantenimientos cargos
router.get('/m_cargos_listado', fcargos.listado);
router.get('/m_cargos_nuevo', fcargos.nuevo);
router.post('/m_cargos_grabar_nuevo',fcargos.grabar_nuevo);
router.get('/m_cargos_editar/:xid',fcargos.editar);
router.post('/m_cargos_grabar_editar',fcargos.grabareditar);
router.get('/m_cargos_eliminar/:xid',fcargos.eliminar);

function c_inicio(req,res){
    res.render('index',{});
}

function c_mantenimiento(req,res){
    res.render('mantenimientos',{});
}

function c_procesos(req,res){
    res.send('procesos');
}

function c_reportes(req,res){
    res.send('reportes');
}

module.exports=router;  