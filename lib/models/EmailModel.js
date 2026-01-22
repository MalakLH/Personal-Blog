import mongoose from 'mongoose';

const EmailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true, // Add unique constraint
        trim: true
    },
    date: {
        type: Date,
        default: Date.now // Remove parentheses to get current date on creation
    }
});

// Use consistent naming - either 'Email' or 'email'
const EmailModel = mongoose.models.Email || mongoose.model('Email', EmailSchema);

export default EmailModel;
