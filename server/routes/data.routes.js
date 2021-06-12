import express from 'express';
import dataCtrl from '../controllers/data.controller';
const router=express.Router();

router.route('/loadData')
.post(dataCtrl.loadData);

export default router;