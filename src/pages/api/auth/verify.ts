import type { NextApiRequest, NextApiResponse } from 'next'
const cookie = require('cookie');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.cookies);
  if(req.cookies.accessToken) {
    try {
      const serverResponse = await fetch( "http://localhost:8000/api/verify", {
          method: "POST",
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(req?.cookies?.accessToken), 
      }).then((responseData)=>{ 
        return responseData.json();
      }).catch((e)=> {
        return e;
      });
      res.status(200).json({ verification: true, message: 'success', error: null });
    } catch (error) {
      res.status(error?.response?.status).send(error?.response?.message)
    }
  } else {
    res.status(401).json({ verification: false, message: 'failed',  error: 'authentication unsuccessful' });
  }

}