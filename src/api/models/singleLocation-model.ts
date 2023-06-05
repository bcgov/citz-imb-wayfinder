/**
 * @summary Definition of the Schema model representing a Single ServiceBC Office.
 * @author  LocalNewsTV
 */
import mongoose from 'mongoose';

const SingleLocationSchema = new mongoose.Schema({
  contact: {
    fax: { type: String },
    phone: { type: String },
  },
  services: { type: [] },
  address: {
    province: { type: String },
    street: { type: String },
    postal_code: { type: String },
    region: { type: String },
    county: { type: String },
    locality: { type: String },
    label: { type: String },
  },
  locale: { type: String },
  website: { type: String },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },

});

// Clean up the return values to remove __v tag
SingleLocationSchema.set('toJSON', {
  versionKey: false,
  virtuals: true,
  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  transform: (doc, ret) => { delete ret._id; },
});

export default mongoose.model('location', SingleLocationSchema);
