import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { AppError } from '../errors/AppError';

import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';

class AnswerController {
  /* http://localhost:3333/answers/1?u=d55bfa2e-fde2-4f04-b56f-b06d4c29f0aa */
  /* Route params = parametros que compoe a rota, exemplo= /answers/:value */
  /* Query params = Busca, Paginacao, nao obrigatorios, exemplo= o que vem depois de ? 
    chave=valor
  */
  async execute(request: Request, response: Response) {
    const { value } = request.params;
    const { u } = request.query;

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const surveyUser = await surveysUsersRepository.findOne({
      id: String(u),
    });

    if (!surveyUser) {
      throw new AppError('Survey User does not exists!');
    }

    surveyUser.value = Number(value);

    await surveysUsersRepository.save(surveyUser);

    return response.json(surveyUser);
  }
}

export { AnswerController };
