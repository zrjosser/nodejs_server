import 'dotenv/config';
import app from './app';

const PORT: number = parseInt(process.env.PORT ?? '3000', 10);
const HOST: string = process.env.HOST ?? 'localhost';

app.listen(PORT, HOST, () => {
  console.log(`✅ Servidor corriendo en http://${HOST}:${PORT}`);
  console.log(`📖 Documentación Swagger en http://${HOST}:${PORT}/api-docs`);
});
