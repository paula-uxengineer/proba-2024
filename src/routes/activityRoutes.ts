import { Router } from 'express';
import {
  createActivity,
  exportActivities,
  getActivities,
  importActivities,
  joinActivity
} from '../controllers/activityController';

const router = Router();

router.post('/activity', createActivity);
router.get('/activities', getActivities);
router.post('/participate/:userId/:activityId', joinActivity);
router.post('/export', exportActivities);
router.get('/import', importActivities);

export default router;
