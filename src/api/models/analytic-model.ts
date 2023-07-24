/**
 * @summary Base model for the purpose of collecting Analytics from a user.
 *          No personal data is collected.
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
  usage: {
    search: {
      type: String,
      required: false,
      minLength: 4,
      maxLength: 62,
      trim: true,
    },
    function: {
      type: String,
      required: false,
      minLength: 4,
      maxLength: 16,
      trim: true,
      match: /^(find service|find location|report|report history|location details|settings|about|change log)$/i,
    },
    closestOffice: {
      required: false,
      type: {
        serviceType: {
          type: String,
          required: true,
          minLength: 4,
          maxLength: 20,
          trim: true,
          match: /^[a-zA-Z]+$/i,
        },
        locality: {
          type: String,
          required: true,
          minLength: 4,
          maxLength: 72,
          trim: true,
        },
      },
    },
    serviceType: {
      required: false,
      type: String,
      minLength: 4,
      maxLength: 20,
    },
    settings: {
      required: false,
      type: {
        valueStr: {
          required: false,
          type: String,
          minLength: 2,
          maxLength: 24,
        },
        valueBool: {
          required: false,
          type: Boolean,
        },
        settingType: {
          type: String,
          minLength: 4,
          maxLength: 20,
          match: /^(language|location range|offline mode|refresh data|clear cache)$/i,
        },
      },
    },
    newUser: {
      type: Boolean,
      required: false,
    },
    appLaunch: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

AnalyticSchema.set('toJSON', {
  versionKey: false,
  virtuals: true,
  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  transform: (doc, ret) => { delete ret._id; },
});

export default mongoose.model('analytic', AnalyticSchema);
