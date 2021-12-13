# the8Agency-challenge
The 8Agency fullstack technical challenge.

## Ver deploy en [Heroku](https://reta-social-event-client.herokuapp.com/).

## Rutas de la app
- `http://localhost:3000/`          El Home de la app. Muestra un formulario para inscribirse al evento.
- `http://localhost:3000/attendees` Muestra un listado de las personas que se inscribieron al evento.


## Requisitos para correr el proyecto de forma local
- Tener NPM y Node.js instalado
- Tener GIT instalado
- Tener MongoDB instalado

## Como instalar e iniciar el proyecto

### 1 - Clonar el repositorio

Desde la consola ingresando:

```
git clone https://github.com/retaLazyCodes/the8Agency-challenge.git
```
o haciendo click en el botón verde **Code** y finalmente en **Download ZIP**, luego descomprimirlo.

### 2 - Instalación de dependencias

Con la consola posicionada dentro de la carpeta `/front` y luego `/server` repetir el siguiente comando

```
npm install
```

### 3 - Iniciar el servidor

- Se deberá crear un archivo `.env` dentro de la carpeta `/server`.
- El archivo `.env` debe tener la siguiente variable.

```
MONGO_DB_URI_DEV=mongodb://127.0.0.1:27017/event_db
```

- Con la consola posicionada en la carpeta `/server` correr el comando `npm run dev`.

### 4 - Iniciar el frontend

- Posicionandosé en la carpeta `/front` correr el comando `npm start`, esto iniciará el proyecto en el navegador por defecto en el puerto `3000`.

### 5 - Ejecutar tests

- Posicionandosé en la carpeta `/server` correr el comando `npm run test`.
