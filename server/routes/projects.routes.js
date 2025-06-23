import express from 'express'
import projectCtrl from '../controllers/projects.controller.js'
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router()

router.route('/api/projects')
    .get(projectCtrl.list)
    .post(projectCtrl.create)
    .delete(projectCtrl.removeAll)

router.route('/api/projects/:projectId')
    .get(projectCtrl.read)
    .put(projectCtrl.update)
    .delete(projectCtrl.remove)

router.param('projectId', projectCtrl.projectByID)

export default router
