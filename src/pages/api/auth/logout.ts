import type { NextApiRequest, NextApiResponse } from 'next';
import { cookies } from 'next/headers';
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get('accessToken');

    if(accessToken) {
      console.log(cookieStore)
      cookieStore.delete('accessToken');

      res.status(200).json({message: 'success',data: null, error: null });
    } else {
      res.status(401).json({message: 'failed',data: null, error: "already logged out"});
    }
  } catch (err) {
    res.status(500).json({ error: err});
  }
}