/**
 * PURPOSE: Base model for the purpose of collecting Analytics from a user.
 *          No personal data is collected from a user.
 *
 * @author: LocalNewsTV
 */
import mongoose from 'mongoose';

const AnalyticSchema = new mongoose.Schema({
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  functionalityUsed: {
    search: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 62,
    },
    function: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 15,
    },
  },
  date: {
    type: Date,
    required: false,
    default: new Date(),
  },
});

AnalyticSchema.set('toJSON', {
  versionKey: false,
  virtuals: true,
  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  transform: (doc, ret) => { delete ret._id; },
});

export default mongoose.model('analytic', AnalyticSchema);
