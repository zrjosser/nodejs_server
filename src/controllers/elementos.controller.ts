import { Request, Response } from 'express';
import { ElementosService } from '../services/elementos.service';
import { ElementosResponseDto } from '../dtos/elemento.dto';

const elementosService = new ElementosService();

export const getElementos = (_req: Request, res: Response): void => {
  const data = elementosService.getAll();

  const response: ElementosResponseDto = {
    success: true,
    total: data.length,
    data,
  };

  res.status(200).json(response);
};
