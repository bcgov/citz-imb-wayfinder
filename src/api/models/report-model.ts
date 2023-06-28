/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/**
 * @summary Definition of the Schema Model representing a User Report
 * @author LocalNewsTV
 */
import mongoose from 'mongoose';

const ReportSchema = new mongoose.Schema({
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  eventType: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 32,
    trim: true,
    match: /^(Damaged Infrastructure|Animal Sighting|Suggestion\/Complaint|Miscellaneous|APITest)$/i,
  },
  details: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 256,
    trim: true,
  },
  phone: {
    required: false,
    type: String,
    minLength: 10,
    maxLength: 16,
    match: /^(?:\+?1-?)?(?:\(\d{3}\)|\d{3})-?\d{3}-?\d{4}$/gi,
  },
});

ReportSchema.set('toJSON', {
  versionKey: false,
  virtuals: true,
  transform: (doc, ret) => {
    ret.ticketNum = ret._id;
    delete ret._id;
    delete ret.id;
  },
});

export default mongoose.model('report', ReportSchema);
