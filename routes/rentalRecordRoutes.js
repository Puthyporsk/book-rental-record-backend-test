import express from 'express';
const router = express.Router();
import rentalRecordController from '../controllers/rentalRecordController.js';

router.get('/getAll', rentalRecordController.findRentalRecord);
router.post('/create', rentalRecordController.createRentalRecord);
router.put('/edit', rentalRecordController.editRentalRecord);

export default router;
