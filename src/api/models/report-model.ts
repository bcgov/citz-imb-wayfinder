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
    minLength: 4,
    maxLength: 32,
    trim: true,
    match: /^[a-zA-Z\s]+$/i,
  },
  details: {
    type: String,
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
  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  transform: (doc, ret) => { delete ret._id; },
});

export default mongoose.model('report', ReportSchema);
