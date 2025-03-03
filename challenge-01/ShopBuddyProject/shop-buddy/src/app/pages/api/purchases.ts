import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/dbConnect';
import PurchaseModel from '@/models/Purchase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      const purchases = await PurchaseModel.find({});
      res.status(200).json({ success: true, data: purchases });
      break;
    case 'POST':
      const purchase = await PurchaseModel.create(req.body);
      res.status(201).json({ success: true, data: purchase });
      break;
    // Outros métodos (PUT, DELETE) podem ser adicionados aqui
    default:
      res.status(400).json({ success: false });
      break;
  }
}
