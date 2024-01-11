import type { NextApiRequest, NextApiResponse } from 'next'
const cookie = require('cookie');
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const serverResponse = await fetch( "http://localhost:8000/api/register", {
      method: "POST",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body), 
  }).then((responseData)=>{ 
    return responseData.json();
  }).catch((e)=> {
    return e;
  });

  } catch (err) {
    res.status(500).json({ error: 'failed to load data' });
  }
}