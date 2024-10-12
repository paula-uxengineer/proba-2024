import mongoose, { Schema } from 'mongoose';

const activitySchema = new Schema({
  titul: { type: String, required: true },
  descripcio: { type: String, required: true },
  max_capacitat: { type: Number, required: true },
  participants: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

export const Activity = mongoose.model('Activity', activitySchema);
