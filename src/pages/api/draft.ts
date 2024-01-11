import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {

    if (req.method == 'POST') {
      const response = await fetch( "http://localhost:8000/api/draft", {
          method: "POST",
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(req.body), 
      });
      const draftJson = await response.json();
    }
    if (req.method == 'GET') {
      const response = await fetch("http://localhost:8000/api/draft");
      res.status(200).json({message: 'success'});
    }
  } catch (err) {
    res.status(500).json({ error: 'failed to post draft' })
  }
}