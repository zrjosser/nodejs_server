import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Elementos API',
      version: '1.0.0',
      description: 'API REST para la gestión de elementos, construida con Node.js, Express y TypeScript.',
      contact: {
        name: 'Soporte API',
        email: 'soporte@ejemplo.com',
      },
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT ?? 3000}`,
        description: 'Servidor de desarrollo',
      },
    ],
    tags: [
      {
        name: 'Elementos',
        description: 'Operaciones sobre elementos',
      },
    ],
  },
  apis: ['./src/routes/*.ts', './src/dtos/*.ts'],
};

export const swaggerSpec = swaggerJsdoc(options);
