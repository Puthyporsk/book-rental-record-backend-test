import RentalRecord from "../model/rentalRecord.js";

const findRentalRecord = async (req, res, next) => {
    let rentalRecords;
    try {
        rentalRecords = await RentalRecord.find({});
    } catch (err) {
        console.error(err);
    }
  
    res.status(200).json({ rentalRecords: rentalRecords });
};

const createRentalRecord = async (req, res, next) => {
    const {
        student,
        rental_date,
        paid,
        payment_due,
        comment,
        purchased_items,
    } = req.body;

    const createdRecord = new RentalRecord({
        student,
        rental_date,
        paid,
        payment_due,
        comment,
        purchased_items,
    });

    try {
        await createdRecord.save();
    } catch (err) {
        console.error(err);
    }

    res.status(201).json({ rentalRecords: createdRecord.toObject({ getters: true }) });
};

const editRentalRecord = async (req, res, next) => {
    const {
        _id: record_id,
        paid,
    } = req.body;

    let rentalRecords;
    try {
        rentalRecords = await RentalRecord.findOneAndUpdate(
            { _id: record_id},
            { paid: paid },
            {
                upsert: true,
                returnDocument: "after",
            }
        );
    } catch (err) {
        console.error(err);
    }
    res.status(200).json({ rentalRecords: rentalRecords });
};

export default { findRentalRecord, createRentalRecord, editRentalRecord };