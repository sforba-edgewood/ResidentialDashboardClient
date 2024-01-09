import type { NextApiRequest, NextApiResponse } from 'next'
const cookie = require('cookie');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req?.cookies?.accessToken) {
    const token = req?.cookies?.accessToken;
    try {
      const serverResponse = await fetch( "http://localhost:8000/api/verify", {
          method: "POST",
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({token}),
      }).then((responseData)=>{ 
        return responseData.json();
      }).catch((e)=> {
        return e;
      });

      const {userEmail, userFullName} = serverResponse?.data || {};
      console.log(serverResponse);
      res.status(200).json({ verification: true, user: {userEmail, userFullName}, message: 'success', error: null });
    } catch (error) {
      res.status(401).json({ verification: false, message: 'failed', error: error });
    }
  } else {
    res.status(401).json({ verification: false, message: 'failed',  error: 'authentication unsuccessful' });
  }

}