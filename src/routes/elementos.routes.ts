import { Router } from 'express';
import { getElementos } from '../controllers/elementos.controller';

const router = Router();

/**
 * @openapi
 * /api/v1.0/elementos:
 *   get:
 *     tags:
 *       - Elementos
 *     summary: Obtiene la lista de elementos
 *     description: Retorna una lista completa de todos los elementos disponibles.
 *     responses:
 *       200:
 *         description: Lista de elementos obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 total:
 *                   type: integer
 *                   example: 5
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ElementoDto'
 *       500:
 *         description: Error interno del servidor
 */
router.get('/', getElementos);

export default router;
