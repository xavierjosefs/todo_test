````md
# Todo Test

Este proyecto es una aplicación web de lista de tareas desarrollada como parte de una prueba técnica de pasantía.

La aplicación permite crear, visualizar, editar, eliminar y marcar tareas como completadas. Cada tarea contiene un título, un contenido y fechas automáticas de creación y actualización.

## Tecnologías utilizadas

### Frontend

- React
- Vite
- JavaScript
- Tailwindcss

### Backend

- Node.js
- Express
- MongoDB
- Mongoose

## Funcionalidades

- Crear una nueva tarea.
- Listar todas las tareas.
- Editar una tarea existente.
- Eliminar una tarea.
- Marcar una tarea como completada o pendiente.
- Mostrar la fecha de creación de la tarea.
- Mostrar la fecha de última actualización de la tarea.

## Estructura del proyecto

```txt
todo_test/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   └── todo.controller.js
│   │   ├── models/
│   │   │   └── todo.model.js
│   │   ├── routes/
│   │   │   └── todo.routes.js
│   │   └── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   └── package.json
│
└── README.md
````

## Requisitos previos

Antes de iniciar el proyecto, debes tener instalado:

* Node.js
* npm
* Git
* Una base de datos en MongoDB Atlas o MongoDB local

## Configuración del backend

Primero entra a la carpeta del backend:

```bash
cd backend
```

Instala las dependencias:

```bash
npm install
```

Crea un archivo `.env` dentro de la carpeta `backend` con las siguientes variables:

```env
PORT=5000
MONGO_URI=tu_url_de_conexion_a_mongodb
```

Ejemplo:

```env
PORT=5000
MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/todo_test?retryWrites=true&w=majority
```

Luego inicia el servidor:

```bash
npm run dev
```

El backend se ejecutará en:

```txt
http://localhost:5000
```

## Endpoints del backend

### Obtener todas las tareas

```txt
GET /api/todos
```

### Obtener una tarea por ID

```txt
GET /api/todos/:id
```

### Crear una tarea

```txt
POST /api/todos
```

Ejemplo de body:

```json
{
  "title": "Mi primera tarea",
  "content": "Contenido de la tarea"
}
```

### Actualizar una tarea

```txt
PUT /api/todos/:id
```

Ejemplo de body:

```json
{
  "title": "Tarea actualizada",
  "content": "Nuevo contenido",
  "completed": false
}
```

### Marcar o desmarcar como completada

```txt
PATCH /api/todos/:id/toggle-completed
```

### Eliminar una tarea

```txt
DELETE /api/todos/:id
```

## Configuración del frontend

En otra terminal, entra a la carpeta del frontend:

```bash
cd frontend
```

Instala las dependencias:

```bash
npm install
```

Inicia el proyecto:

```bash
npm run dev
```

El frontend se ejecutará normalmente en:

```txt
http://localhost:5173
```

## Cómo ejecutar el proyecto completo

Para correr el proyecto completo debes tener dos terminales abiertas.

En la primera terminal:

```bash
cd backend
npm run dev
```

En la segunda terminal:

```bash
cd frontend
npm run dev
```

Luego abre el navegador en:

```txt
http://localhost:5173
```

## Variables de entorno

El archivo `.env` no se sube al repositorio por seguridad.
Por eso, cada persona que descargue el proyecto debe crear su propio archivo `.env` dentro de la carpeta `backend`.

También se puede usar un archivo `.env.example` como referencia:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## Notas del proyecto

Este proyecto fue desarrollado con una estructura sencilla para que sea fácil de entender, ejecutar y mantener.

La idea principal fue cumplir con las funcionalidades solicitadas en la prueba técnica, manteniendo el código organizado en frontend y backend.

## Autor

Xavier Jose Fernandez Santana

