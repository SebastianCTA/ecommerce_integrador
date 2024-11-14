const Persona = require('../models/personaModel');
const Usuario = require('../models/usuarioModel');
const auth = require('../firebase'); // Importa desde el archivo donde configuras Firebase

const mongoose = require('mongoose');


// Función para insertar usuario y persona
async function insertarUsuario(req, res) {
    try {
      const { persona, usuario } = req.body;
  
      if (!persona || !usuario) {
        return res.status(400).send({ message: 'Los datos de persona y usuario son requeridos' });
      }
  
      if (!usuario.correo || !usuario.password) {
        return res.status(400).send({ message: 'Correo y contraseña son obligatorios' });
      }
  
      const id_persona = new mongoose.Types.ObjectId();
      const id_usuario = new mongoose.Types.ObjectId();
  
      let firebaseUser;
      try {
        firebaseUser = await auth.createUser({
          email: usuario.correo,
          password: usuario.password,
        });
        console.log('Usuario registrado en Firebase con UID:', firebaseUser.uid);
      } catch (firebaseError) {
        console.error('Error al registrar usuario en Firebase:', firebaseError);
        return res.status(500).send({
          message: 'Error al registrar usuario en Firebase',
          error: firebaseError.message,
        });
      }
  
      try {
        const nuevaPersona = new Persona({
          _id: id_persona,
          numero_documento: persona.numero_documento,
          nombres: persona.nombres,
          apellido_paterno: persona.apellido_paterno,
          apellido_materno: persona.apellido_materno,
          foto: persona.foto || null,
          createdAt: new Date(),
        });
        await nuevaPersona.save();
      } catch (mongoError) {
        await auth.deleteUser(firebaseUser.uid);
        return res.status(500).send({ message: 'Error al guardar persona en la base de datos', error: mongoError.message });
      }
  
      try {
        const nuevoUsuario = new Usuario({
          _id: id_usuario,
          id_persona: id_persona,
          correo: usuario.correo,
          createdAt: new Date(),
        });
        await nuevoUsuario.save();
      } catch (mongoError) {
        await auth.deleteUser(firebaseUser.uid);
        await Persona.deleteOne({ _id: id_persona });
        return res.status(500).send({ message: 'Error al guardar usuario en la base de datos', error: mongoError.message });
      }
  
      return res.status(200).send({
        message: 'Usuario y persona creados correctamente',
        data: {
          usuario: { id: id_usuario, correo: usuario.correo },
          persona: { id: id_persona, ...persona },
        },
      });
    } catch (error) {
      console.error('Error general en el controlador:', error);
      return res.status(500).send({ message: 'Error al registrar usuario y persona', error: error.message });
    }
  }
  
module.exports = {
    insertarUsuario,

}