import Student from "../model/student.js";

const findStudent = async (req, res, next) => {
    let students;
    try {
        students = await Student.find({});
    } catch (err) {
        console.error(err);
    }
  
    res.status(200).json({ students: students });
};

const createStudent = async (req, res, next) => {
    const { first_name, last_name, grade, book_rental } = req.body;

    let existingStudent;
    try {
        const students = await Student.find();
        existingStudent = students.find((s) => s.first_name.toLocaleLowerCase() === first_name.toLocaleLowerCase() && s.last_name.toLocaleLowerCase() === last_name.toLocaleLowerCase())
    } catch (err) {
        console.error(err);
    }

    if (existingStudent) {
        console.error("Student Already Exists!");
        res.status(409).json({ message: "Student Already Exists! Duplicates Are NOT Allowed!" });
    } else {
        const createdStudent = new Student({
            first_name,
            last_name,
            grade: grade || 0,
            book_rental,
        });
    
        try {
            await createdStudent.save();
        } catch (err) {
            console.error(err);
        }
    
        res.status(201).json({ student: createdStudent.toObject({ getters: true }) });
    }
};

const editStudent = async (req, res, next) => {
    const { _id, book_rental } = req.body;

    let existingStudent;
    try {
        existingStudent = await Student.findOneAndUpdate({
            _id: _id,
        }, {
            book_rental: book_rental,
        });
    } catch (err) {
        console.error(err);
    }

    res.status(201).json({ student: existingStudent.toObject({ getters: true }) });
};

export default { findStudent, createStudent, editStudent };