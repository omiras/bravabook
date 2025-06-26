# Bravabook

Este proyecto es una aplicación Node.js que utiliza MongoDB como base de datos y EJS como motor de vistas. A continuación se detallan los pasos para iniciar el proyecto y configurar las variables de entorno.

## Requisitos previos

- Node.js (v14 o superior)
- npm
- MongoDB (local o en la nube)

## Instalación

1. Clona este repositorio o descarga el código fuente.
2. Instala las dependencias ejecutando:

```bash
npm install
```

## Configuración de variables de entorno

1. Crea un archivo `.env` en la raíz del proyecto basado en el archivo `.env.example`:

```bash
cp .env.example .env
```

2. Abre el archivo `.env` y completa los valores:

- `PORT`: Puerto en el que se ejecutará la aplicación (por ejemplo, 3000).
- `MONGODB_URI`: URI de conexión a tu base de datos MongoDB (por ejemplo, `mongodb://localhost:27017/bravabook`).

Ejemplo:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/bravabook
```

## Ejecución del proyecto

Inicia la aplicación con el siguiente comando:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:<PORT>`.

## Estructura del proyecto

- `index.js`: Punto de entrada de la aplicación.
- `models/`: Modelos de datos (Mongoose).
- `utils/`: Utilidades y configuración de la base de datos.
- `views/`: Vistas EJS.

## Notas

- Asegúrate de que MongoDB esté en ejecución antes de iniciar la aplicación.
- Si tienes dudas, revisa el archivo `.env.example` para ver los nombres de las variables requeridas.
