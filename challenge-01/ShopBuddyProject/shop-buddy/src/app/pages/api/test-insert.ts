import type { NextApiRequest, NextApiResponse } from 'next';
import { insertTestData } from '@/utils/insertTestData';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    await insertTestData();
    res.status(200).json({ success: true, message: 'Test data inserted' });
  } else {
    res.status(400).json({ success: false, message: 'Invalid request method' });
  }
}
