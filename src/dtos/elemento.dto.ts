/**
 * @openapi
 * components:
 *   schemas:
 *     ElementoDto:
 *       type: object
 *       required:
 *         - id
 *         - nombre
 *         - descripcion
 *         - activo
 *       properties:
 *         id:
 *           type: integer
 *           description: Identificador único del elemento
 *           example: 1
 *         nombre:
 *           type: string
 *           description: Nombre del elemento
 *           example: Elemento Uno
 *         descripcion:
 *           type: string
 *           description: Descripción del elemento
 *           example: Descripción del primer elemento
 *         activo:
 *           type: boolean
 *           description: Indica si el elemento está activo
 *           example: true
 */

/**
 * Data Transfer Object for an Elemento (Element).
 */
export interface ElementoDto {
  id: number;
  nombre: string;
  descripcion: string;
  activo: boolean;
}

/**
 * API response wrapper for a list of elementos.
 */
export interface ElementosResponseDto {
  success: boolean;
  total: number;
  data: ElementoDto[];
}
