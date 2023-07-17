/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/**
 * @desc   UpdateDate schema for mongoose. Used in the Database to compare when information
 *         has been updated, facilitating smaller package sizes to the mobile device.
 * @author LocalNewsTV
 */
import mongoose from 'mongoose';

const UpdateDate = new mongoose.Schema({
  serviceType: {
    type: String,
    required: true,
  },
  dateModified: {
    type: Date,
    required: true,
  },
});

UpdateDate.set('toJSON', {
  versionKey: false,
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.id;
  },
});

export default mongoose.model('updateDate', UpdateDate);
