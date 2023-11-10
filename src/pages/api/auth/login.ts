import type { NextApiRequest, NextApiResponse } from 'next'
const cookie = require('cookie');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const serverResponse= await fetch( "http://localhost:8000/api/login", {
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
    });

    if(serverResponse.status === 200) {

      res.setHeader(
          'Set-Cookie',
          cookie.serialize('accessToken', String(serverResponse?.body?.data), {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7, // 1 week
            sameSite: 'strict',
            path: '/'
          })
      );
      res.status(200).json({ message:"success" , error: null });
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({ message:"log in failed" , error: err });
  }
}