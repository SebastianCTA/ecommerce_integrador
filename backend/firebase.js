import admin from 'firebase-admin';
import serviceAccount from './firebase-key.json'; // Asegúrate de descargar el archivo de credenciales de Firebase

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
