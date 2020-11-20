import express from 'express';
import jobController from './jobController';

const router = express.Router();

router.get('/list', jobController.list);

export default router;