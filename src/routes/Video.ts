import { Router } from 'express';
import * as videoController from '../controller/Video';
const router = Router();

router.post('/createVideo', videoController.createVideo);
router.get('/getVideo/:id', videoController.getVideo);
router.get('/getVideos', videoController.getVideos);
router.patch('/updateVideo/:id', videoController.updateVideo);
router.delete('/deleteVideo/:id', videoController.deleteVideo);

export default router;
