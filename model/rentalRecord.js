import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const rentalRecordSchema = new Schema({
    student: { type: Object, required: true },
    rental_date: { type: Date, required: true },
    paid: { type: Boolean, requied: true },
    payment_due: { type: Number, required: true },
    comment: { type: String, required: false },
    purchased_items: { type: [Object], required: true },
});

const RentalRecord = model('RentalRecord', rentalRecordSchema);
export default RentalRecord;
