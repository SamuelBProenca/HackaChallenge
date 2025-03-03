import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/dbConnect';
import UserModel from '@/models/User';
import PurchaseModel from '@/models/Purchase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      const users = await UserModel.find({}).populate('purchases');
      res.status(200).json({ success: true, data: users });
      break;
    case 'POST':
      const user = await UserModel.create(req.body);
      res.status(201).json({ success: true, data: user });
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
