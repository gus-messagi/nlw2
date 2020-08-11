import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const router = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

router.post('/classes', classesController.create);
router.get('/classes', classesController.index);

router.post('/connections', connectionsController.create);
router.get('/connections', connectionsController.index);


export default router;
