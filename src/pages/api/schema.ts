import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch("http://localhost:8000/api/schema");
    const responseJson = await response.json();
    const schema = responseJson?.data;
    res.status(200).json({schema})
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}