import mongoose, { Schema, Document, Model } from 'mongoose';
import { Purchase } from '@/types/purchase';
import { Product } from '@/types/product';

// Interface que estende a interface Purchase e Document do Mongoose
interface PurchaseDocument extends Document {
  id: string;
  items: Product[];
  createdAt: Date;
  updatedAt: Date;
  sharedWith: mongoose.Types.ObjectId[]; // Atualizado para armazenar ObjectIds
}

// Definindo o schema do Product
const ProductSchema = new Schema<Product>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  purchased: { type: Boolean, default: false },
});

// Definindo o schema do Purchase
const PurchaseSchema = new Schema<PurchaseDocument>({
  items: [ProductSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  sharedWith: [{ type: mongoose.Types.ObjectId, ref: 'User' }], // Referência ao modelo User
});

// Criando o modelo Purchase
const PurchaseModel: Model<PurchaseDocument> = mongoose.models.Purchase || mongoose.model<PurchaseDocument>('Purchase', PurchaseSchema);

export default PurchaseModel;
