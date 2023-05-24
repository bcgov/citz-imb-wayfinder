import mongoose from 'mongoose';

const SingleLocationSchema = new mongoose.Schema({
  External_Site: { type: String },
  Address: { type: String },
  Locality: { type: String },
  Site_Phone_No: { type: String },
  Site_Fax_no: { type: String },
  Website_URL: { type: String },
  Site_Email: { type: String },
  Latitude: { type: Number },
  Longitude: { type: Number },
  Office_Code: { type: String },
});

SingleLocationSchema.set('toJSON', {
  versionKey: false,
  virtuals: true,
  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  transform: (doc, ret) => { delete ret._id; },
});

export default mongoose.model('location', SingleLocationSchema);
