'use server'
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const accessToken = req?.cookies?.accessToken;
    
    if(accessToken) {
      res.setHeader('Set-Cookie', 'accessToken=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT');
      res.status(200).json({message: 'success',data: null, error: null });
    } else {
      res.status(401).json({message: 'failed',data: null, error: "already logged out"});
    }
  } catch (err) {
    console.error(err);

    res.status(500).json({ error: err});
  }
}