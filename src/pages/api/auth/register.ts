import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {

  } catch (err) {
    res.status(500).json({ error: 'failed to load data' });
  }
}