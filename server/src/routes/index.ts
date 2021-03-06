import { Router } from 'express'

import recipesRouter from './recipes.routes'
// import studentsRouter from './students.routes'
// import testsRouter from './tests.routes'

const routes = Router()

routes.use('/recipes', recipesRouter)
// routes.use('/students', studentsRouter)
// routes.use('/tests', testsRouter)

export default routes
