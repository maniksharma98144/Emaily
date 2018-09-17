const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./recipients');

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [RecipientSchema],
    yes: {
        type: Number,
        default: false
    },
    no: {
        type: Number,
        default: false
    },
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    dateSent: Date,
    lastResponded: Date
});

mongoose.model('surveys', surveySchema);