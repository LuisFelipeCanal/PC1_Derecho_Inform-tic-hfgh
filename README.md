# Plantilla de Inicio de Sesión de Instagram - Caso de Estudio

⚠️ **ADVERTENCIA LEGAL**: Este proyecto es únicamente para fines educativos y académicos como parte de un trabajo de Derecho Informático. NO está desplegado y NO debe ser utilizado con fines maliciosos o ilegales.

## Descripción

Plantilla educativa de inicio de sesión de Instagram que demuestra técnicas de ingeniería social con propósitos de análisis de ciberseguridad. El proyecto incluye:

- Interfaz de login que replica el diseño de Instagram
- Sistema de captura de credenciales guardadas localmente en Excel
- Redirección automática a Instagram tras el envío del formulario
- **Exclusivamente para estudio académico sobre phishing y ciberseguridad**

## Características Técnicas

- React + Vite
- Tailwind CSS para el diseño
- Backend Node.js + Express
- Almacenamiento de credenciales en archivo Excel (xlsx)
- Redirección automática a Instagram

## Requisitos

- Node.js (v14 o superior)
- npm o yarn

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:
```bash
npm install
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
2. Las credenciales se guardan en `credenciales.xlsx` en el directorio raíz
3. El usuario es redirigido automáticamente a Instagram
4. Las credenciales quedan almacenadas localmente con timestamp

## Archivo de Credenciales

El archivo `credenciales.xlsx` contendrá:
- Fecha y Hora
- Usuario/Email ingresado
- Contraseña ingresada

## Propósito Educativo

Este proyecto fue desarrollado como material de estudio para:
- Análisis de técnicas de phishing
- Comprensión de ingeniería social
- Educación sobre ciberseguridad
- Trabajo práctico de Derecho Informático

## Consideraciones Éticas y Legales

- ❌ NO usar para capturar credenciales reales
- ❌ NO desplegar en servidores públicos
- ❌ NO usar con fines maliciosos
- ✅ Solo para análisis académico en entorno controlado
- ✅ Solo para educación sobre ciberseguridad

## Responsabilidad

El uso indebido de este código es responsabilidad única del usuario. Este proyecto se proporciona "tal cual" únicamente con fines educativos.

---

**Proyecto Académico - Derecho Informático**
