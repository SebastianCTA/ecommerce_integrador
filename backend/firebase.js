const admin = require('firebase-admin');
const serviceAccount = require('./firebase-key.json'); // Ruta al archivo de credenciales

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'gs://your-firebase-bucket.appspot.com' // Opcional si usas Firebase Storage
});

// Exporta la instancia de Firebase Authentication
module.exports = admin.auth();
