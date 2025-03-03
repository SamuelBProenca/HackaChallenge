import mongoose, { Schema, Document, Model } from 'mongoose';
import bcrypt from 'bcryptjs';

interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  purchases: mongoose.Types.ObjectId[];
  comparePassword: (candidatePassword: string) => Promise<boolean>;
}

const UserSchema = new Schema<UserDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    purchases: [{ type: mongoose.Types.ObjectId, ref: 'Purchase' }],
  },
  { timestamps: true } // Agora o Mongoose adiciona automaticamente createdAt e updatedAt
);

// Hash da senha antes de salvar
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Método para comparar senha
UserSchema.methods.comparePassword = async function (candidatePassword: string) {
  return bcrypt.compare(candidatePassword, this.password);
};

const UserModel: Model<UserDocument> = mongoose.models.User || mongoose.model('User', UserSchema);

export default UserModel;
