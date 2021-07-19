import { Router } from 'express'
const router = Router()
import * as skillsCtrl from '../controllers/skills.js'

export {
  router
}


router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.get('/:id', skillsCtrl.show)
router.post('/', skillsCtrl.create)
router.delete('/:id', skillsCtrl.delete)