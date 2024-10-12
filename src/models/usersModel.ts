import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  nom: { type: String, required: true },
  cognom: { type: String, required: true },
  edat: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  activitats: [{ type: Schema.Types.ObjectId, ref: 'Activity' }]
});

export const User = mongoose.model('User', userSchema);
