import express from 'express';
import filterController from './filterController';

const router = express.Router();

router.get('/list', filterController.list);

export default router;