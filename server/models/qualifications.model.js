import mongoose from 'mongoose';

const QualificationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Title is required',
        trim: true
    },
    first_name: {
        type: String,
        trim: true,
        required: 'First name is required'
    },
    last_name: {
        type: String,
        trim: true,
        required: 'Last name is required'
    },
    email: {
        type: String,
        trim: true,
        unique: 'Email already exists',
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Email is required'
    },
    completion: {
        type: Date,
        default: null
    },
    description: {
        type: String,
        trim: true,
        required: 'Description is required'
    }
});

export default mongoose.model('Qualification', QualificationSchema);
