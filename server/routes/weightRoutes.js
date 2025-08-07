import express from 'express'
const router = express.Router();
import {addWeight , getWeight} from '../controller/weightController.js'

import protect from '../middleware/authMiddleware.js'

router.post('/add' , protect ,addWeight)
router.get('/visualise',protect , getWeight);

export default router;