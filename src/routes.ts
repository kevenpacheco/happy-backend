import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import orphanagesControllers from './controllers/orphanagesControlles';

const routes = Router()
const upload = multer(uploadConfig);

routes.get('/orphanages', orphanagesControllers.index);
routes.get('/orphanages/:id', orphanagesControllers.show);
routes.post('/orphanages', upload.array('images'), orphanagesControllers.create);

export default routes;