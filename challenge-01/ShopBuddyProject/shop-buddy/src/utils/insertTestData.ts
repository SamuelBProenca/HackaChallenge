import dbConnect from './dbConnect';
import UserModel from '@/models/User';
import PurchaseModel from '@/models/Purchase';

export async function insertTestData() {
  await dbConnect();

  const user1 = await UserModel.create({
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    purchases: [], // Adicione esta linha
  });

  const user2 = await UserModel.create({
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password456',
    purchases: [], // Adicione esta linha
  });

  const purchase1 = await PurchaseModel.create({
    items: [
      { id: '1', name: 'Apples', quantity: 3, purchased: false },
      { id: '2', name: 'Bananas', quantity: 5, purchased: false },
    ],
    sharedWith: [user2._id],
  });

  const purchase2 = await PurchaseModel.create({
    items: [
      { id: '1', name: 'Bread', quantity: 2, purchased: false },
      { id: '2', name: 'Milk', quantity: 1, purchased: false },
    ],
    sharedWith: [user1._id],
  });

  user1.purchases.push(purchase1._id);
  user2.purchases.push(purchase2._id);

  await user1.save();
  await user2.save();
}
