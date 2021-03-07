import { Router } from 'express'
import { getRepository } from 'typeorm'

import Recipe from '../models/Recipe'

const recipesRouter = Router()

recipesRouter.get('/', async (request, response) => {
  const questionsRepository = getRepository(Recipe)

  const selectedQuestions = await questionsRepository.find()

  return response.json(selectedQuestions)
})

export default recipesRouter
