# nodejs_server

API REST construida con **Node.js**, **Express** y **TypeScript**, siguiendo buenas prácticas de desarrollo y arquitectura limpia.

## Tabla de contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Variables de entorno](#variables-de-entorno)
- [Levantar el servicio](#levantar-el-servicio)
- [Endpoints disponibles](#endpoints-disponibles)
- [Documentación Swagger](#documentación-swagger)
- [Estructura del proyecto](#estructura-del-proyecto)

---

## Requisitos

- [Node.js](https://nodejs.org/) v18 o superior
- npm v9 o superior

---

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/zrjosser/prueba_tecnica.git
cd prueba_tecnica

# Instalar dependencias
npm install
```

---

## Variables de entorno

El proyecto utiliza un archivo `.env` para la configuración. Copia el archivo de ejemplo y ajusta los valores según tu entorno:

```bash
cp .env.example .env
```

| Variable    | Descripción                        | Valor por defecto |
|-------------|------------------------------------|-------------------|
| `PORT`      | Puerto en que escucha el servidor  | `3000`            |
| `HOST`      | Host en que escucha el servidor    | `localhost`       |
| `NODE_ENV`  | Entorno de ejecución               | `development`     |

---

## Levantar el servicio

### Modo desarrollo (con recarga automática)

```bash
npm run dev
```

### Modo producción

```bash
# Compilar TypeScript
npm run build

# Iniciar el servidor
npm start
```

El servidor estará disponible en `http://localhost:3000` (o el puerto configurado en `.env`).

---

## Endpoints disponibles

### `GET /api/v1.0/elementos`

Retorna la lista de todos los elementos.

**Respuesta exitosa (200):**

```json
{
  "success": true,
  "total": 5,
  "data": [
    {
      "id": 1,
      "nombre": "Elemento Uno",
      "descripcion": "Descripción del primer elemento",
      "activo": true
    },
    ...
  ]
}
```

---

## Documentación Swagger

La documentación interactiva de la API (OpenAPI 3.0) está disponible en:

```
http://localhost:3000/api-docs
```

---

## Estructura del proyecto

```
src/
├── config/
│   └── swagger.config.ts      # Configuración de Swagger/OpenAPI
├── controllers/
│   └── elementos.controller.ts # Manejadores de las rutas
├── dtos/
│   └── elemento.dto.ts         # Data Transfer Objects (tipos TypeScript)
├── routes/
│   └── elementos.routes.ts     # Definición de rutas con anotaciones Swagger
├── services/
│   └── elementos.service.ts    # Lógica de negocio con datos mock
├── app.ts                      # Configuración de la aplicación Express
└── server.ts                   # Punto de entrada del servidor
```
