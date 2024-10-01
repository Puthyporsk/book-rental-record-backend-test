import mongoose from 'mongoose';
import Book from './book.js';
const { Schema, model } = mongoose;

const studentSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    grade: { type: Number, required: false, default: 0 },
    book_rental: { type: [Object], required: false },
});

const Student = model('Student', studentSchema);
export default Student;
